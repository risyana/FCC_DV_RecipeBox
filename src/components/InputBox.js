import React, { Component } from 'react';

class InputBox extends Component{
    render(){
      return(
        <div className='form-group'>
            <label className={this.props.cn}>
                {this.props.children}
            </label>
            <div className={this.props.cn2}>
                <input 
                    value = {this.props.val} 
                    onChange={this.props.onChangeInputBox} 
                    className={this.props.cn3}
                    id={this.props.id} 
                    type='text' 
                    ref='InputBox' />
          </div>
        </div>
      );
    }
  }

  export default InputBox