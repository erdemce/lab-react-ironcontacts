import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <tr>
              <td>
                <img src={this.props.cnt.pictureUrl} alt="contact"></img>
              </td>
              <td>{this.props.cnt.name}</td>
              <td>{this.props.cnt.popularity.toFixed(2)}</td>
              <td><button onClick={()=>this.props.onDelete(this.props.cnt.id)}>Delete</button></td>
            </tr> 
        )
    }
}
