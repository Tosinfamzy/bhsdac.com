const SectionHeader = ({ title, subtitle, light = false, centered = true }) => {
  return (
    <header className={`mb-8 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-sans font-bold uppercase text-h3 md:text-3xl ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-small md:text-body ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
