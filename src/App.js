import React, {Component} from "react"; /* 리액트는 라이브러리이기 때문에 리액트에서 컴포넌트를 사용할 수 있게 가져와서 확장 해주는 것. */
import "./App.css"; /* import로 가져오기 */

export default class App extends Component { /* 세미콜론 사용 X */

state = {

  value: "",
  todoData: []
}

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    cursor: "pointer", /* 해당 태그 위에 위치하는 마우스 모양 바꾸기 (pointer는 손가락 모양) */
    float: "right",
    borderRadius: "50%"
  }

  getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter(data => data.id !== id)
    console.log("newTodoData", newTodoData);
    this.setState({todoData: newTodoData});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(), // 유니크한 id 값
      title: this.state.value,
      completed: false
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({todoData: [...this.state.todoData, newTodo], value: ""});
  }

  handleCompleteChange = (id) => {
    let newToDoData = this.state.todoData.map((data) => {
      if(data.id === id)
        {
          data.completed = !data.completed;
        }
        return data;
      });
      this.setState({todoData: newToDoData});

  }

  render() { /* class 기법 */
    return ( /* 여러 요소가 있을 때 부모 요소 하나로 묶어주기! */
      <div className="container"> 
         <div className="todoBlock">
            <div className="title">
              <h1>할 일 목록</h1>
            </div>
            
            {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p><input type="checkbox" onChange={() => this.handleCompleteChange(data.id)} delaultedCecked={false} />
              {" "}{data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
              </p>
            </div>
            ))}

            <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
              <input 
              type="text" 
              name="value" 
              style={{flex: '10', padding: '5px'}}
              placeholder="해야 할 일을 입력하세요"
              value={this.state.value} /* state로 입력되게 하기 */
              onChange={this.handleChange}
              />
              <input
              type="submit"
              value="입력"
              classNmae="btn"
              style={{flex: '1'}}
              />
            </form>
            
          </div>
      </div>  
    )
  }
}
