import '../styles/reset.scss'
import '../styles/globals.scss'

import {Provider} from 'react-redux';
import {wrapper} from "../store";

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
  );
};

export default MyApp