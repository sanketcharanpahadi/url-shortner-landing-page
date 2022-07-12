export default function Starter() {
  return (
    <section className="starter flex flex-col overflow-hidden mb-40 md:w-[88%] md:flex-row-reverse md:ml-auto md:justify-between md:items-center">
      <div className="starter-img w-11/12 ml-auto mb-8 md:w-1/2 md:ml-12">
        <img
          src="/images/illustration-working.svg"
          className="max-w-[900px] w-[486px] md:w-[730px]"
          alt=""
        />
      </div>
      <div className="starter-about md:text-left">
        <h2 className="text-center text-[40px] leading-tight font-black mx-auto text-darker-blue mb-4 md:text-left md:text-7xl md:leading-tight md:mb-1">
          More than just shorter links
        </h2>
        <p className="text-center text-grayish-violet text-lg mx-4 mb-4 md:text-left md:mx-0 md:text-xl md:mb-10">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="mx-auto block bg-primary-cyan text-white font-black w-48 py-3 rounded-3xl text-xl md:mx-0">
          Get Started
        </button>
      </div>
    </section>
  );
}
