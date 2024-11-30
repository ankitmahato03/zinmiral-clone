const Planes = [
  {
    point: "1. Plan Your Growth",
    description:
      "Dream big and craft your vision with us. Together, we’ll transform your ideas into actionable strategies and profitable results.",
  },
  {
    point: "2. Handover The Project",
    description:
      "We are your project navigators, turning plans into reality. Smooth sailing guaranteed.",
  },
  {
    point: "3. Count The Profit",
    description:
      "Relax and watch your success story unfold. With our guidance, your journey to growth and profits is smooth and rewarding.",
  },
];

const Onboarding = () => {
  return (
    <section className="mt-12">
      <h2 className="text-black text-center text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[62px] mb-12">
        How does it begin?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center lg:items-start lg:gap-8">
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="./images/mobile-image.png"
            alt="image"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          {Planes.map((plan, index) => (
            <div
              key={index}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-black">
                {plan.point}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg font-normal text-gray-700">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
