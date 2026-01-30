// Presentation Layer - Domain Hooks

import { useState, useEffect } from 'react';
import { DomainExtension } from '@domain/entities/DomainExtension';
import { container } from '@infrastructure/di/Container';

export const useDomainExtensions = () => {
  const [extensions, setExtensions] = useState<DomainExtension[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        setLoading(true);
        const data = await container.getDomainExtensionsUseCase.execute();
        setExtensions(data);
        setError(null);
      } catch (err) {
        setError('Failed to load domain extensions');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchExtensions();
  }, []);

  return { extensions, loading, error };
};

export const useDomainSearch = () => {
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const searchDomain = async (query: string) => {
    try {
      setSearching(true);
      setError(null);
      const available = await container.searchDomainUseCase.execute(query);
      setResult(available);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed');
      setResult(null);
    } finally {
      setSearching(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { searchDomain, searching, result, error, reset };
};
