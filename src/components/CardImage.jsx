import { Card } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const CardImage = ({ image, name, title }) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
    </Card>
  );
};

export default CardImage;
