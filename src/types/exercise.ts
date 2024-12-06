export interface Exercise {
  name: string;
  description: string;
  steps: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  muscleGroups: string[];
  imageUrl: string;
}
