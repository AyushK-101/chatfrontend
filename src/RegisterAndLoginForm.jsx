import axios from "axios";
import { useContext, useState } from "react"
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
  
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [isLoginOrRegister, setIsLoginOrRegister]=useState('register');

  const {setUsername: setLoggedInUsername, setId} = useContext(UserContext);

  // async function register(ev) {
  //    ev.preventDefault();
  //    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
  //    const {data} = await axios.post(url, {username,password});
  //    setLoggedInUsername(username);
  //    setId(data.id);
     
  // }

  async function register(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    try {
      const { data } = await axios.post(url, { username, password });
      setLoggedInUsername(username);
      setId(data.id);
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data;
        alert(errorMessage);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  }

  return(
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={register}>
        <input 
        value={username}
        onChange={ev => setUsername(ev.target.value)}
        type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2 border" />
        
        <input 
        value={password}
        onChange={ev => setPassword(ev.target.value)}
        type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />
        
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister==='register'?'Register':'Login'}
        </button>
        
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div>
              Already a member?
              <button className="ml-1 text-blue-500" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div>
              Dont have an account?
              <button className="ml-1 text-blue-500" onClick={() => setIsLoginOrRegister('register')}>
                Register
              </button>
            </div>
          )}
        </div>

      </form>
    </div>
  )
}

