import RegisterAndLoginForm from "./RegisterAndLoginForm"
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";
// import dotenv from 'dotenv';

// dotenv.config();

function App() {
  // axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.baseURL = `https://chatapi-k062.onrender.com`;
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
    
  )
}

export default App
