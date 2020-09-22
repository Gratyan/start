import React, { Component } from 'react'

export class ChangeColor extends Component {
    constructor(props){
        super(props);
        this.state={
            color:'green',
        }
    }
    handleChangeColor = () => {
        if(this.state.color === 'green'){
            this.setState({color:'red'})
        }
         else {
            this.setState({color:'green'})
        }
    }
    render() {
        return (
            <div>
                <h1 style={{color:this.state.color}}>Congrats!</h1>
                <button onClick={this.handleChangeColor}>
                    Color change
                </button>
            </div>
        )
    }
}

export default ChangeColor
