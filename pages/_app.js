import "../css/index.css";
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from "../components/Header";


function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}

export default MyApp
