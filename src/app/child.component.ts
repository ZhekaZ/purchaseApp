import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
               <input [ngModel]="userSurName" (ngModelChange)="onSurNameChange($event)"/>
              `
})
export class ChildComponent {
    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();

    onNameChange(model: string) {
        this.userName = model;
        this.userNameChange.emit(model);
    }

    @Input() userSurName: string;
    @Output() userSurNameChange = new EventEmitter<string>();

    onSurNameChange(model: string) {
        this.userSurName = model;
        this.userSurNameChange.emit(model);
    }
}
