export default function Statistics() {
  return (
    <article className="statistics w-11/12 mx-auto">
      <h2 className="text-center mb-4 text-3xl font-bold text-darker-violet">
        Advanced Statistics
      </h2>
      <p className="text-center text-grayish-violet mb-12 md:w-2/5 md:mx-auto md:mb-24">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="features w-[96%] auto mx-auto flex flex-col md:flex-row md:gap-6 md:h-[320px]">
        <div className="feature brand md:self-start">
          <div className="feature-img">
            <img src="/images/icon-brand-recognition.svg" alt="" />
          </div>
          <h3 className="feature-title">Brand Recognition</h3>
          <p className="about-feature">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill conidence in your content.
          </p>
        </div>
        <div className="feature brand md:self-center">
          <div className="feature-img">
            <img src="/images/icon-detailed-records.svg" alt="" />
          </div>
          <h3 className="feature-title">Detailed Records</h3>
          <p className="about-feature">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="feature brand after:hidden md:self-end">
          <div className="feature-img">
            <img src="/images/icon-fully-customizable.svg" alt="" />
          </div>
          <h3 className="feature-title">Fully Customizable</h3>
          <p className="about-feature">
            Improve brand awarness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </article>
  );
}
