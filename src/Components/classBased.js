import React, { Component } from 'react';
import Input from "./Input";
import Label from "./Label";
import Button from './Button'
import Form from "./Form";
import Map from './map';

class ClassBased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            textValue: '',
            todo: {},
            todos: []
        }
    }


    increaseHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decreaseHandler = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    deleteHandler = (id) => {
        const todo1 = this.state.todos.filter(el => el.id !== id)
        this.setState({
            todos: todo1
        })
    }


    render() {
        // return <div className="w-full flex justify-center items-center">
        //     <div className="text-center">
        //         <h1>{this.state.counter}</h1>
        //         <div className="flex gap-4">
        //             <button className="py-2 px-4 bg-green-400 rounded-xl" onClick={this.increaseHandler}>+</button>
        //             <button className="py-2 px-4 bg-green-400 rounded-xl" onClick={this.decreaseHandler}>-</button>
        //         </div>
        //         <input value={this.state.textValue} onChange={e => this.setState({ textValue: e.target.value })} />
        //         <p>{this.state.textValue}</p>
        //     </div>
        // </div>
        return <div className="w-3/5 m-auto mt-8">
            <Form>
                <Label lab="todo" />
                <Input
                    onChange={e =>
                        this.setState({
                            todo: {
                                text: e.target.value,
                                id: Math.random().toString().split('.')[1]
                            }
                        })
                    }
                    placeholder="ajil"
                    id="todo"
                    value={this.state.todo.text}

                />
                <Button val='nemeh' type='normal' bg="green" click={e => {
                    e.preventDefault();

                    if (this.state.todo.text !== "") {
                        console.log(this.state.todo)
                        this.setState({
                            todos: [...this.state.todos, this.state.todo],
                            todo: {
                                text: '',
                                id: ''
                            }
                        })
                    }
                }} />


                <Map items={this.state.todos} editHandler={this.editHandler} deleteHandler={this.deleteHandler} />

            </Form>

        </div >
    }
}

export default ClassBased