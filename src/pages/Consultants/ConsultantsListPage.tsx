
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Consultant} from '../../models/Consultant';
import ConsultantCard from './ConsultantCard';
import logo from "../../assets/logo_full.svg";
import heroImage from "../../assets/hero-consultants.jpg";
import './ConsultantsListPage.scss';

export const ConsultantsListPage = () => {
  const navigate = useNavigate();
  
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/consultants');
        
        if (!response.ok) {
          throw new Error('Failed to fetch consultants');
        }
        
        const data = await response.json();
        setConsultants(data);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchConsultants();
  }, []); 

    const handleCardClick = (consultant: Consultant) => {
      navigate(`/dashboard/${consultant.id}`);
    };

  if (loading) {
    return (
      <div className="consultants-page">
        <div className="loading">Loading consultants...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="consultants-page">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

   return (
    <div className="consultants-page">
      <div className="hero-section">
        <img 
          src={logo} 
          alt="DevelopersBay Logo" 
          className="logo"
        />
        <img 
          src={heroImage} 
          alt="DevelopersBay Community" 
          className="hero-image"
        />
      </div>

      <div className="content">
        <h2 className="title">Consultants</h2>

        <div className="consultants-grid">
          {consultants.map((consultant) => (
            <ConsultantCard
              key={consultant.id}
              consultant={consultant}
              onClick={() => handleCardClick(consultant)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};