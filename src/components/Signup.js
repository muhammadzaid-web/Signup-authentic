import React from "react";
import './Signup.css';

function Signup() {

    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');

    const handleSignup= async(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      const formData = {
          email:email,
          password:password,
      };
      
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyTI9sE6NclWKoGpwsn4-MLEwSjOgD-b4",
        {
          method:"POST",
          body:JSON.stringify(formData),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const data =await response.json();
        console.log(data);
        
      
        
    }

  return (
    <div className="sign-up-form ">
      <div>
        <h1 className="text-4xl">Sign up</h1>
        <form onSubmit={handleSignup} className="form"  >
          <div>
          <label htmlFor="email">Email</label>
          </div>
          <div>
          <input type="text" name="email" id="email" required/>
          </div>
          <div>
          <label htmlFor="password">Password</label>
          </div>
          <div>
          <input type="password" name="password" id="password" required />
          </div>
          <button>
            Sign up
          </button>
          <p>
            Have you already account ?<span className="cursor-pointer"> Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;

