const checkTime = i => (i < 10) ? `0${i}` : i;

const showTime = (time = new Date()) => {
  let timeFormatted = '';

  timeFormatted = time.toString();
  timeFormatted = `${checkTime(time.getHours())}:${checkTime(time.getMinutes())}:${checkTime(time.getSeconds())}`;

  return timeFormatted;
};

console.log(  // ===> "05:14:49"
    showTime(new Date())
);
