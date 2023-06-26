export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };
  
  export const deleteDoneTodo = (id) => {
    return {
      type: 'DELETE_DONE_TODO',
      payload: id,
    };
  };
  
  export const toggleDoneTodo = (id) => {
    return {
      type: 'TOGGLE_DONE_TODO',
      payload: id,
    };
  };
  