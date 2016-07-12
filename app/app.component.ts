import {Component} from '@angular/core';
import {myComponent} from './my.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><br/><my-componet></my-componet>',
    directives: [myComponent]
})
export class AppComponent { }
