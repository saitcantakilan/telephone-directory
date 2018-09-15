import React, { Component } from 'react'


export class componentName extends Component {
    state = {

    };
  render() {
    return (
      <div>
          <form>
              <input name="name" id="name" placeholder="Enter a name" /> 
              <input type="number" name="phone" id="phone" placeholder="Enter a phone" />
              <button>Add</button>

          </form>
      </div>
    )
  }
}

export default componentName
