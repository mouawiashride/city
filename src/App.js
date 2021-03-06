
import Main from './components/Main';
import { Provider } from 'react-redux'
import store from './redux-tool/Store';
function App() {
  return (

    <Provider store={store}>
        <Main/>
    </Provider>
  );
}

export default App;
