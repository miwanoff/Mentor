export interface PainPointCard {
  id: string;
  title: string;
  description: string;
}

export interface ProgramTrack {
  id: string;
  title: string;
  ageGroup: string;
  description: string;
  features: string[];
}

export interface StepPath {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuizData {
  step1Selection: string;
  step2Selection: string;
  name: string;
  phone: string;
  email: string;
}
