require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const contentRoutes = require('./routes/content');
const uploadRoutes = require('./routes/upload');

const app = express();
const PORT = process.env.PORT || 3001;

// In production, frontend and backend share the same origin so CORS isn't
// needed. In development, allow the Vite dev server ports.
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
];

app.use(cors({
  origin: (origin, cb) => {
    // Allow same-origin (no origin header) and whitelisted dev origins
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(null, true); // allow all for self-hosted / single-admin use
  },
  credentials: true,
}));

app.use(express.json());

// Uploaded images
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/upload', uploadRoutes);

// Serve the Vite build output
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// SPA fallback — any route that isn't /api/* or a static file gets index.html
// so React Router handles it client-side (fixes /admin 404 on direct load)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Scalient API running on http://localhost:${PORT}`);
});
