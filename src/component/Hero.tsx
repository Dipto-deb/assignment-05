
import banner from'../assets/banner-stack.png'


const Hero = () => {
  return (
    <section className="flex items-center justify-between px-8 py-40 max-w-7xl mx-auto">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="text-gray-900">Build Your Ideal</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-lg mt-6">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg">
            Explore Technologies
          </button>
          <button className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={banner} alt="Development stack illustration" className="w-[420px]" />
      </div>
    </section>
  );
};

export default Hero;