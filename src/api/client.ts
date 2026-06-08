const BASE = '/api';

function getToken() {
  return localStorage.getItem('admin_token') || '';
}

function authHeaders() {
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` };
}

export async function fetchContent() {
  const res = await fetch(`${BASE}/content`);
  if (!res.ok) throw new Error('Failed to fetch content');
  return res.json();
}

export async function updateSection(section: string, data: unknown) {
  const res = await fetch(`${BASE}/content/${section}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update section');
  return res.json();
}

export async function login(password: string) {
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error('Invalid password');
  return res.json() as Promise<{ token: string }>;
}

export async function verifyToken() {
  const res = await fetch(`${BASE}/auth/verify`, { headers: authHeaders() });
  return res.ok;
}

export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append('image', file);
  const res = await fetch(`${BASE}/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${getToken()}` },
    body: form,
  });
  if (!res.ok) throw new Error('Upload failed');
  const { url } = await res.json();
  return url;
}
