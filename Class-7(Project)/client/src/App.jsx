import { useEffect, useState } from "react";
import Register from "./pages/Register";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://localhost:5000/")
    .then((response) => response.text())
    .then((data) => {
      setMessage(data);
    });
}, []);

  return <Register />;
}

export default App;