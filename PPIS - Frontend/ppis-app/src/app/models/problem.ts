import { User } from './user';
import { Status } from './status';
import { Group } from './group';

export class Problem {
    constructor(
        public id : number,
        public title : string,
        public description : string,
        public consequences : string,
        public user : User,

        public priority  : string,
        public status : string,
        public isProblem : boolean,
        public category : string,
        public grupa : Group,
        public representative : string,
        public opisProblema : string,
        public dodijeliTehnicaru : boolean,
    //za menadzera promjena
        public isChange : boolean

    ){}
}
