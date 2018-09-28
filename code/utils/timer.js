const timer = (ms, end) => {
  let time = end;
  const timer = setInterval(() => {
    --time;
    console.log('time :: >', time);
    if (time == 0) {
      clearInterval(timer);
      console.log('end :: >', end);
    }
  }, (ms / end));
}

timer(1000, 10);