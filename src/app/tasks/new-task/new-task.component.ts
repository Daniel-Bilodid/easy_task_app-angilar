import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksComponent } from '../tasks.component';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input() isAddingTask!: boolean;
  @Output() closeTask = new EventEmitter<boolean>();
  onCloseTask() {
    this.closeTask.emit(false);
  }
}
