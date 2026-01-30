// Presentation Layer - Custom Hooks
// React hooks for UI state management

import { useState, useEffect } from 'react';
import { HostingPlan } from '@domain/entities/HostingPlan';
import { container } from '@infrastructure/di/Container';

export const useHostingPlans = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const data = await container.getHostingPlansUseCase.execute();
        setPlans(data);
        setError(null);
      } catch (err) {
        setError('Failed to load hosting plans');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, loading, error };
};

export const useFeaturedPlans = () => {
  const [plans, setPlans] = useState<HostingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const data = await container.getFeaturedPlansUseCase.execute();
        setPlans(data);
        setError(null);
      } catch (err) {
        setError('Failed to load featured plans');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return { plans, loading, error };
};
