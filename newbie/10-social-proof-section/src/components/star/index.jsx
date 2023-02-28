import IconStar from "../../assets/icon-star";

export const Stars = () => {
  const stars = 5;

  return (
    <>
      {[...new Array(stars)].map((star, i) => (
        <IconStar key={i}/>
      ))}
    </>
  );
};
