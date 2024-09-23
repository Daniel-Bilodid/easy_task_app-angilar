import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() name?: string;
}
