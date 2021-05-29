import { inject, TestBed } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

const createTwoTodos = () => {
  let todo1 = new Todo({title: 'Hello 1', complete: false});
  let todo2 = new Todo({title: 'Hello 2', complete: true});
  return [todo1, todo2];
}

describe('TodoDataService', () => {
  // let service: TodoDataService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(TodoDataService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      const todos = createTwoTodos();
      service.addTodo(todos[0]);
      service.addTodo(todos[1]);
      expect(service.getAllTodos()).toEqual(todos);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      const todos = createTwoTodos();
      service.addTodo(todos[0]);
      service.addTodo(todos[1]);
      expect(service.getTodoById(1)).toEqual(todos[0]);
      expect(service.getTodoById(2)).toEqual(todos[1]);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      const todos = createTwoTodos();
      service.addTodo(todos[0]);
      service.addTodo(todos[1]);
      expect(service.getAllTodos()).toEqual(todos);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todos[1]]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todos = createTwoTodos();
      service.addTodo(todos[0]);
      service.addTodo(todos[1]);
      expect(service.getAllTodos()).toEqual(todos);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual(todos);
    }));

    describe('#updateTodoById(id, values)', () => {
  
      it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
        let todo = new Todo({title: 'Hello 1', complete: false});
        service.addTodo(todo);
        let updatedTodo = service.updateTodoById(1, {
          title: 'new title'
        });
        expect(updatedTodo).not.toBeNull();
        expect(updatedTodo ? updatedTodo.title : '').toEqual('new title');
      }));
  
      it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
        let todo = new Todo({title: 'Hello 1', complete: false});
        service.addTodo(todo);
        let updatedTodo = service.updateTodoById(2, {
          title: 'new title'
        });
        expect(updatedTodo).toBeNull();
      }));
  
    });
  
    describe('#toggleTodoComplete(todo)', () => {
  
      it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
        let todo = new Todo({title: 'Hello 1', complete: false});
        service.addTodo(todo);
        let updatedTodo = service.toggleTodoComplete(todo);
        expect(updatedTodo).not.toBeNull();
        expect(updatedTodo ? updatedTodo.complete : false).toEqual(true);
        service.toggleTodoComplete(todo);
        expect(updatedTodo).not.toBeNull();
        expect(updatedTodo ? updatedTodo.complete : true).toEqual(false);
      }));
  
    });
    
  });
  
});