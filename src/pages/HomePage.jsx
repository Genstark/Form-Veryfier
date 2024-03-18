import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const [data, setData] = useState([]);
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('myData'));
        if (savedData) {
            setData(savedData);
        }
    }, []);

    function addItem() {
        const newObj = {
            id: Math.random() % 10000 + 1,
            name: userName,
            email: userEmail,
            admin1: false,
            admin2: false,
            admin3: false
        };

        const newData = [...data, newObj];
        setData(newData);
        localStorage.setItem('myData', JSON.stringify(newData));
        setUserName("");
        setUserEmail("");
    }

    return (
        <>
            <fieldset className="w-fit border mt-4 ml-4 p-4">
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" onChange={(e) => setUserName(e.target.value)} className="border" value={userName} /><br />
                <label htmlFor="email">Email Address:</label><br />
                <input type="text" id="email" name="email" onChange={(e) => setUserEmail(e.target.value)} className="border" value={userEmail} /><br />
                <button className="w-full border mt-2" onClick={addItem}>Submit</button>
                <button className="w-full border mt-2" onClick={() => navigate('/alluser')}>All List</button>
                <button className="w-full border mt-2" onClick={() => navigate('/login')}>login</button>
            </fieldset>
        </>
    );
}

export default HomePage;