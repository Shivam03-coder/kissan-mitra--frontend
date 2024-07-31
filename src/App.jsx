import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persitor } from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <PersistGate persistor={persitor}>
        <Layout />
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;