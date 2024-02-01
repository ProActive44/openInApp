import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";

function App() {
  const [page, setPage] = useState(true);

  const handleChangePage = ()=>{
    setPage(!page);
  }

  return (
    <div className="h-[100%]">{page ? <SignInPage changePage={handleChangePage}/> : <Dashboard />}</div>
  );
}

export default App;
