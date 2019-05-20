import { User } from './user';
import { Status } from './status';

export class Problem {
    constructor(
        public id : number,
        public title : string,
        public description : string,
        public consequences : string,
        public user : User,
        public status : Status,
        public isProblem : boolean
    ){}
}