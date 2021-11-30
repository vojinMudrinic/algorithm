let dots = ["a", "b", "c", "d"];

const connectDots = (first, second) => {
  console.log(`${first} point is connected to ${second}`);
};

const runDots = () => {
  for (let i = 0; i < dots.length - 1; i += 1) {
    connectDots(dots[0], dots[i + 1]);
  }
  dots = dots.slice(1);
  if (dots.length > 1) {
    runDots();
  }
};

runDots();
