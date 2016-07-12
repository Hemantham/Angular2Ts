import {Course} from '../domain/my.course'

export class MyService {
    getCourse(): Course[] {
        return [
             new Course('course 1'),
             new Course('course 2'),
             new Course('curse 3')];
    }    
}