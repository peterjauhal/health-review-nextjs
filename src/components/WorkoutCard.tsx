import { Exercise } from '@/types/exercise';

interface WorkoutCardProps {
  exercise: Exercise;
}

export default function WorkoutCard({ exercise }: WorkoutCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{exercise.name}</h3>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <span className="font-medium">{exercise.durationMinutes} minutes</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{exercise.difficulty}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">{exercise.description}</p>

        {/* Steps */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
          <ol className="list-decimal list-inside space-y-2">
            {exercise.steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>

        {/* Muscle Groups */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Target Areas:</h4>
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups.map((group) => (
              <span
                key={group}
                className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
