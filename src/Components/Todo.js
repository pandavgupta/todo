import React, { Component } from 'react'

 class Todo extends Component {
  constructor(){
      super();
      this.state={
          tasks:[
              { task: 'check mails',id: 1},
              { task: 'complete hw',id: 2} 
            ],
          currTask: '' 
        }
    }
    handleChange=(ev)=>{
        // console.log(ev.target.value);
        this.setState({
            currTask: ev.target.value
        })
        
    };
    handleSubmit=()=>{
        this.setState({
            // IN react , there should be immutable change in array and object
            tasks:[...this.state.tasks,{ task: this.state.currTask,id: this.state.tasks.length+1 }],
            currTask: ''
        })
    }
    handleDelete=(id)=>{
        this.setState({
            // IN react , there should be immutable change in array and object
            tasks:[...this.state.tasks].filter((tasks)=>{
                return tasks.id!=id;

            })
        })
    }


    render() {
        console.log('render')
    return (<div className='place'>
        
        <div ><h1>Hello To do</h1></div>
        <div>
            <input type='text' value={this.state.currTask} onChange={this.handleChange} />
            <button type='submit' onClick={this.handleSubmit}>submit</button>
        </div>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
                // key use to identify uniquely an object
                <div key={taskObj.id}>
                   <li> <p>{taskObj.task}</p>
                        <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button>
                    </li>
                </div>
            ))

        }
        </ul>
        
        
       
    
    </div>
    
      
    )
  }
}
export default Todo;
