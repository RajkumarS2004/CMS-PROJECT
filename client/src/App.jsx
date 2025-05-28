
import {Authprovider} from './context/Authcontext';
import AppRoutes from './routes/Approutes';

function App() {
  return (
    <Authprovider>
      <AppRoutes/>
    </Authprovider>
  );
}

export default App;

