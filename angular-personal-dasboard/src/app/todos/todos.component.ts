import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Route } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  todos!: Todo[]

  constructor(private todoService: TodoService, private router: Route) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }
  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed })
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo.id])
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
  }

  trackById(index, item: Todo) {
    return item.id
  }

}
