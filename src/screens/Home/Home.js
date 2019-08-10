import React, { Component } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import './index.css'
class Home extends Component {
    state = {
        todos: [],
        title: '',
        description: ''
    }

    submitTodo = (e) => {
        e.preventDefault()
        const { title, description, todos } = this.state
        const todoObj = {
            title,
            description
        }
        todos.push(todoObj)
        this.setState({ todos })
    }
    deleteTodo(i) {
        const { todos } = this.state
        todos.splice(i, 1)
        this.setState({ todos })

    }


    // REF
    // button = React.createRef();
    // componentDidUpdate() {
    //     console.log('button', this.refs.kuchbhi)
    //     console.log('myElement', this.myElement)
    // }

    render() {
        console.log(this.button)

        return (


            <div>
                <h1>TODO APP</h1>
                <form onSubmit={this.submitTodo}>
                    <CustomInput type="text" placeholder="Enter Title" onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    <CustomInput type="text" placeholder="Enter Description" onChange={(e) => { this.setState({ description: e.target.value }) }} />
                    <CustomInput type="submit" value="Submit" />
                </form>

                <ul>
                    {this.state.todos.map((val, i) => {
                        return <li key={i} className="todo-list">
                            <span>
                                Title: {val.title}
                            </span>
                            <span>
                                Description: {val.description}
                            </span>
                            <button
                                // ref={(el) => this.myElement = el} 
                                onClick={() => { this.deleteTodo(i) }}
                            // ref='kuchbhi'
                            >Delete</button>
                        </li>
                    })}
                </ul>
            </div>

        );
    }
}

export default Home;