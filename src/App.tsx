import React, { Suspense } from "react";

import { Provider } from "jotai";
import JotaiTable from "./components/JotaiTable";

function App() {
  return (
    <Provider>
      <Suspense fallback="Loading...">
        <JotaiTable />
      </Suspense>
    </Provider>
  );
}

export default App;
