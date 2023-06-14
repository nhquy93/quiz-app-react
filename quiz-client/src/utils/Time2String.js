export const Time2String = (sec) => {
  return (
    Math.floor(sec / 60)
      .toString()
      .padStart(2, "0") + " minutes"
  );
};

export const GetReturnTime = (time) => {
  const mins = parseInt(time / 60, 10);
  const secs = parseInt(time % 60, 10);

  return (
    (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
  );
};
