import { useEffect, useState } from "react";

async function user () {
    const response = await fetch("https://api.github.com/users/cadudias");
    return await response.json();
}

user()

const InfoPage = async () => {


    const [info, setInfo] = useState([])

    useEffect(() => {
        async function fetchUser() {
            const info = await user()
            setInfo(info)
            console.log(info.avatar_url);
        }
    
        fetchUser()
    }, [])
    
    return (

        <>
            {info.map((info, index) =>
                <div key={index}>
                    <img src={info.avatar_url} alt="foto"/>
                </div>
            )}
        </>

    )
}

export { InfoPage }