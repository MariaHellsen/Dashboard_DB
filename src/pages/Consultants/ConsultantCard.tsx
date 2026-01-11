import type { Consultant, ConsultantStatus } from '../../models/Consultant';

interface ConsultantCardProps {
  consultant: Consultant;
  onClick: () => void;
}

export const ConsultantCard = ({ consultant, onClick }: ConsultantCardProps) => {
  const getInitials = (name: string): string => {
    const [first, last] = name.split(' ');
    return (first[0] + (last?.[0] ?? '')).toUpperCase();
  };

  const getStatusText = (status: ConsultantStatus): string => {
    const statusMap: Record<ConsultantStatus, string> = {
      'not-applied': 'Not Applied',
      applied: 'Applied',
      'on-assignment': 'On Assignment',
      'on-assignment-with-applications': 'On Assignment, Applied',
    };
    return statusMap[status];
  };

  return (
    <div className="consultant-card clickable" onClick={onClick}>
      <div className="consultant-card__avatar">
        {getInitials(`${consultant.name} ${consultant.surname}`)}
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
