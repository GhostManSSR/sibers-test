import "@/assets/styles/globals.css";
import { Provider } from "react-redux";
import Layout from "@/components/layout";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </PersistGate>
      </Provider>
  );
}