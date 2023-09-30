import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About = () => {
//     return (
//         <>
//             <div>
//                 <h1>This is my about us page</h1>
//             </div>
//                 <Profile name="nikhil" location="mumbai"/>
//                 <ProfileClass name="shubham" location="manchester"/>
//         </>
//     )
// }

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }

    render(){
        console.log("Parent render called")
        return(
            <>
             <div>
                 <h1>This is my about us page</h1>
             </div>
                 <Profile name="nikhil" location="mumbai"/>
                 <ProfileClass name="first child" location="Manchester"/>
                 {/* <ProfileClass name="second child" location="Liverpool"/>
                 <ProfileClass name="third child" location="Liverpool"/> */}
         </>
        )
    }
}

export default About;

//parent constructor
//parent render
//child constructor
//child render
//json will be logged
//child componentDid Mount
//parent componentDidMOunt

