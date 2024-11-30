const WhyZinmiral = () => {
  return (
    <section id="why-zinmiral" className="mt-12">
      <div className="container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-black text-center text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[62px]">
          Why You Choose Zinmiral?
        </h1>
        <p className="text-black text-center font-normal mb-12">
          Zinmiral v/s Others
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-3xl mx-auto">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Zinmiral
            </h3>
            <ul className="text-left text-gray-700 space-y-3 list-disc font-bold text-xl">
              <li>Faster and quick responses</li>
              <li>Ethical Approach</li>
              <li>Accurate Reporting</li>
              <li>Precise Resolutions</li>
            </ul>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Others</h3>
            <ul className="text-left text-gray-700 space-y-3 font-normal">
              <li>Longer turnaround time</li>
              <li>Mediocre methods</li>
              <li>Lack of timely reporting</li>
              <li>No prompt answers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZinmiral;
