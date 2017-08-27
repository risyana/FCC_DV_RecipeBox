import React, { Component } from 'react';
import InputBox from './InputBox';
import Button from './Button';

class InputForm extends Component{
    render(){
      return(
        <form className='form-horizontal' onSubmit={this.props.onClickSave}>
            <InputBox 
              val = {this.props.valueFood} 
              onChangeInputBox = {this.props.onChangeName} 
              cn='control-label col-sm-3' 
              cn2='col-sm-9'
              cn3='form-control'
              id = 'foodname'
              ref='InputFormFood'>
                Name
            </InputBox>
            <InputBox 
              val = {this.props.valueRecipe} 
              onChangeInputBox={this.props.onChangeRecipe} 
              cn='control-label col-sm-3' 
              cn2='col-sm-9'
              cn3='form-control'
              id = 'recipename'
              ref='InputFormRecipe'>
                Ingredient
            </InputBox>    
            <div className="form-group">        
              <div className="col-sm-offset-3 col-sm-9">
                <Button 
                  onClick={this.props.onClickSave} 
                  cn={this.props.mode.cn}>
                {this.props.mode.text}
                </Button>
                {' '}
                {
                  this.props.mode.name === 'edit' || this.props.mode.name === 'delete' 
                  ? 
                  <Button 
                    onClick={this.props.onClickCancel} 
                    cn='btn btn-default btn-sm'
                    >
                    Cancel
                  </Button>
                  : null
                }
              </div>
            </div>
        </form>
      );
    }
  }
  
export default InputForm;  