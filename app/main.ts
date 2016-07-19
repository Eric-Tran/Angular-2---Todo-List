import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
export class TaskService {
	tasks;
	constructor() {
		this.tasks = [
			{title: "First Task", completed: false},
			{title: "Second Task", completed: false},
			{title: "Third Task", completed: false},
			{title: "Fourth Task", completed: false}
		]
	}
	addTask(task) {
		this.tasks.push(task);
	}
}

// ==============================================================

@Component({
	selector: 'task-list',
	template: `
	<h4>Task List</h4>
	<ul>
		<li *ngFor="let task of taskService.tasks" class='items'>
			<span [class.completed]="task.completed">{{ task.title }} - {{ task.completed }}</span>
			<button (click)="completeTask(task)">Click to Complete</button>
		</li>
	</ul>
	`,
	styles:[".completed { color: green }"]
})

export class TaskListComponent implements OnInit {
	constructor(public taskService: TaskService) {}

	ngOnInit() {}

	completeTask(task) {
		task.completed = true;
	}
}

// ==============================================================

@Component({
	selector: 'task-new',
	template: `
	<h4>Create a Task</h4>
	<form (submit)="onSubmit()">
		<input [(ngModel)] ="task.title" class='input-field'>
		<input type="submit" class='btn-submit'>
	</form>
	`
})

export class TaskNewComponent implements OnInit {
	task;

	constructor(public taskService: TaskService) {
		this.task = {title: "", completed: false};
	}

	onSubmit() {
		this.taskService.addTask(this.task);
		this.task = {title: "", completed: false};
	}

	ngOnInit() {}
}

// ==============================================================

@Component({
	selector: 'tasks',
	directives: [TaskListComponent, TaskNewComponent],
	template: `
	<div class='center'>
		<h1>Tasks List Application</h1>
		<task-new></task-new>
		<task-list></task-list>
	</div>
	`
})

export class TasksComponent implements OnInit {
	contructor() {}

	ngOnInit() {}
}

// ==============================================================

@Component({
	selector: 'my-app',
	directives: [TasksComponent],
	providers: [TaskService],
	template: `
	<tasks></tasks>
	`
})

export class AppComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

bootstrap(AppComponent)