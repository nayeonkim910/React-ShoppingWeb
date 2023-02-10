import './App.css';
import Header from './components/Header';
import {Outlet} from 'react-router-dom';
import {QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { UserContextProvider } from './context/UserContext';
function App() {

  const queryClient = new QueryClient();
  return (
      <>
          <QueryClientProvider client={queryClient}>
            <UserContextProvider>
               <Header/>
               <Outlet/>
            </UserContextProvider>
          </QueryClientProvider>
      </>
  );
}

export default App;
