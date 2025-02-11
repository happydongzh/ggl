import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RenderRouter } from "@/router";
import "./App.less";

function App() {

  const AppContent = () => (
    <BrowserRouter>
      <Suspense fallback={<div className="loading"></div>}>
        <RenderRouter />
      </Suspense>
    </BrowserRouter>
  );

  return <AppContent />;
}

export default App;
