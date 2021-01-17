import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.props = props

        // plz dont use default props tena
    }
    getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'

        }
    }
    /// toggle complete
    shouldComponentUpdate() {
        return true
    }

    markComplete = (e) => {
        console.log(this.props)
    }



    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()} onClick={() => this.props.mark(id)} >
                <p>
                    <input type="checkbox" onChange={console.log(id, 'item')} /> {''}
                    {title}{
                        id
                    }
                    <button style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}


export default TodoItem

