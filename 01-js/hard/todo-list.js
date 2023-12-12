/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/


class Todo {
  constructor(){
    this.myList = [];
  }
  add(todo){
    this.myList.push(todo);
  }
  remove(index){
    this.myList.splice(index,1);
  }
  update(index,updatedTodo){
    if(index<this.myList.length){
      this.myList[index]=updatedTodo
    }else{
      return null;
    }
 
  }
  getAll(){
    return this.myList;
  }
  get(indexOfTodo){
    if(indexOfTodo<this.myList.length){
    return this.myList[indexOfTodo]
    }else{
      return null;
    }
  }
  clear(){
    this.myList.length=0;
  }
}

module.exports = Todo;
