export class Room
{

  //------------------------
  // CONSTRUCTOR
  //------------------------

  constructor(private name : string, private uuid: string, private isActive: boolean){

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

  public setActive(aActive: boolean): boolean
  {
    let wasSet: boolean = false;
    this.isActive = aActive;
    wasSet = true;
    return wasSet;
  }

  public setName(aName : string) : boolean
  {
    let wasSet: boolean = false;;
    this.name = aName;
    wasSet = true;
    return wasSet;
  }

  public getUuid() : string
  {
    return this.uuid;
  }

  public getIsActive() : boolean
  {
    return this.isActive;
  }

  public getName() : string
  {
    return this.name;
  }


  public toString(): string
  {
    return "["+
            "uuid" + ":" + this.getUuid()+ "," +
            "active" + ":" + this.getIsActive()+ "]" + "name" + "=" + " " + this.getName() + "]";
  }
}