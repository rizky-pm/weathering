import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import Detail from './components/Detail/Detail';

import Main from './components/Main/Main';

import queryClient from './config/query.config';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Main />
      <Detail />
    </QueryClientProvider>
    // </Provider>
  );
}

export default App;
