import React, { Component } from 'react';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import './App.css';
import Task from "./Task";

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data: [{name: "task-1", id: 0},{name: "task-2", id: 1},{name: "task-3", id: 2},{name: "task-4", id: 3},{name: "task-5", id: 4},]
    }
  }
    onDragStart = () => {
        /*...*/
    };
    onDragUpdate = () => {
        /*...*/
    };
    onDragEnd = (result) => {
        // the only one that is required
        if(!result.destination){
          return;
        }
        const items = Array.from(this.state.data);
        const [removed] = items.splice(result.source.index,1);
        items.splice(result.destination.index, 0, removed);
        this.setState({
          data: items,
        },()=>{
          console.log(this.state);
        });
    };
  render() {
    return (
        <DragDropContext
            onDragStart={this.onDragStart}
            onDragUpdate={this.onDragUpdate}
            onDragEnd={this.onDragEnd}
        >
            <Droppable droppableId="droppable-1" type="PERSON">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'lightgrey' : 'transparent' }}
                        {...provided.droppableProps}
                    >
                        {this.state.data.map((item,index)=><Task key={index} item={item} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
  }
}

export default App;
