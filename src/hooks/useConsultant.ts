import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Consultant } from "../models/Consultant";

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
        const response = await fetch(
          `http://localhost:3001/consultants/${consultantId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch consultant");
        }

        const data: Consultant = await response.json();
        setConsultant(data);
      } catch (err) {
        console.error("Failed to fetch consultant:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultant();
  }, [consultantId]);

  const getFirstName = () => {
    return consultant?.name || "Unknown";
  };

  return {
    consultant,
    loading,
    getFirstName,
  };
};
