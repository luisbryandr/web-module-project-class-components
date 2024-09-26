import React from 'react';

class TodoForm extends React.Component{
    render(){
        return(<div>
            <form>
                <input type="text" placeholder="add task here"></input>
                <button>Add Task</button>
                <button>Clear Completed Tasks</button>
            </form>
        </div>)
    }
}

export default TodoForm;