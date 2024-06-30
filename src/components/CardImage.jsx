import { Card } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const CardImage = ({ image, name }) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
    </Card>
  );
};

export default CardImage;
