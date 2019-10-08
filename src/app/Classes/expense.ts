export class expense{
    constructor(public eid:number,
      public fkuserid:number,
      public amount:number,
      public remarks:string,
      public date:string
      ){}
  }