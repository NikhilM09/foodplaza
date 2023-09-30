import React from 'react';
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
            userData : {
                name : "dummy name",
                login   : "dummy id"
            }
        }
    console.log(this.props.name + "Constructor called");
    }

    async componentDidMount(){
        console.log(this.props.name + "ComponentDidMount called");
        const data = await fetch ("https://api.github.com/users/NikhilM09");
        const json = await data.json();
        console.log(json);
        this.setState({
            userData : json
        })
        // this.interval = setInterval(()=>{
        //     console.log("I am setInterval")
        // },1000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevState: " + prevState)
        console.log(this.props.name + "ComponentDidUpdate called");
        if(this.state.count!==prevState.count){
            console.log("count changed");
        }
        if(this.state.count2!==prevState.count2){
            console.log("count2 changed");
        }
    }

    componentWillUnmount(){
        console.log("Component will unmount called");
        // clearInterval(this.interval);
    }

    render() {
        console.log(this.props.name + "Render method called")
        return (
            <div>
                <h3>This is profile class-based component</h3>
                <h6>Name : {this.state.userData.name}</h6>
                <h6>Login : {this.state.userData.login}</h6>
                <h6>Count : {this.state.count}</h6>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={()=>this.setState({
                        count : this.state.count+1,
                        count2 : this.state.count2+1})}>
                    Increment
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={()=>this.setState({
                        count : this.state.count-1,
                        count2 : this.state.count2-1})}>
                    Decrement
                </button>
                <h6>Count2 : {this.state.count2}</h6>
            </div>
        )
    }
}
export default ProfileClass;


