import React from 'react'
import '..//App.css'
import Header from './Header'
import Input from './Input'
import List from './List'
import CompleteInfoButton from './CompleteInfoButton'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Read book',
          done: true,
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
        },
        {
          id: 2,
          name: 'Write letter',
          done: false,
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
        },
        {
          id: 3,
          name: 'Edit cover',
          done: false,
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
        },
      ],
      todoText: '',
      checked: 0,
      clicked: false,
    }
  }
  onChangeInput = e => {
    this.setState({ todoText: e.target.value })
  }

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [
        ...todos,
        {
          id: todos.length + 1,
          name: todoText,
          done: false,
          time: new Date().toLocaleTimeString(),
          date: new Date().toDateString(),
        },
      ],
      todoText: '',
    }))
  }

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el,
      ),
    }))
  }

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id),
    }))
  }

  showChangeTime = item => {
    alert(
      'Вы изменили задачу: ' +
        item.name +
        ' в ' +
        item.time +
        ' | ' +
        item.date,
    )
  }

  // функция, которая выполняет логику при нажатии на кнопку "Show amount of complete tasks"
  handleClickShowTasks = () => {
    const checkedBoxes = this.state.todos.filter(props => props.done).length

    this.setState({
      clicked: true,
      checked: checkedBoxes,
    })

    //Вариант со скрытием информации при нажатии на кнопку "Show amount of complete tasks"
    /*
    this.setState(prevState => ({
      clicked: !prevState.clicked,
      checked: checkedBoxes,
    }))
    */
  }

  render() {
    const { todos, todoText, clicked, checked } = this.state
    return (
      <section className='todo-list'>
        <div id='list' className='list-container'>
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
        <CompleteInfoButton
          clicked={clicked}
          handleClick={this.handleClickShowTasks}
          checked={checked}
        />
      </section>
    )
  }
}

export default App
