import { useState } from "react";

function Login(){
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginStatus, setLoginStatus] = useState(false);

    function mailcheck(){
        const adminData = [
            {
                email: 'admin1',
                password: 'admin1'
            },
            {
                email: 'admin2',
                password: 'admin2'
            },
            {
                email: 'admin3',
                password: 'admin3'
            }
        ];

        for(let i=0; i < adminData.length; i++){
            if(adminData[i].email === email && adminData[i].password === password){
                setLoginStatus(!loginStatus);
                if(loginStatus){
                    alert('login successful');
                }
                break;
            }
        }
    }
    
    return(
        <>
            <fieldset className="border w-fit mt-4 ml-4 p-4">
                <label htmlFor="email">Email:</label><br />
                <input type='text' id='email' name='email' required className="border" onChange={(e) => setEmail(e.target.value)} /><br />
                <label htmlFor="password">Password:</label><br />
                <input type={showPass ? 'text' : 'password'} className="border" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="checkbox" className="mt-2" onChange={(e) => setShowPass(e.target.checked)} /><span>check</span><br />
                <button className="border w-full mt-2" onClick={mailcheck}>login</button>
            </fieldset>
        </>
    );
}

export default Login;