import FeatureCard from "../unified/FeatureCard"

export default function UnifiedLearningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Unified Learning Ecosystem
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-16 max-w-2xl mx-auto">
          Everything you need to manage, teach, and learn — unified into one
          powerful, secure digital campus platform.
        </p>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3">

          <FeatureCard
            icon="🎯"
            title="Interactive Quizzes"
            description="Keep students engaged with real-time quizzes that appear directly on their screens."
          />

          <FeatureCard
            icon="✅"
            title="Smart Attendance"
            description="Automated attendance tracking with instant reports and insights."
          />

          <FeatureCard
            icon="🔒"
            title="Enterprise Security"
            description="University-grade data protection with end-to-end encryption."
          />

          <FeatureCard
            icon="📊"
            title="Deep Analytics"
            description="Understand student performance and engagement through powerful analytics."
          />

          {/* Analytics Visual Card */}
         <div className="bg-gradient-to-t from-teal-50 to-white rounded-3xl border border-teal-100 p-6 flex items-end justify-center shadow-lg hover:shadow-xl transition-all">
  <div className="flex gap-4 items-end h-40">
    {/* Each bar */}
    <div className="w-6 rounded-full h-16 bg-gradient-to-t from-teal-300 to-teal-400 hover:from-teal-400 hover:to-teal-500 transition-all" />
     <div className="w-6 rounded-full h-20 bg-gradient-to-t from-teal-300 to-teal-400 hover:from-teal-400 hover:to-teal-500 transition-all" />
    <div className="w-6 rounded-full h-28 bg-gradient-to-t from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 transition-all" />
    <div className="w-6 rounded-full h-36 bg-gradient-to-t from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all" />
  </div>
</div>


        </div>
      </div>
    </div>
  )
}
