import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
    }

    componentDidMount(){
        this.emailRef.current.focus()
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value)
        console.log(this.commentRef.current.value)
    }

    render() {
        return (
            <>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" ref={this.emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <button onClick={this.clickHandler}>Submit</button>            
            </>
        )
    }
}

export default RefsDemo