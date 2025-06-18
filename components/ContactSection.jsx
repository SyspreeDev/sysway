const ContactSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Block */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-1">
            We're Here to Help! Reach Out for
          </h2>
          <p className="text-2xl font-semibold text-green-700">
            Assistance <span className="text-black">or</span> Inquiries Anytime<span className="text-black">.</span>
          </p>
        </div>

        {/* Updated Button */}
        <a
          href="#contact"
          className="bg-[#006837] text-white px-8 py-3 rounded-md font-medium text-base transition hover:bg-[#00572c]"
        >
          Contact us
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
