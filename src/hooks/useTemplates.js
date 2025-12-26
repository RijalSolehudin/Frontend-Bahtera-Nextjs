import { useEffect, useState } from 'react';
import { fetcher, sleep } from '../lib/fetcher';

const PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=16';

function assignType(i) {
  const arr = ['basic', 'premium', 'eksclusif'];
  return arr[i % arr.length];
}

export default function useTemplates() {
  const [state, setState] = useState({ templates: [], loading: true, error: null });

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        // simulate small delay
        await sleep(600);
        const data = await fetcher(PLACEHOLDER_URL);
        const templates = data.map((d, i) => ({
          id: d.id,
          title: d.title,
          thumbnail: d.thumbnailUrl,
          url: d.url,
          type: assignType(i)
        }));
        if (!mounted) return;
        setState({ templates, loading: false, error: null });
      } catch (err) {
        if (!mounted) return;
        setState({ templates: [], loading: false, error: err });
      }
    }

    load();
    return () => (mounted = false);
  }, []);

  return state;
}
