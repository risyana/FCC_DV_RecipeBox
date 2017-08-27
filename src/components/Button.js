import React, { Component } from 'react';

class Button extends Component{
    render(){
      return(
        <button 
          onClick={this.props.onClick} 
          type='submit'
          className={this.props.cn}
          data-toggle={this.props.dataToggle}
          data-target={this.props.dataTarget}
          ref='button'>
        {this.props.children}
        </button>
      );
    }
  }

  export default Button;