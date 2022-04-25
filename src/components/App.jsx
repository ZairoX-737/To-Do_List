import React from 'react';
import '..//App.css';
import Header from './Header';
import Input from './Input';
import List from './List';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
      { id: 1, name: "Read book", done: true, time: new Date().toLocaleTimeString(), date: new Date().toDateString() },
      { id: 2, name: "Write letter", done: false, time: new Date().toLocaleTimeString(), date: new Date().toDateString() },
      { id: 3, name: "Edit cover", done: false, time: new Date().toLocaleTimeString(), date: new Date().toDateString() }
    ],
    todoText: "",
    checked: 0
    } 
  };
  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText}) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false, time: new Date().toLocaleTimeString(), date: new Date().toDateString() }],
      todoText: "",
    }));
  };

  onChangeBox = item => {
    this.setState( ({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done} : el,
      ),
    }));
  };

  handleDel = item => {
    this.setState( ({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  totalChecked() {
    return this.state.todos.filter(props => props.done).length;
  };

  showChangeTime = item => {
    alert('Вы изменили задачу: '+ item.name + " в " + item.time + " | " + item.date);
  }; 

  render(){
    const { todos, todoText } = this.state;
    return (
        <section className='todo-list'>
          <div id="list" className="list-container">
            <Header />

            <Input 
              value={todoText} 
              onChange={this.onChangeInput} 
              onClick={this.onSubmitTodo} 
            />

            <List 
              list={todos}
              onChangeBox={this.onChangeBox}
              handleDel={this.handleDel}
              showChangeTime={this.showChangeTime}
            />

          </div>
          Total Checkbox Checked: { this.totalChecked() }
      </section> 
    );
  }
}

export default App;
