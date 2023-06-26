const initialState = {
    todo: [
      {
        id: 1,
        title: '강아지 산책',
        contents: '오후 2시, 제니랑 만나서',
        isDone: true,
      },
      {
        id: 2,
        title: '리액트 공부',
        contents: '숙제하기',
        isDone: false,
      },
    ],
    doneTodo: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_TODO':
        return {
          ...state,
          todo: state.todo.filter((t) => t.id !== action.payload),
        };
      case 'DELETE_DONE_TODO':
        return {
          ...state,
          doneTodo: state.doneTodo.filter((dt) => dt.id !== action.payload),
        };
      case 'TOGGLE_DONE_TODO':
        const todoItem = state.todo.find((t) => t.id === action.payload);
        if (todoItem) {
          return {
            ...state,
            todo: state.todo.filter((t) => t.id !== action.payload),
            doneTodo: [...state.doneTodo, { ...todoItem, isDone: true }],
          };
        } else {
          const doneTodoItem = state.doneTodo.find((dt) => dt.id === action.payload);
          if (doneTodoItem) {
            return {
              ...state,
              doneTodo: state.doneTodo.filter((dt) => dt.id !== action.payload),
              todo: [...state.todo, { ...doneTodoItem, isDone: false }],
            };
          }
        }
      default:
        return state;
    }
  };
  
  export default todoReducer;
  