import {Component} from '@angular/core';
import {MyService} from './services/my.service'

@Component({
    selector: 'my-componet',
    template:   `<h1>
                My Component
                {{title}}
                </h1>
                <ul>
                <li *ngFor="#course of courses">
                {{course}}
                </li>
                </ul>
                `,
    providers: [MyService]
})

export class myComponent{
    title = "my title";
    courses : string[];
        
    constructor(myService : MyService)
    {
      this.courses = myService.getCourse();
    }
}
