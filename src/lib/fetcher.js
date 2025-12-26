export async function fetcher(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Fetch error');
  }
  return res.json();
}

// helper to simulate network delay in local placeholder data
export function sleep(ms = 600) {
  return new Promise((r) => setTimeout(r, ms));
}
