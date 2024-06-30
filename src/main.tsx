import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import App from "./App.tsx";
import { I18nextProvider } from 'react-i18next';
import i18n from './localization/languages';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
