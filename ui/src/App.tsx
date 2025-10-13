import { AuthProvider } from "./components/provider/AuthProvider";
import "./index.css";
import Route from "./routes/Route";

function App() {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
}

export default App;
