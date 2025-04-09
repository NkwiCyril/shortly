import bgMobile from "../assets/images/bg-boost-mobile.svg";
import bgDesktop from "../assets/images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <section className="bg-[#3b3054] mt-[100px] relative z-10">
      <picture>
        <source srcSet={bgDesktop} media="(min-width: 768px)" />
        <img src={bgMobile} alt="Boost Background" className="w-full object-cover" />
      </picture>

      <div className="flex w-full items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4">
        <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold">
          Boost your links today
        </h2>
        <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-200 cursor-pointer transition-opacity duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Boost;
