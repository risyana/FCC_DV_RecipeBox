import React, { Component } from 'react';
import Accordion from './components/Accordion';
import InputForm from './components/InputForm';

const defaultMode = {name:"view", text:"Save", cn:"btn btn-primary btn-sm"};

let food =[{food:"sate",
            recipe:"ayam,nasi,saos"},  
          {food: "soto",
            recipe: "lobak, daging, nasi, sayur"},
          {food: "burger",
            recipe:"daging, rujak, tahu, sosis"}
          ];


let stateFood = (typeof localStorage["_risyana_recipe"] == 'undefined')
            ? food
            : JSON.parse(localStorage["_risyana_recipe"]) ;

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      foodList : stateFood,
      food : "",
      recipe : "",
      mode : defaultMode, //view, edit, delete
      foodListIndex : -1,
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRecipe = this.onChangeRecipe.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }
  
  onChangeName(event){
    this.setState({
      food : event.target.value
    });
  }

  onChangeRecipe(event){
    this.setState({
      recipe : event.target.value
    });
  }

  onClickCancel(event){
    this.setState({
      mode: defaultMode,
      food:"",
      recipe:"",
    });
    this.enableInputBox();
    this.refs.App.refs.InputFormFood.refs.InputBox.focus();
  }
  
  onClickEdit(event){
    this.enableInputBox();
    this.refs.App.refs.InputFormFood.refs.InputBox.focus();
    this.setState({
      mode: {name:"edit", text:"Update", cn:"btn btn-success btn-sm"},
      food: this.state.foodList[event].food,
      recipe: this.state.foodList[event].recipe,
      foodListIndex : event,
    });
  }

  onClickDelete(event){
    this.setState({
      mode: {name:"delete", text:"Delete Now", cn:"btn btn-danger btn-sm"},
      food: this.state.foodList[event].food,
      recipe: this.state.foodList[event].recipe,
      foodListIndex : event,
    });
    this.disableInputBox();
  }

  enableInputBox(){
    this.refs.App.refs.InputFormFood.refs.InputBox.disabled=false;
    this.refs.App.refs.InputFormRecipe.refs.InputBox.disabled=false;
  }

  disableInputBox(){
    this.refs.App.refs.InputFormFood.refs.InputBox.disabled=true;
    this.refs.App.refs.InputFormRecipe.refs.InputBox.disabled=true;
  }

  onClickSave(event){

    if(!this.state.food||!this.state.recipe){
      alert('Please input name & ingredients') ;
      return null;
    } 

    let newFoodList = this.state.foodList;

    if(this.state.mode.name==="view"){
      newFoodList.push({food: this.state.food, recipe: this.state.recipe});
    }else if(this.state.mode.name==="edit"){
      newFoodList[this.state.foodListIndex] = {food : this.state.food, recipe : this.state.recipe }
    }else if(this.state.mode.name==="delete"){
      newFoodList.splice(this.state.foodListIndex,1);
    }
         
    this.setState({
      food : "",
      recipe : "",
      foodList : newFoodList,
      mode : defaultMode,
    });

    localStorage.setItem("_risyana_recipe",JSON.stringify(newFoodList));

    this.enableInputBox();
    this.refs.App.refs.InputFormFood.refs.InputBox.focus();

    event.preventDefault();
  }
  
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col col-md-2'>
          </div>
          <div className='col col-md-8 text-center'>
            <h3>My Recipe Book</h3>
            <hr/>
          </div>
          <div className='col col-md-2'>
          </div>
        </div>
        
        <div className='row'>
          <div className='col col-md-2'>

          </div>
          <div className='col col-md-4'>
            <InputForm 
              onClickSave = {this.onClickSave}  
              onClickCancel = {this.onClickCancel}  
              onChangeName = {this.onChangeName} 
              onChangeRecipe ={this.onChangeRecipe}
              valueFood = {this.state.food}
              valueRecipe = {this.state.recipe}
              mode = {this.state.mode}
              ref='App'/>
          </div>
          <div className='col col-md-4'>
            <div className='well'>
              <h5 className='text-center'>List of Recipe</h5>
              {
                this.state.foodList.length !== 0
                ?
                <Accordion 
                  data = {this.state.foodList}
                  onClickEdit = {this.onClickEdit}
                  onClickDelete = {this.onClickDelete} />
                : <div><hr/> you don't have any recipe yet</div>
              }
            </div>
          </div>
          <div className='col col-md-2'>
          
          </div>
        </div>


      </div>
    );
  }
}


export default App;