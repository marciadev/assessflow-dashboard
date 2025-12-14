import { useState, useEffect } from 'react';
import type { Assessment } from '@/types/types';

interface UseAssessmentDetailProps {
  assessment: Assessment | null;
  isOpen: boolean;
}

interface UseAssessmentDetailReturn {
  activeAssessment: Assessment | null;
  shouldRender: boolean;
  isVisible: boolean;
}

export function useAssessmentDetail({ assessment, isOpen }: UseAssessmentDetailProps): UseAssessmentDetailReturn {
  const [activeAssessment, setActiveAssessment] = useState<Assessment | null>(assessment);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (assessment) {
      setActiveAssessment(assessment);
    }
  }, [assessment]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return {
    activeAssessment,
    shouldRender,
    isVisible
  };
}
