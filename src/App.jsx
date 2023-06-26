import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, completeTodo, cancelTodo } from './redux/actions';

const AppWrapper = styled.div`
  .app {
  font-family: 'Black Han Sans', sans-serif;
  width: 800px;
}


.Layout {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin: 10px auto 0 auto;
  max-width: 1200px;
  min-width: 800px;
  margin-left: 185.6px;
  margin-right: 185.6px;

  
}
.bar {
  margin-top: 0px;
  
  width: 800px;
  height: 30px;
  background-color: #d6d6d8;
  font-family:'sans-serif';
  font-size: 20px;
  text-align: left;
  
  
}

.Header {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  text-align: left;
  float: left;
  width: 30%;
  display: inline;
}
.icon {
  width: 70%;
  float: right;
  text-align: right;
}
.Scroll {

  overflow: auto;
  white-space: nowrap;
  margin: 0 auto;
  display: flex;
}


.Input {
  border: 0px;
  height: 25px;
}
`;

const InputArea = styled.div`
  display: flex;
  padding: 20px auto;
  gap: 20px;
  width: 700px;
  height: 50px;
  margin : 20px;
  background-color: #ec4a83;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;


const Title = styled.h2`
  
  font-family:  'Black Han Sans', sans-serif;

`;

const TodoBox = styled.div`
  
  width: 200px;
  border: 3px solid;
  border-radius: 10px;
  height: 150px;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
 
`;

const Button = styled.button`
  border: 0px;
  border-radius: 50px;
  height: 30px;
  margin: 0 10px;
`;

const App = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const doneTodoList = useSelector((state) => state.doneTodoList);

  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
      isDone: false,
    };

    if (title === '' || contents === '') {
      alert('Please enter a title and contents!');
    } else {
      dispatch(addTodo(newTodo));
      setTitle('');
      setContents('');
    }
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeTodoHandler = (todo) => {
    dispatch(completeTodo(todo));
  };

  const cancelTodoHandler = (todo) => {
    dispatch(cancelTodo(todo));
  };

  return (
    <Router>
      <AppWrapper>
        <div className="bar" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="header"> ✨My To-do List✨</span>
          <span className="icon"> ➖➕✖️</span>
        </div>
        <Switch>
          <Route exact path="/">
            <InputArea>
              제목
              <input
                className="Input"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              내용
              <input
                className="Input"
                placeholder="Enter contents"
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              ></input>
              <Button buttonColor="#ffA500" onClick={addTodoHandler}>
                추가하기
              </Button>
            </InputArea>
            <TodoListWrapper>
              <Title>❤️‍🔥WORKING❤️‍🔥</Title>
              <div className="Scroll">
                {todoList.map((todo) => {
                  return (
                    <TodoBox key={todo.id}>
                      <p>{todo.title}</p>
                      <p>{todo.contents}</p>
                      <p>
                        <Button buttonColor="#d0ee17" onClick={() => deleteTodoHandler(todo.id)}>
                          삭제
                        </Button>
                        <Button buttonColor="#d0ee17" onClick={() => completeTodoHandler(todo)}>
                          완료
                        </Button>
                      </p>
                    </TodoBox>
                  );
                })}
              </div>
              <Title>💫DONE💫</Title>
              <div className="Scroll">
                {doneTodoList.map((todo) => {
                  return (
                    <TodoBox key={todo.id}>
                      <p>{todo.title}</p>
                      <p>{todo.contents}</p>
                      <p>
                        <Button buttonColor="#28FE23" onClick={() => deleteTodoHandler(todo.id)}>
                          삭제
                        </Button>
                        <Button buttonColor="#28FE23" onClick={() => cancelTodoHandler(todo)}>
                          취소
                        </Button>
                      </p>
                    </TodoBox>
                  );
                })}
              </div>
            </TodoListWrapper>
          </Route>
          {/* Add other routes here */}
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
