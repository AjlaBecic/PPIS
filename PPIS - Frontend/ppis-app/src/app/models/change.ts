import { User } from './user';
import { Status } from './status';
import { Problem } from './problem';

export class Change {
  id : number;
  title : string;
  description : string;
  user : User;
  priority  : string;
  status : string;
  begin : Date;
  end : Date;
  approved : boolean;
  category : string;
  finansira : string;
  cijena : number;
  infrastruktura : string;
  resursi : string;
  upravlja : string;
  problem : Problem;
  //solution : Solution;
  dodijeliTehnicaru : boolean;
  dodijeliOdboru : boolean;
  isChange : boolean;

  constructor( data ?: any) {
    if(!!data) {
      this.id = data.id;
      this.title = data.title;
      this.description  = data.description;
      this.user = data.user;
      this.priority  = data.priority;
      this.status = data.status;
      this.begin = data.begin;
      this.end = data.end;
      this.approved = data.approved;
      this.category = data.category;
      this.finansira = data.finansira;
      this.cijena = data.cijena;
      this.infrastruktura = data.infrastruktura;
      this.resursi = data.resursi;
      this.upravlja = data.upravlja;
      this.problem = data.problem;
      this.dodijeliTehnicaru = data.dodijeliTehnicaru;
      this.dodijeliOdboru = data.dodijeliOdboru;
      this.isChange = data.isChange;
    }
  }

}
