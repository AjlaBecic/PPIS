import { Group } from './group';

export class User {
    constructor(
        public id : number,
        public firstName : string,
        public lastName : string,
        public mail : string,
        public userName : string,
        public role : string,
        public group : Group
    ) {}
}