const mock_user_data = require('../../dummy_data/mock_user_data_5');

const spread = data => [...data];
const on = (f, g) => (a, b) => f(g(a), g(b));
const flip = f => (a, b) => f(...[b, a]);
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const over = (key) => on(compare, key);
const overAndDec = (key) => on(flip(compare), key);

const username       = ({ username })           => username;
const favoriteNumber = ({ favorite_number })    => favorite_number;

const sortedDefault = {
    default:                    spread(mock_user_data),
    descendingDefault:          spread(mock_user_data).reverse(),
    byAZ:                       spread(mock_user_data).sort(over(username)),
    byDescendingAZ:             spread(mock_user_data).sort(overAndDec(username)),
    byFavoriteNumber:           spread(mock_user_data).sort(over(favoriteNumber)),
    byDescendingFavoriteNumber: spread(mock_user_data).sort(overAndDec(favoriteNumber)),
}

console.log(sortedDefault)