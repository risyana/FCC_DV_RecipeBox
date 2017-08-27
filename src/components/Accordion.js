import React, { Component } from 'react';
import Button from './Button';

class Accordion extends Component{
    render(){
        return(
            <div className='panel-group' id='accordion' >
                {
                    this.props.data.map((item,index) =>
                    <div className='panel panel-default' key={index}>
                        <div className='panel-heading'>
                            <h1 className='panel-title'>
                            <a data-toggle='collapse'
                                data-parent='#accordion'
                                href={`#${index}`}>
                            {item.food}
                            </a>
                            </h1>
                        </div>
                        <div className='panel-collapse collapse' id={index}>
                            <div className='panel-body'> 
                                <ul className='list-group'>
                                    {item.recipe.split(',').map((item, index)=>
                                    <li className='list-group-item' key={index}>
                                        {item}
                                    </li>
                                    )}
                                </ul>
                                <span className='pull-left'>
                                    <Button 
                                        onClick={()=> this.props.onClickEdit(index)}  
                                        cn='btn btn-success btn-xs'>
                                    Edit
                                    </Button>
                                    {' '}
                                    <Button 
                                        onClick={()=> this.props.onClickDelete(index)}  
                                        cn='btn btn-danger btn-xs'>
                                    delete
                                    </Button>
                                </span>
                            </div>
                        </div>
                    </div>
                    ) // end map
                }     
            </div>
        );
    }
}

export default Accordion;