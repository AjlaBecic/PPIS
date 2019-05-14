import { User } from './user';

export class Problem {
    constructor(
        public id : number,
        public title : string,
        public description : string,
        public consequences : string,
        public user : User,
        public isProblem : boolean
    ){}
}