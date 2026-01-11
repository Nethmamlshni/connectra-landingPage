import FeatureCard from "../unified/FeatureCard"

export default function UnifiedLearningPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center">
          Unified Learning Ecosystem
        </h1>
        <p className="text-center text-gray-600 mt-3 mb-16">
          Everything you need to manage, teach, and learn in one powerful platform.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          <FeatureCard
            icon="🎯"
            title="Interactive Quizzes"
            description="Keep students engaged with real-time quizzes that appear directly on their screens."
          />

          <FeatureCard
            icon="✅"
            title="Smart Attendance"
            description="Automated tracking that generates reports instantly."
          />

          <FeatureCard
            icon="🔒"
            title="Enterprise Security"
            description="University-grade data protection with end-to-end encryption."
          />

          <FeatureCard
            icon="📊"
            title="Deep Analytics"
            description="Gain insights into student performance and engagement trends."
          />

          {/* Analytics Visual Card */}
          <div className="bg-white rounded-2xl border p-6 flex items-end justify-center">
            <div className="flex gap-3 items-end h-40">
              <div className="w-6 bg-gray-200 rounded-lg h-16" />
              <div className="w-6 bg-gray-300 rounded-lg h-28" />
              <div className="w-6 bg-gray-200 rounded-lg h-20" />
              <div className="w-6 bg-gray-300 rounded-lg h-36" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
