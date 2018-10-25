import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd';

class Task extends Component {

    render() {
        return(
            <Draggable draggableId={this.props.item.id.toString()} index={this.props.index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div style={{background: 'lightblue', margin: '10px auto', padding: 20, textAlign: 'center', width: '40%'}}>
                            {this.props.item.name}
                        </div>
                    </div>
                )}
            </Draggable>
        )
    }
}
export default Task;
