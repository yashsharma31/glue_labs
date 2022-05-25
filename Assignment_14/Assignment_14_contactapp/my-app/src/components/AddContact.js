import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: ''
        }
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Please fill all fields");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="ui main">
                <h2 style={{color: "grey",fontSize:"50px",textAlign:"center"}}>Add Contact</h2>
                <form style={{color: "grey",fontSize:"20px",padding:"60px",textAlign:"center"}}className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label style={{padding:"30px"}} >Name</label>
                        <input style={{margin:"10px"}} type="text" placeholder="Name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label style={{padding:"30px"}} >Email</label>
                        <input style={{margin:"10px"}} type="text" placeholder="Email" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button style={{padding:"5px",width:"100px",margin:"20px"}} className="ui button blue">Add</button>
                </form>
            </div>

        )
    }
}

export default AddContact