import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen((loc) => {
  console.log(loc);
});

export default history;
