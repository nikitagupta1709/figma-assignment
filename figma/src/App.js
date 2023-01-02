import './App.css';
import Topbar from './Components/Topbar';
import SideNavbar from './Components/SideNavbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Topbar />
      <SideNavbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
