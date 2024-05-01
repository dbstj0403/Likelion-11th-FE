import React, {useState} from "react"; /* 리액트는 라이브러리이기 때문에 리액트에서 컴포넌트를 사용할 수 있게 가져와서 확장 해주는 것. */
import "./App.css"; /* import로 가져오기 */
import List from "./components/List";
import Form from "./components/Form";

export default function App (){ /* 세미콜론 사용 X */

const [todoData, setTodoData] = useState([]);
const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 새로운 할일 데이터
    let newTodo = {
      id: Date.now(), // 유니크한 id 값
      title: value,
      completed: false
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

   /* class 기법 */
    return ( /* 여러 요소가 있을 때 부모 요소 하나로 묶어주기! */
      <div className="container"> 
         <div className="todoBlock">
            <div className="title">
              <h1>할 일 목록</h1>
            </div>
           
            <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            
            <List todoData={todoData} setTodoData={setTodoData}/>

          </div>
      </div>  
    )
            
  }

