import { Exercise } from '@/types/exercise';
import WorkoutCard from '@/components/WorkoutCard';

const staticWorkouts: Exercise[] = [
  {
    name: 'Morning Yoga Flow',
    description: 'A gentle yoga sequence to energize your morning and improve flexibility',
    steps: [
      'Start in Mountain Pose (Tadasana)',
      'Flow into Sun Salutation A',
      'Hold Warrior I pose for 5 breaths each side',
      'Transition to Warrior II',
      "End with Child's Pose for relaxation"
    ],
    difficulty: 'beginner',
    durationMinutes: 15,
    muscleGroups: ['core', 'legs', 'back', 'shoulders'],
    imageUrl: '/yoga-flow.jpg'
  },
  {
    name: 'Evening Relaxation',
    description: 'A calming sequence to help you unwind and prepare for rest',
    steps: [
      'Begin in Easy Seat (Sukhasana)',
      'Gentle neck rolls and shoulder stretches',
      'Forward fold in seated position',
      'Reclined spinal twist',
      'End in Savasana'
    ],
    difficulty: 'beginner',
    durationMinutes: 20,
    muscleGroups: ['back', 'hips', 'shoulders'],
    imageUrl: '/relaxation.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Your Health Dashboard</h1>
          <p className="mt-4 text-xl text-gray-600">Track your wellness journey and get personalized recommendations</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Today's Workout</h2>
            <p className="mt-4 text-3xl font-bold text-blue-600">{staticWorkouts[0].name}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Wellness Score</h2>
            <p className="mt-4 text-3xl font-bold text-green-600">85</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-700">Next Session</h2>
            <p className="mt-4 text-3xl font-bold text-purple-600">{staticWorkouts[1].name}</p>
          </div>
        </div>

        {/* Recommended Workouts */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended Workouts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {staticWorkouts.map((workout) => (
              <WorkoutCard key={workout.name} exercise={workout} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
