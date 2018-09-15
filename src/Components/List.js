import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';


export class List extends Component {
 static propTypes = {
     contacts: PropTypes.array.isRequired,
 };
    

  render() {
    return (
      <div className={"listArea"}>
        <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone number"} />
        <ul className={"list"}>
            {
                this.props.contacts.map(contact => 
                <li>
                    <span className={"name"}>{contact.name}</span>
                    <span className={"phone"}>{contact.phone}</span>
                    <span className={"clearFix"}></span>
                </li>
                )
            }
            
            
                      
        </ul>
      </div>
    )
  }
}

export default List;
