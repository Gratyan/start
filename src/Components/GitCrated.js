import React, { Component } from 'react';
import axios from 'axios';

export default class GitCrated extends Component {
  constructor(props){
    super(props);

    this.state = {
    data1 : []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/gratyan/start')
      .then(resp => {
        const elements = resp.data;
        const fetchedProfileDate = [];

        elements.forEach((date)=>{
          fetchedProfileDate.push({
            data1: date.created_at,
            
          })
        })

        this.setState({data1: fetchedProfileDate});
      });
  }


  render() {

    return (
      <div>
          <h4>Github profile created: {this.state.data1}</h4>
      </div>
    );
  }
}



