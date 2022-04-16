import React, { Component } from 'react'

export default class Demoform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment:'',
            language: 'Angular',
            Pets: '',
            Climate:{
                Summer: false,
                Winter: false,
                Spring: false
            }
        }
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    Changelang = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    
    submitHandle = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    radioHandler = (e) =>{
        this.setState({
            Pets: e.target.value
        })
    }

    checkboxHandler = (e) =>{
        let {name,checked} = e.target;
        this.setState((e)=>{
            var selectclimate = e.Climate;
            return selectclimate[name] = checked;
        })
    } 


    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <div>
                    <h1>Demoforms</h1>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text"  id='email' value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea name="comment" id="comment" cols="20" rows="4" value={this.state.comment} onChange={this.commentHandler}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">language: </label>
                    <select name="language" id="language" value={this.state.language} onChange={this.Changelang}>
                        <option value="react">React</option>
                        <option value="vue">vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    <input type="radio" value="Dogs" name="Dogs" id="Dogs" checked={this.state.cars === 'Dogs'} onChange={this.radioHandler}/>
                    <label htmlFor="dogs" >Dogs</label>

                    <input type="radio" value="Cats" name="Cats" id="Cats" checked={this.state.cars === 'Cats'} onChange={this.radioHandler}/>
                    <label htmlFor="cats">Cats</label>

                </div>
                <br />
                <div>
                    <input type="checkbox"  name="Summers"  onChange={this.checkboxHandler} />Summers
                    <input type="checkbox"  name="Winters"  onChange={this.checkboxHandler} /> Winters
                    <input type="checkbox"  name="Springs"  onChange={this.checkboxHandler} /> Springs
                    <div>
                        {Object.keys(this.state.Climate).filter((x)=>this.state.Climate[x])}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }   
}