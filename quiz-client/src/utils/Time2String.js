export const Time2String = (sec) => {
  return (
    Math.floor(sec / 60)
      .toString()
      .padStart(2, "0") + " minutes"
  );
};
