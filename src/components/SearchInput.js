import React from 'react';

//class //<h1> Image search engine</h1>
//event - event handlers
//onclick onsubmit, onchange
class SearchInput extends React.Component {

constructor(props){
  super(props)
  this.state={entry: ''}
}

onFormSubmit = (event) =>{
  event.preventDefault();
  this.props.onSearchSubmit(this.state.entry)
}

  render(){
    return(

<div className = 'ui segment' >
<form action="" onSubmit={this.onFormSubmit}  className='ui form'>
  <div className='field'>
    <div className='ui massive icon input'>
      <input type="text"
      placeholder='Image search engine, search here ... '
      onChange={(event)=>
        this.setState({entry:event.target.value})}
        value={this.state.entry}
      />
      <i className='search icon'></i>
    </div>
  </div>
</form>
</div>
    )
  }
}

export default SearchInput;
