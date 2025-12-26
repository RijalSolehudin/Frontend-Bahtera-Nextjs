import { useEffect, useState } from 'react';
import { plans } from '../data/plans';
import { sleep } from '../lib/fetcher';

export default function usePlans() {
  const [data, setData] = useState({ plans: [], loading: true, error: null });

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        await sleep(600);
        if (!mounted) return;
        setData({ plans, loading: false, error: null });
      } catch (err) {
        if (!mounted) return;
        setData({ plans: [], loading: false, error: err });
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  return data;
}
