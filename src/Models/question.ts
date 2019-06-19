export class Question
{

  //------------------------
  // CONSTRUCTOR
  //------------------------

  constructor(private uuid: string, private title : string, private text : string, private isMcq: boolean){
  }

  //------------------------
  // INTERFACE
  //------------------------

  public setUuid(aUuid : string) : boolean
  {
    let wasSet : boolean = false;
    this.uuid = aUuid;
    wasSet = true;
    return wasSet;
  }

  public setIsMCQ(aMcq: boolean): boolean
  {
    let wasSet: boolean = false;
    this.isMcq = aMcq;
    wasSet = true;
    return wasSet;
  }

  public setTitle(aTitle : string) : boolean
  {
    let wasSet: boolean = false;;
    this.title = aTitle;
    wasSet = true;
    return wasSet;
  }

  public setText(aText : string) : boolean
  {
    let wasSet: boolean = false;;
    this.text = aText;
    wasSet = true;
    return wasSet;
  }

  public getUuid() : string
  {
    return this.uuid;
  }

  public getIsMCQ() : boolean
  {
    return this.isMcq;
  }

  public getTitle() : string
  {
    return this.title;
  }

  public getText() : string
  {
    return this.text;
  }


  public toString(): string
  {
    return "["+
            "uuid" + ":" + this.getUuid()+ "," +
            "active" + ":" + this.getIsMCQ()+ "]" + "title" + "=" + " " + this.getTitle() + "text" + "=" + " " + this.getText() + "]";
  }
}