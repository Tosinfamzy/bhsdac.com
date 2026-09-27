const AudioEmbed = ({ type, embedUrl, title }) => {
  if (type === "spotify") {
    return (
      <div className="w-full max-w-md">
        <iframe
          src={embedUrl}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={title || "Spotify Player"}
          className="rounded-card"
        />
      </div>
    );
  }

  if (type === "mixlr") {
    return (
      <div className="w-full max-w-md">
        <iframe
          src={embedUrl}
          width="100%"
          height="180"
          frameBorder="0"
          title={title || "Mixlr Player"}
          className="rounded-card"
        />
      </div>
    );
  }

  return null;
};

export default AudioEmbed;
