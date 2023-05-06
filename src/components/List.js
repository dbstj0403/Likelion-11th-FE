import React from 'react'

export default function List({todoData, setTodoData}) {
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        cursor: "pointer", /* 해당 태그 위에 위치하는 마우스 모양 바꾸기 (pointer는 손가락 모양) */
        float: "right",
        borderRadius: "50%"
      }
    
      const getStyle = (completed) => {
        return {
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? "line-through" : "none"
        }
      }

     const handleCompleteChange = (id) => {
        let newToDoData = todoData.map((data) => {
          if(data.id === id)
            {
              data.completed = !data.completed;
            }
            return data;
          });
          setTodoData(newToDoData);
    
      }
    
      const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log("newTodoData", newTodoData);
        setTodoData(newTodoData);
      }
    
    return (
      <div>
        {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}> 
              <p><input type="checkbox" onChange={() => handleCompleteChange(data.id)} delaultedCecked={false} />
              {" "}{data.title}
              <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
              </p>
            </div>
            ))}
      </div>
    )
  }

