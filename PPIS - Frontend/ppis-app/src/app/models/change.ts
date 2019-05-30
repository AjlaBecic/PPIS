import { User } from './user';
import { Status } from './status';
import { Problem } from './problem';

export class Change {
    p(){}
    constructor(
        public id : number,
        public title : string,
        public description : string,

        public user : User,

        public priority  : string,
        public status : string,
        public begin : Date,
        public end : Date,
        public approved : boolean,
        public category : string,
        public finansira : string,
        public cijena : number,
        public infrastruktura : string,
        public resursi : string,
        public upravlja : string,
        public problem : Problem,
        //public solution : Solution
        public dodijeliTehnicaru : boolean,
        public dodijeliOdboru : boolean,
        public isChange : boolean

    ){}
}
