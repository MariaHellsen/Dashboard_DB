import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { Consultant } from '../models/Consultant';

export const useConsultant = () => {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [loading, setLoading] = useState(true);
  const { consultantId } = useParams();

  useEffect(() => {
    const fetchConsultant = async () => {
      if (!consultantId) {
        setConsultant(null);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3001/consultants/${consultantId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch consultant');
        }
        
        const data: Consultant = await response.json();
        setConsultant(data);
      } catch (err) {
        console.error('Failed to fetch consultant:', err);
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