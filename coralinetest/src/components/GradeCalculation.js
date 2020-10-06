import React, { Component } from 'react'
import axios from 'axios'

export class GradeCalculation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            score:'',
            errors:'',
            grade:'X'
        }
        this.calHandler=this.calHandler.bind(this)
    }
    changeHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    calHandler(){
        axios.get('http://localhost:5000/calGrade/'+this.state.score)
        .then(response=>{
            // console.log(response)
            this.setState({
                grade:response.data,
                errors:''
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errors:'Please enter data'
            })
        })
    }
    render() {
        const {score,errors,grade}=this.state
        return (
            <div>
                {
                    errors ? <div>{errors}</div>
                    :null
                }
                <label>Score:</label>
                
                <input type="text" 
                name="score" 
                value={score}
                onChange={this.changeHandler}
                ></input>
                <br></br>
                {/* <button onClick={()=>console.log(this.state)}>Log</button> */}
                <button onClick={this.calHandler}>Calculation Grade</button>
                <h3>Grade : {grade}</h3>
            </div>
        )
    }
}

export default GradeCalculation
