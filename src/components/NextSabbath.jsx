const NextSabbath = () => {
  const getNextSaturday = () => {
    const today = new Date();
    const nextSaturday = new Date();
    nextSaturday.setDate(today.getDate() + ((6 - today.getDay() + 7) % 7));
    return nextSaturday.toDateString();
  };

  return (
    <div>
      <h1>Next Sabbath</h1>
      <p>{getNextSaturday()}</p>
    </div>
  );
};

export default NextSabbath;
