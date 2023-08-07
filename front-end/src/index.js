import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { loginSuccess } from './store/actions/authAction';


const persistedUser = JSON.parse(localStorage.getItem("user"));
const store = createStore(
  rootReducer,
  {
    auth: {
      isLoggedIn: !!persistedUser,
      user: persistedUser || null,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
 
const { auth } = store.getState();
  localStorage.setItem("user", JSON.stringify(auth.user));
});

ReactDOM.render(
  
 
<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();