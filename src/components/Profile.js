import { useState, useEffect } from 'react'
const Profile = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(()=>{
        //api call
        // const interval = setInterval(()=>{
        //     console.log("I am set Interval")
        // },1000)

        // return () => {
        //     console.log("Return function called");
        //     clearInterval(interval);
        // }
    },[count, count2]);

    return (
        <div>
            <h3>This is profile functional component</h3>
            <h6>Name : {name}</h6>
            <h6>Location : {location}</h6>
            <h6>Count : {count}</h6>
            <button
                className="btn btn-sm btn-primary"
                onClick={() => { setCount(count + 1); setCount2(count2 + 1) }}>
                Increment
            </button>
            <button
                className="btn btn-sm btn-danger"
                onClick={() => { setCount(count - 1); setCount2(count2 - 1) }}>
                Decrement</button>
            <h6>Count2 : {count2}</h6>
        </div>
    )
}
export default Profile;