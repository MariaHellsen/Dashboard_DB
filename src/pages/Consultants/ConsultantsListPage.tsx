import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Consultant } from '../../models/Consultant';
import ConsultantCard from './ConsultantCard';
import logo from '../../assets/logo_full.svg';
import heroImage from '../../assets/hero-consultants.jpg';
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/consultants`);

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
        <img src={logo} alt="DevelopersBay Logo" className="logo" />
        <img src={heroImage} alt="DevelopersBay Community" className="hero-image" />
      </div>

      <div className="content">
        <div className="info-section">
          <h2 className="info-section__title">Consultant Dashboard MVP</h2>
          <p className="info-section__description">
            This dashboard adapts dynamically to a consultant's current status. Depending on whether
            a user is active, searching, or on assignment, the layout displays a tailored
            combination of the following sections:
          </p>
          <ul className="info-section__features">
            <li>
              <strong>Availability:</strong> Current status settings (maintained from the existing
              platform).
            </li>
            <li>
              <strong>Search Assignments:</strong> Top matches with matching logic and links to the
              full list.
            </li>
            <li>
              <strong>Applied Assignments:</strong> A clear overview of ongoing applications and
              their status.
            </li>
            <li>
              <strong>On Assignment:</strong> Real-time statistics, time reports, and contract
              tracking.
            </li>
            <li>
              <strong>DevelopersBay News:</strong> Latest corporate updates and events.
            </li>
          </ul>
          <p className="info-section__cta">
            Select a consultant profile below to preview their unique dashboard view based on their
            specific availability and status.
          </p>
        </div>

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
