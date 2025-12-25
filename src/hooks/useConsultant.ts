import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Consultant } from '../models/Consultant';

export const useConsultant = () => {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const consultantId = (() => {
    const m = location.pathname.match(/\/dashboard\/([^/]+)/);
    return m ? m[1] : null;
  })();

  useEffect(() => {
    if (!consultantId) {
      setConsultant(null);
      setLoading(false);
      return;
    }

    const fetchConsultant = async () => {
      try {
        const res = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data: Consultant = await res.json();
        setConsultant(data);
      } catch (e) {
        console.error('Failed to fetch consultant:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultant();
  }, [consultantId]);

  const getFullName = () => {
    if (!consultant) return 'Unknown';  
    return `${consultant.name} ${consultant.surname}` || 'Unknown';
  };

  const getFirstName = () => {
    if (!consultant?.name) return 'Unknown';
   return consultant?.name || 'Unknown';
  };

  const getInitials = (): string => {
    if (!consultant?.name) return '';
    const parts = consultant.name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0]?.[0]?.toUpperCase() || '';
  };

  return { 
    consultant, 
    loading, 
    consultantId, 
    getFullName, 
    getFirstName,
    getInitials 
  };
};