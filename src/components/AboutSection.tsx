export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-6 text-center">
        About PAR Computing
      </h2>
      <div className="max-w-3xl text-gray-300 text-lg text-center mb-8">
        PAR Computing Solutions Pvt Ltd, founded in 2007, delivers end-to-end IT infrastructure solutions with a focus on excellence, dedication, and innovation. Our experienced team partners with organizations to address their most critical business priorities.
      </div>
      {/* Placeholder for image or illustration */}
      <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full opacity-30 blur-2xl mb-4" />
    </section>
  );
} 