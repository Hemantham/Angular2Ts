import {Component} from '@angular/core';
import {MyService} from './services/my.service'
import {Course} from './domain/my.course'

@Component({
    selector: 'my-componet',
    templateUrl: 'app/templates/MyComponent.html'                ,
    providers: [MyService]
})


export class myComponent{
    title = "my title";
    courses : Course[];
    mycurrentname : string;
    
    myName()
    {
        console.log(this.mycurrentname);        
    }    

    constructor(myService : MyService)
    {
      this.courses = myService.getCourse();
      
    }
}
