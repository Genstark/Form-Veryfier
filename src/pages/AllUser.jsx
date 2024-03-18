import { useEffect, useState } from "react";

function AllUser(){
    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('myData'));
        if (savedData) {
            setData(savedData);
        }
    }, []);

    return(
        <>
            <div className="ml-3 mt-4">
                <h1 className="font-bold">All Users</h1>
                <ul>
                    {data.map((user, index) =>  
                        <li key={index}>{user.name}, {user.email} <span className="border p-2 rounded-full">ok</span> <span className="border p-2 rounded-full">not ok</span></li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default AllUser;