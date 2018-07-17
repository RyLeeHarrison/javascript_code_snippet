const priceMap = {
  'text': ({text, fontSize})     => (text.length * fontSize * 0.01),
  'rectangle': ({width, height}) => (width * height * 0.001),
  'circle': ({width, height})    => (width * (height || width) * 0.001)
};

const calculatePrice = (objects, initialCost = 5) => (
  objects.map(({type, ...rest}) => priceMap[type](rest))
  		 .reduce((a, b) => (a + b), (initialCost))
);