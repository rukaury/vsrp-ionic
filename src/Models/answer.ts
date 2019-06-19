export class Answer
{

  //------------------------
  // CONSTRUCTOR
  //------------------------

  constructor(private uuid: string, private text : string, private isCorrect: boolean){
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

  public setIsCorrect(aIsCorrect: boolean): boolean
  {
    let wasSet: boolean = false;
    this.isCorrect = aIsCorrect;
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

  public getIsCorrect() : boolean
  {
    return this.isCorrect;
  }

  public getText() : string
  {
    return this.text;
  }


  public toString(): string
  {
    return "[" + "text" + "=" + " " + this.getText() + "Correct" + "=" + " " + this.getIsCorrect() + "]";
  }
}