import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { login, verifyToken, uploadImage } from '../api/client';
import { useContent } from '../context/ContentContext';
import type { GrowthCard, WorkItem, Stat, PricingPlan, Testimonial, BlogPost } from '../context/ContentContext';

// ─── Toast ────────────────────────────────────────────────────────────────────
function useToast() {
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const show = useCallback((msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);
  return { toast, show };
}

// ─── Image Upload Button ───────────────────────────────────────────────────────
function ImgUpload({ value, onChange, label }: { value: string; onChange: (url: string) => void; label?: string }) {
  const [uploading, setUploading] = useState(false);
  async function handle(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch { alert('Upload failed'); }
    finally { setUploading(false); }
  }
  return (
    <div className="ap-field">
      {label && <label className="ap-label">{label}</label>}
      {value && (
        <div className="ap-img-preview">
          <img src={value} alt="preview" />
        </div>
      )}
      <label className="ap-img-upload-btn">
        <span>📁</span> {value ? 'Change Image' : 'Upload Image'}
        {uploading && <span className="ap-uploading">Uploading…</span>}
        <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handle} />
      </label>
      <div style={{ marginTop: 6 }}>
        <input className="ap-input" style={{ fontSize: 12, marginTop: 4 }} placeholder="or paste image URL" value={value} onChange={e => onChange(e.target.value)} />
      </div>
    </div>
  );
}

// ─── Save Button ──────────────────────────────────────────────────────────────
function SaveBar({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
      <button className="ap-btn-primary" onClick={onSave} disabled={saving}>
        {saving ? 'Saving…' : 'Save Changes'}
      </button>
    </div>
  );
}

// ─── Section Editors ──────────────────────────────────────────────────────────

function NavbarEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.navbar);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.navbar); }, [content]);

  async function save() {
    setSaving(true);
    try { await updateSection('navbar', data); show('Navbar saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">CTA Button</div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Button Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => setData({ ...data, ctaText: e.target.value })} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Button Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => setData({ ...data, ctaLink: e.target.value })} />
          </div>
        </div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function HeroEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.hero);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.hero); }, [content]);

  const set = (k: keyof typeof data, v: unknown) => setData(prev => ({ ...prev, [k]: v }));

  async function save() {
    setSaving(true);
    try { await updateSection('hero', data); show('Hero saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Badge</div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Badge Label ("New")</label>
            <input className="ap-input" value={data.badgeNew} onChange={e => set('badgeNew', e.target.value)} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Badge Text</label>
            <input className="ap-input" value={data.badgeText} onChange={e => set('badgeText', e.target.value)} />
          </div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Headline</div>
        <div className="ap-field">
          <label className="ap-label">Title</label>
          <input className="ap-input" value={data.title} onChange={e => set('title', e.target.value)} />
        </div>
        <div className="ap-field">
          <label className="ap-label">Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => set('description', e.target.value)} />
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">CTA Buttons</div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Primary Button Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => set('ctaText', e.target.value)} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Primary Button Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => set('ctaLink', e.target.value)} />
          </div>
        </div>
        <div className="ap-field">
          <label className="ap-label">Watch Demo Video URL</label>
          <input className="ap-input" value={data.watchDemoUrl} onChange={e => set('watchDemoUrl', e.target.value)} />
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Hero Image</div>
        <ImgUpload value={data.heroImage} onChange={v => set('heroImage', v)} label="Hero Image" />
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Floating Cards Text &amp; Numbers</div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Partner Count (e.g. "200+")</label>
            <input className="ap-input" value={data.partnerNumber} onChange={e => set('partnerNumber', e.target.value)} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Partner Label</label>
            <input className="ap-input" value={data.partnerText} onChange={e => set('partnerText', e.target.value)} />
          </div>
        </div>
        <div className="ap-field">
          <label className="ap-label">Trust Text</label>
          <input className="ap-input" value={data.trustText} onChange={e => set('trustText', e.target.value)} />
        </div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Location Count (e.g. "200+")</label>
            <input className="ap-input" value={data.locationNumber} onChange={e => set('locationNumber', e.target.value)} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Location Label</label>
            <input className="ap-input" value={data.locationText} onChange={e => set('locationText', e.target.value)} />
          </div>
        </div>
        <div className="ap-field">
          <label className="ap-label">Locations (comma-separated)</label>
          <input className="ap-input" value={data.locations.join(', ')} onChange={e => set('locations', e.target.value.split(',').map(s => s.trim()))} />
        </div>
        <div className="ap-field">
          <label className="ap-label">Marketing Team Label</label>
          <input className="ap-input" value={data.marketingLabel} onChange={e => set('marketingLabel', e.target.value)} />
        </div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function AboutEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.about);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.about); }, [content]);
  const set = (k: keyof typeof data, v: string) => setData(prev => ({ ...prev, [k]: v }));

  async function save() {
    setSaving(true);
    try { await updateSection('about', data); show('About saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Text Content</div>
        <div className="ap-field">
          <label className="ap-label">Section Label</label>
          <input className="ap-input" value={data.sectionLabel} onChange={e => set('sectionLabel', e.target.value)} />
        </div>
        <div className="ap-field">
          <label className="ap-label">Main Description</label>
          <textarea className="ap-textarea" style={{ minHeight: 120 }} value={data.description} onChange={e => set('description', e.target.value)} />
        </div>
        <div className="ap-field">
          <label className="ap-label">Bottom Tagline</label>
          <input className="ap-input" value={data.bottomText} onChange={e => set('bottomText', e.target.value)} />
        </div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">CTA Button Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => set('ctaText', e.target.value)} />
          </div>
          <div className="ap-field">
            <label className="ap-label">CTA Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => set('ctaLink', e.target.value)} />
          </div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Images</div>
        <div className="ap-grid-2">
          <ImgUpload value={data.image1} onChange={v => set('image1', v)} label="Image 1" />
          <ImgUpload value={data.image2} onChange={v => set('image2', v)} label="Image 2" />
        </div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function GrowthEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.growth);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.growth); }, [content]);

  function updateCard(i: number, k: keyof GrowthCard, v: string) {
    const cards = data.cards.map((c, idx) => idx === i ? { ...c, [k]: v } : c);
    setData(prev => ({ ...prev, cards }));
  }
  function addCard() { setData(prev => ({ ...prev, cards: [...prev.cards, { title: 'New Service', description: 'Description here' }] })); }
  function removeCard(i: number) { setData(prev => ({ ...prev, cards: prev.cards.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('growth', data); show('Growth section saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Section Header</div>
        <div className="ap-field"><label className="ap-label">Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => setData(p => ({ ...p, description: e.target.value }))} /></div>
        <div className="ap-grid-2">
          <div className="ap-field"><label className="ap-label">CTA Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => setData(p => ({ ...p, ctaText: e.target.value }))} /></div>
          <div className="ap-field"><label className="ap-label">CTA Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => setData(p => ({ ...p, ctaLink: e.target.value }))} /></div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Service Cards</div>
        {data.cards.map((card, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">Card {i + 1}</span>
              <button className="ap-btn-danger" onClick={() => removeCard(i)}>Remove</button>
            </div>
            <div className="ap-field"><label className="ap-label">Title</label>
              <input className="ap-input" value={card.title} onChange={e => updateCard(i, 'title', e.target.value)} /></div>
            <div className="ap-field"><label className="ap-label">Description</label>
              <textarea className="ap-textarea" value={card.description} onChange={e => updateCard(i, 'description', e.target.value)} /></div>
          </div>
        ))}
        <button className="ap-btn-add" onClick={addCard}>+ Add Card</button>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function WorkEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.work);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.work); }, [content]);

  function updateItem(i: number, k: keyof WorkItem, v: string) {
    const items = data.items.map((it, idx) => idx === i ? { ...it, [k]: v } : it);
    setData(prev => ({ ...prev, items }));
  }
  function addItem() { setData(p => ({ ...p, items: [...p.items, { title: 'New Project', date: 'January - 2026', image: '', link: '/work/new-project' }] })); }
  function removeItem(i: number) { setData(p => ({ ...p, items: p.items.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('work', data); show('Work section saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Section Title</div>
        <div className="ap-field">
          <label className="ap-label">Title Line 1 (e.g. "OUR BEST")</label>
          <input className="ap-input" value={data.titleLine1} onChange={e => setData(p => ({ ...p, titleLine1: e.target.value }))} />
        </div>
        <div className="ap-grid-2">
          <div className="ap-field">
            <label className="ap-label">Animated Word — Start (e.g. "WOR")</label>
            <input className="ap-input" value={data.titleLine2Start} onChange={e => setData(p => ({ ...p, titleLine2Start: e.target.value }))} />
          </div>
          <div className="ap-field">
            <label className="ap-label">Animated Word — End (e.g. "KS")</label>
            <input className="ap-input" value={data.titleLine2End} onChange={e => setData(p => ({ ...p, titleLine2End: e.target.value }))} />
          </div>
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>
          The animated image appears between the two parts of the second line word.
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Section CTA</div>
        <div className="ap-grid-2">
          <div className="ap-field"><label className="ap-label">Button Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => setData(p => ({ ...p, ctaText: e.target.value }))} /></div>
          <div className="ap-field"><label className="ap-label">Button Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => setData(p => ({ ...p, ctaLink: e.target.value }))} /></div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Work Items</div>
        {data.items.map((item, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">{item.title || `Item ${i + 1}`}</span>
              <button className="ap-btn-danger" onClick={() => removeItem(i)}>Remove</button>
            </div>
            <div className="ap-grid-2">
              <div className="ap-field"><label className="ap-label">Title</label>
                <input className="ap-input" value={item.title} onChange={e => updateItem(i, 'title', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Date</label>
                <input className="ap-input" value={item.date} onChange={e => updateItem(i, 'date', e.target.value)} /></div>
            </div>
            <div className="ap-field"><label className="ap-label">Project Link</label>
              <input className="ap-input" value={item.link} onChange={e => updateItem(i, 'link', e.target.value)} /></div>
            <ImgUpload value={item.image} onChange={v => updateItem(i, 'image', v)} label="Project Image" />
          </div>
        ))}
        <button className="ap-btn-add" onClick={addItem}>+ Add Work Item</button>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function NumberEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.number);
  const [saving, setSaving] = useState(false);
  const [newTag, setNewTag] = useState('');
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.number); }, [content]);

  function updateStat(i: number, k: keyof Stat, v: string) {
    const stats = data.stats.map((s, idx) => idx === i ? { ...s, [k]: v } : s);
    setData(p => ({ ...p, stats }));
  }
  function addTag() {
    if (!newTag.trim()) return;
    setData(p => ({ ...p, tags: [...p.tags, newTag.trim()] }));
    setNewTag('');
  }
  function removeTag(i: number) { setData(p => ({ ...p, tags: p.tags.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('number', data); show('Numbers section saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Section Header</div>
        <div className="ap-field"><label className="ap-label">Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => setData(p => ({ ...p, description: e.target.value }))} /></div>
        <div className="ap-grid-2">
          <div className="ap-field"><label className="ap-label">CTA Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => setData(p => ({ ...p, ctaText: e.target.value }))} /></div>
          <div className="ap-field"><label className="ap-label">CTA Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => setData(p => ({ ...p, ctaLink: e.target.value }))} /></div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Stats (e.g. "500K", "98%")</div>
        {data.stats.map((stat, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-title" style={{ marginBottom: 10 }}>Stat {i + 1}</div>
            <div className="ap-grid-3">
              <div className="ap-field"><label className="ap-label">Value</label>
                <input className="ap-input" value={stat.value} onChange={e => updateStat(i, 'value', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Label</label>
                <input className="ap-input" value={stat.label} onChange={e => updateStat(i, 'label', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Description</label>
                <input className="ap-input" value={stat.description} onChange={e => updateStat(i, 'description', e.target.value)} /></div>
            </div>
          </div>
        ))}
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Scrolling Tags</div>
        <div className="ap-tags">
          {data.tags.map((tag, i) => (
            <span key={i} className="ap-tag">{tag} <button onClick={() => removeTag(i)}>×</button></span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input className="ap-input" placeholder="Add a tag…" value={newTag} onChange={e => setNewTag(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTag()} />
          <button className="ap-btn-secondary" onClick={addTag}>Add</button>
        </div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function TrustedEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.trusted);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.trusted); }, [content]);

  function updateLogo(i: number, v: string) {
    const logos = data.logos.map((l, idx) => idx === i ? v : l);
    setData(p => ({ ...p, logos }));
  }
  function addLogo() { setData(p => ({ ...p, logos: [...p.logos, ''] })); }
  function removeLogo(i: number) { setData(p => ({ ...p, logos: p.logos.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('trusted', data); show('Trusted section saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-field"><label className="ap-label">Section Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Brand Logos</div>
        {data.logos.map((logo, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">Logo {i + 1}</span>
              <button className="ap-btn-danger" onClick={() => removeLogo(i)}>Remove</button>
            </div>
            <ImgUpload value={logo} onChange={v => updateLogo(i, v)} />
          </div>
        ))}
        <button className="ap-btn-add" onClick={addLogo}>+ Add Logo</button>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function PlanEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.plan);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.plan); }, [content]);

  function updatePlan(billing: 'monthly' | 'yearly', i: number, k: keyof PricingPlan, v: unknown) {
    const plans = data[billing].map((p, idx) => idx === i ? { ...p, [k]: v } : p);
    setData(prev => ({ ...prev, [billing]: plans }));
  }
  function updateFeature(billing: 'monthly' | 'yearly', planIdx: number, featIdx: number, v: string) {
    const plans = data[billing].map((p, i) => i === planIdx ? { ...p, features: p.features.map((f, j) => j === featIdx ? v : f) } : p);
    setData(prev => ({ ...prev, [billing]: plans }));
  }
  function addFeature(billing: 'monthly' | 'yearly', planIdx: number) {
    const plans = data[billing].map((p, i) => i === planIdx ? { ...p, features: [...p.features, 'New feature'] } : p);
    setData(prev => ({ ...prev, [billing]: plans }));
  }
  function removeFeature(billing: 'monthly' | 'yearly', planIdx: number, featIdx: number) {
    const plans = data[billing].map((p, i) => i === planIdx ? { ...p, features: p.features.filter((_, j) => j !== featIdx) } : p);
    setData(prev => ({ ...prev, [billing]: plans }));
  }

  function PlanForm({ billing }: { billing: 'monthly' | 'yearly' }) {
    return (
      <>
        {data[billing].map((plan, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">{plan.name}</span>
              {plan.highlighted && <span style={{ fontSize: 11, background: '#7c6ef6', color: '#fff', padding: '2px 8px', borderRadius: 20 }}>Featured</span>}
            </div>
            <div className="ap-grid-2">
              <div className="ap-field"><label className="ap-label">Name</label>
                <input className="ap-input" value={plan.name} onChange={e => updatePlan(billing, i, 'name', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Price</label>
                <input className="ap-input" value={plan.price} onChange={e => updatePlan(billing, i, 'price', e.target.value)} /></div>
            </div>
            <div className="ap-field"><label className="ap-label">Description</label>
              <textarea className="ap-textarea" value={plan.description} onChange={e => updatePlan(billing, i, 'description', e.target.value)} /></div>
            <div className="ap-field"><label className="ap-label">Link</label>
              <input className="ap-input" value={plan.link} onChange={e => updatePlan(billing, i, 'link', e.target.value)} /></div>
            <div className="ap-label" style={{ marginBottom: 6 }}>Features</div>
            {plan.features.map((feat, j) => (
              <div key={j} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                <input className="ap-input" value={feat} onChange={e => updateFeature(billing, i, j, e.target.value)} />
                <button className="ap-btn-danger" onClick={() => removeFeature(billing, i, j)}>×</button>
              </div>
            ))}
            <button className="ap-btn-add" onClick={() => addFeature(billing, i)}>+ Feature</button>
          </div>
        ))}
      </>
    );
  }

  async function save() {
    setSaving(true);
    try { await updateSection('plan', data); show('Plans saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Section Header</div>
        <div className="ap-field"><label className="ap-label">Subtitle</label>
          <input className="ap-input" value={data.subtitle} onChange={e => setData(p => ({ ...p, subtitle: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => setData(p => ({ ...p, description: e.target.value }))} /></div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Monthly Plans</div>
        <PlanForm billing="monthly" />
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Yearly Plans</div>
        <PlanForm billing="yearly" />
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function FeedbackEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.feedback);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.feedback); }, [content]);

  function updateT(i: number, k: keyof Testimonial, v: string) {
    const testimonials = data.testimonials.map((t, idx) => idx === i ? { ...t, [k]: v } : t);
    setData(p => ({ ...p, testimonials }));
  }
  function addT() { setData(p => ({ ...p, testimonials: [...p.testimonials, { text: 'Great agency!', name: 'Name', role: 'Role', image: '' }] })); }
  function removeT(i: number) { setData(p => ({ ...p, testimonials: p.testimonials.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('feedback', data); show('Feedback saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-field"><label className="ap-label">Section Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Section Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => setData(p => ({ ...p, description: e.target.value }))} /></div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Testimonials</div>
        {data.testimonials.map((t, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">{t.name || `Testimonial ${i + 1}`}</span>
              <button className="ap-btn-danger" onClick={() => removeT(i)}>Remove</button>
            </div>
            <div className="ap-field"><label className="ap-label">Quote</label>
              <textarea className="ap-textarea" value={t.text} onChange={e => updateT(i, 'text', e.target.value)} /></div>
            <div className="ap-grid-2">
              <div className="ap-field"><label className="ap-label">Name</label>
                <input className="ap-input" value={t.name} onChange={e => updateT(i, 'name', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Role / Title</label>
                <input className="ap-input" value={t.role} onChange={e => updateT(i, 'role', e.target.value)} /></div>
            </div>
            <ImgUpload value={t.image} onChange={v => updateT(i, 'image', v)} label="Author Photo" />
          </div>
        ))}
        <button className="ap-btn-add" onClick={addT}>+ Add Testimonial</button>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function BlogEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.blog);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.blog); }, [content]);

  function updatePost(i: number, k: keyof BlogPost, v: string) {
    const posts = data.posts.map((p, idx) => idx === i ? { ...p, [k]: v } : p);
    setData(prev => ({ ...prev, posts }));
  }
  function addPost() {
    setData(p => ({ ...p, posts: [...p.posts, { image: '', category: 'General', title: 'New Post', description: '', author: '', authorImage: '', date: '', link: '/blog/new-post' }] }));
  }
  function removePost(i: number) { setData(p => ({ ...p, posts: p.posts.filter((_, idx) => idx !== i) })); }

  async function save() {
    setSaving(true);
    try { await updateSection('blog', data); show('Blog section saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-field"><label className="ap-label">Section Title</label>
          <input className="ap-input" value={data.title} onChange={e => setData(p => ({ ...p, title: e.target.value }))} /></div>
        <div className="ap-field"><label className="ap-label">Description</label>
          <textarea className="ap-textarea" value={data.description} onChange={e => setData(p => ({ ...p, description: e.target.value }))} /></div>
        <div className="ap-grid-2">
          <div className="ap-field"><label className="ap-label">CTA Button Text</label>
            <input className="ap-input" value={data.ctaText} onChange={e => setData(p => ({ ...p, ctaText: e.target.value }))} /></div>
          <div className="ap-field"><label className="ap-label">CTA Link</label>
            <input className="ap-input" value={data.ctaLink} onChange={e => setData(p => ({ ...p, ctaLink: e.target.value }))} /></div>
        </div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Blog Posts</div>
        {data.posts.map((post, i) => (
          <div key={i} className="ap-repeat-item">
            <div className="ap-repeat-item-header">
              <span className="ap-repeat-item-title">{post.title || `Post ${i + 1}`}</span>
              <button className="ap-btn-danger" onClick={() => removePost(i)}>Remove</button>
            </div>
            <div className="ap-grid-2">
              <div className="ap-field"><label className="ap-label">Category</label>
                <input className="ap-input" value={post.category} onChange={e => updatePost(i, 'category', e.target.value)} /></div>
              <div className="ap-field"><label className="ap-label">Date</label>
                <input className="ap-input" value={post.date} onChange={e => updatePost(i, 'date', e.target.value)} /></div>
            </div>
            <div className="ap-field"><label className="ap-label">Title</label>
              <input className="ap-input" value={post.title} onChange={e => updatePost(i, 'title', e.target.value)} /></div>
            <div className="ap-field"><label className="ap-label">Description</label>
              <textarea className="ap-textarea" value={post.description} onChange={e => updatePost(i, 'description', e.target.value)} /></div>
            <div className="ap-field"><label className="ap-label">Post Link (slug)</label>
              <input className="ap-input" value={post.link} onChange={e => updatePost(i, 'link', e.target.value)} /></div>
            <div className="ap-grid-2">
              <div className="ap-field"><label className="ap-label">Author Name</label>
                <input className="ap-input" value={post.author} onChange={e => updatePost(i, 'author', e.target.value)} /></div>
            </div>
            <ImgUpload value={post.image} onChange={v => updatePost(i, 'image', v)} label="Cover Image" />
            <ImgUpload value={post.authorImage} onChange={v => updatePost(i, 'authorImage', v)} label="Author Photo" />
          </div>
        ))}
        <button className="ap-btn-add" onClick={addPost}>+ Add Blog Post</button>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function CTAEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.cta);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.cta); }, [content]);

  async function save() {
    setSaving(true);
    try { await updateSection('cta', data); show('CTA saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-field"><label className="ap-label">Marquee Text</label>
          <input className="ap-input" value={data.text} onChange={e => setData({ text: e.target.value })} />
          <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>This text scrolls across the CTA banner.</div>
        </div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

function FooterEditor() {
  const { content, updateSection } = useContent();
  const [data, setData] = useState(content!.footer);
  const [saving, setSaving] = useState(false);
  const { toast, show } = useToast();
  useEffect(() => { setData(content!.footer); }, [content]);
  const setS = (k: keyof typeof data, v: unknown) => setData(p => ({ ...p, [k]: v }));

  async function save() {
    setSaving(true);
    try { await updateSection('footer', data); show('Footer saved!'); }
    catch { show('Save failed', 'error'); }
    finally { setSaving(false); }
  }

  return (
    <div>
      <div className="ap-card">
        <div className="ap-card-title">Newsletter</div>
        <div className="ap-field"><label className="ap-label">Title</label>
          <input className="ap-input" value={data.newsletterTitle} onChange={e => setS('newsletterTitle', e.target.value)} /></div>
        <div className="ap-field"><label className="ap-label">Note below email input</label>
          <input className="ap-input" value={data.emailNote} onChange={e => setS('emailNote', e.target.value)} /></div>
        <div className="ap-field"><label className="ap-label">Copyright Text</label>
          <input className="ap-input" value={data.copyright} onChange={e => setS('copyright', e.target.value)} /></div>
      </div>
      <div className="ap-card">
        <div className="ap-card-title">Social Links</div>
        <div className="ap-field"><label className="ap-label">Facebook URL</label>
          <input className="ap-input" value={data.socialLinks.facebook} onChange={e => setS('socialLinks', { ...data.socialLinks, facebook: e.target.value })} /></div>
        <div className="ap-field"><label className="ap-label">Twitter / X URL</label>
          <input className="ap-input" value={data.socialLinks.twitter} onChange={e => setS('socialLinks', { ...data.socialLinks, twitter: e.target.value })} /></div>
        <div className="ap-field"><label className="ap-label">Instagram URL</label>
          <input className="ap-input" value={data.socialLinks.instagram} onChange={e => setS('socialLinks', { ...data.socialLinks, instagram: e.target.value })} /></div>
      </div>
      <SaveBar onSave={save} saving={saving} />
      {toast && <div className={`ap-toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}

// ─── Section config ────────────────────────────────────────────────────────────
const SECTIONS = [
  { key: 'navbar',    label: 'Navbar',      component: NavbarEditor },
  { key: 'hero',     label: 'Hero',         component: HeroEditor },
  { key: 'about',    label: 'About',        component: AboutEditor },
  { key: 'growth',   label: 'Growth / Services', component: GrowthEditor },
  { key: 'work',     label: 'Work',         component: WorkEditor },
  { key: 'number',   label: 'Numbers',      component: NumberEditor },
  { key: 'trusted',  label: 'Trusted Brands', component: TrustedEditor },
  { key: 'plan',     label: 'Pricing Plans', component: PlanEditor },
  { key: 'feedback', label: 'Feedback',     component: FeedbackEditor },
  { key: 'blog',     label: 'Blog',         component: BlogEditor },
  { key: 'cta',      label: 'CTA Banner',   component: CTAEditor },
  { key: 'footer',   label: 'Footer',       component: FooterEditor },
];

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr('');
    try {
      const { token } = await login(pw);
      localStorage.setItem('admin_token', token);
      onLogin();
    } catch {
      setErr('Incorrect password. Please try again.');
    } finally { setLoading(false); }
  }

  return (
    <div className="ap-login">
      <div className="ap-login-card">
        <h1>Admin Panel</h1>
        <p>Scalient CMS — Enter your password to continue</p>
        <form onSubmit={submit}>
          <input type="password" placeholder="Admin password" value={pw} onChange={e => setPw(e.target.value)} autoFocus />
          <button type="submit" className="ap-login-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
          {err && <div className="ap-error">{err}</div>}
        </form>
      </div>
    </div>
  );
}

// ─── Main Admin Panel ─────────────────────────────────────────────────────────
export default function AdminPanel() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [active, setActive] = useState('hero');
  const navigate = useNavigate();
  const { content } = useContent();

  useEffect(() => {
    verifyToken().then(valid => { setAuthed(valid); setChecking(false); });
  }, []);

  function logout() {
    localStorage.removeItem('admin_token');
    setAuthed(false);
  }

  if (checking) return <div className="ap-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>Loading…</div>;
  if (!authed) return <div className="ap-root"><LoginScreen onLogin={() => setAuthed(true)} /></div>;
  if (!content) return <div className="ap-root" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>Loading content…</div>;

  const ActiveSection = SECTIONS.find(s => s.key === active)?.component ?? HeroEditor;
  const activeLabel = SECTIONS.find(s => s.key === active)?.label ?? 'Section';

  return (
    <div className="ap-root">
      <header className="ap-header">
        <div className="ap-header-title">Scalient Admin</div>
        <div className="ap-header-right">
          <a className="ap-view-site" onClick={() => navigate('/')} href="/" target="_blank" rel="noreferrer">↗ View Site</a>
          <button className="ap-logout-btn" onClick={logout}>Log Out</button>
        </div>
      </header>
      <div className="ap-body">
        <aside className="ap-sidebar">
          <div className="ap-sidebar-label">Sections</div>
          {SECTIONS.map(s => (
            <button
              key={s.key}
              className={`ap-nav-item${active === s.key ? ' active' : ''}`}
              onClick={() => setActive(s.key)}
            >
              {s.label}
            </button>
          ))}
        </aside>
        <main className="ap-main">
          <div className="ap-section-header">
            <h2>{activeLabel}</h2>
          </div>
          <ActiveSection />
        </main>
      </div>
    </div>
  );
}
