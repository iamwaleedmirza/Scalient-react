const express = require('express');
const fs = require('fs');
const path = require('path');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

const CONTENT_FILE = path.join(__dirname, '../data/content.json');

function readContent() {
  return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
}

function writeContent(data) {
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2));
}

// GET /api/content — public, read all content
router.get('/', (req, res) => {
  try {
    res.json(readContent());
  } catch (err) {
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// PUT /api/content/:section — protected, update one section
router.put('/:section', requireAuth, (req, res) => {
  try {
    const { section } = req.params;
    const content = readContent();
    if (!(section in content)) {
      return res.status(404).json({ error: `Section "${section}" not found` });
    }
    content[section] = req.body;
    writeContent(content);
    res.json({ success: true, section, data: content[section] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update content' });
  }
});

module.exports = router;
