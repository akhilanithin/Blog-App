
  import { useState } from "react";

export default function Otpmodel() {
    const [email, setEmail] = useState("");
  
    const baseUrl = "http://localhost:3000";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
      };
  
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          }
        });
    };
    

        return (

            <div className="Inclusive-register-page">
        
              <div className="register-big-wrapper">
        
        
                <div className="register-banner-section ">
        
                  <img src="register.png" alt="banner" width="490px" />
                </div>
        
                <div className="section-wrapper">
        
                  <div className="top-suggest_login">
                    <span> Have an account? </span>
                    <a href="/login">Sign In</a>
                  </div>
        
                  <div className="top-register-explain">
                    <h2>Welcome to MERN Blog </h2>
        
                    <p>
                      It's easy and free to post your thinking on any topic and connect with thounsands of readers.
        
                    </p>
        
        
                  </div>
        
        
                  <form >
                
                    <div className="input-wrapper">
                      <input
                        type="email"
                        required
                        id="email"
                        placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        tabIndex={1}
                      />
                      <label htmlFor="email">E-mail</label>
        
        
                    </div>
               
                    <button type="submit" onClick={() => sendEmail()} >
                      Register
                    </button>
        
                  </form>
        
                </div>
        
              </div>
        
            </div>
          );

  }