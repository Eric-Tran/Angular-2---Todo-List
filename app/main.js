"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var TaskService = (function () {
    function TaskService() {
        this.tasks = [
            { title: "First Task", completed: false },
            { title: "Second Task", completed: false },
            { title: "Third Task", completed: false },
            { title: "Fourth Task", completed: false }
        ];
    }
    TaskService.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
// ==============================================================
var TaskListComponent = (function () {
    function TaskListComponent(taskService) {
        this.taskService = taskService;
    }
    TaskListComponent.prototype.ngOnInit = function () { };
    TaskListComponent.prototype.completeTask = function (task) {
        task.completed = true;
    };
    TaskListComponent = __decorate([
        core_1.Component({
            selector: 'task-list',
            template: "\n\t<h4>Task List</h4>\n\t<ul>\n\t\t<li *ngFor=\"let task of taskService.tasks\" class='items'>\n\t\t\t<span [class.completed]=\"task.completed\">{{ task.title }} - {{ task.completed }}</span>\n\t\t\t<button (click)=\"completeTask(task)\">Click to Complete</button>\n\t\t</li>\n\t</ul>\n\t",
            styles: [".completed { color: green }"]
        }), 
        __metadata('design:paramtypes', [TaskService])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
// ==============================================================
var TaskNewComponent = (function () {
    function TaskNewComponent(taskService) {
        this.taskService = taskService;
        this.task = { title: "", completed: false };
    }
    TaskNewComponent.prototype.onSubmit = function () {
        this.taskService.addTask(this.task);
        this.task = { title: "", completed: false };
    };
    TaskNewComponent.prototype.ngOnInit = function () { };
    TaskNewComponent = __decorate([
        core_1.Component({
            selector: 'task-new',
            template: "\n\t<h4>Create a Task</h4>\n\t<form (submit)=\"onSubmit()\">\n\t\t<input [(ngModel)] =\"task.title\" class='input-field'>\n\t\t<input type=\"submit\" class='btn-submit'>\n\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [TaskService])
    ], TaskNewComponent);
    return TaskNewComponent;
}());
exports.TaskNewComponent = TaskNewComponent;
// ==============================================================
var TasksComponent = (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.contructor = function () { };
    TasksComponent.prototype.ngOnInit = function () { };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'tasks',
            directives: [TaskListComponent, TaskNewComponent],
            template: "\n\t<div class='center'>\n\t\t<h1>Tasks List Application</h1>\n\t\t<task-new></task-new>\n\t\t<task-list></task-list>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
// ==============================================================
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [TasksComponent],
            providers: [TaskService],
            template: "\n\t<tasks></tasks>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map