import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './components/todo-list-footer/todo-list-footer.component';

@NgModule({
  declarations: [    
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SimpleUIFrameworkModule { }
