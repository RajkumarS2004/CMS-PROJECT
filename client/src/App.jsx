import { AuthProvider } from "./context/Authcontext";
import AppRoutes from "./routes/Approutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;