// eslint-disable-next-line react/prop-types
const CardImage = ({ image, name, title }) => {
  return (
    <article className="rounded-card overflow-hidden shadow-card bg-primary text-white">
      <img src={image} alt={name} loading="lazy" className="w-full aspect-[3/4] object-cover object-top" />
      <div className="p-4">
        <h5 className="font-bold tracking-tight text-h3 md:text-2xl">{name}</h5>
        <span className="text-small text-white/80">{title}</span>
      </div>
    </article>
  );
};

export default CardImage;
