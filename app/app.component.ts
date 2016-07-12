import {Component} from '@angular/core';
import {myComponent} from './my.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/main.html',
    directives: [myComponent]
})
export class AppComponent { }
