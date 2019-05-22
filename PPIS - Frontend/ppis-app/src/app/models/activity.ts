import { User } from './user';
import { Problem } from './problem';

export class Activity {
    constructor(public id : number,  public type : string, public description : string, public user : User, public problem : Problem, public problemId : number) {}
}