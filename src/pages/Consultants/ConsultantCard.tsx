import type { Consultant, ConsultantStatus } from '../../models/Consultant';

interface ConsultantCardProps {
  consultant: Consultant;
  onClick: () => void;
}

export const ConsultantCard = ({ consultant, onClick }: ConsultantCardProps) => {
  
  // Get initials from name- will be changes later to photo
  const getInitials = (name: string): string => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const getStatusText = (status: ConsultantStatus): string => {
    const statusMap: Record<ConsultantStatus, string> = {
      'not-applied': 'Not Applied',
      'applied': 'Applied',
      'on-assignment': 'On Assignment',
      'on-assignment-with-applications': 'On Assignment',
    };
    return statusMap[status];
  };

  // Clickable only for one consultant so far
  const isClickable = consultant.id === 'c5';

  return (
    <div
      className={`consultant-card ${isClickable ? 'clickable' : ''}`}
      onClick={onClick}
    >
      {/* Initials-change to photo later */}
      <div className="consultant-card__avatar">
        {getInitials(consultant.name)}
      </div>

      
        <h3 className="consultant-card__name">{consultant.name}</h3>

        <p className="consultant-card__role">{consultant.role}</p>

        <div className={`consultant-card__status status-${consultant.status}`}>
        <span className="status-dot"></span>
        <span>{getStatusText(consultant.status)}</span>
      </div>
      </div>
  );
};

export default ConsultantCard;