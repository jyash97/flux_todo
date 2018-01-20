import React, { Component } from 'react';

import AppStore from './AppStore';
import Items from './Items';

import AddItem from './AddItem';

import './styles.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      data:AppStore.getItems()
    };
    this.updateItems=this.updateItems.bind(this);
  }

  updateItems(){
    this.setState({
      data:AppStore.getItems()
    });
  }

  componentDidMount(){
    AppStore.on('change',this.updateItems);
  }

  componentWillUnmount(){
    AppStore.off('change',this.updateItems);
  }

  render() {
    const {data} =this.state;
    const completed =  data.filter( task => task.done);
    const todo =  data.filter( task => !task.done);
    return (
      <div className='container'>
        <h1>FLUX TODO APP</h1>
        <AddItem />
        <Items title='Todo' tasks={todo} />
        <Items title='Completed' tasks={completed}/>
      </div>
    );
  }
}

export default App;
