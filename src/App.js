import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import './App.css';
import { routes } from './components/routes/routes';


function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      <ReactTooltip />
    </div>
  );
}

export default App;
