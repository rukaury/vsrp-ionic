
export class Day {
  
/*

  ------------------------
  MEMBER VARIABLES

  ------------------------

  */

  //Day Attributes

  private isToday : boolean;

  //------------------------
  // CONSTRUCTOR
  //------------------------

  constructor(private dayWeek : string, private dayNumber : number, private month : number, private year : number) {}

  //------------------------
  // INTERFACE
  //------------------------

  public setDayNumber(aDayNumber : number) : void
  {
    this.dayNumber = aDayNumber;
  }

  public setDayWeek(aDayWeek : string) : void
  {
    this.dayWeek = aDayWeek;
  }

  public setIsToday(aIsToday : boolean) : void
  {
    this.isToday = aIsToday;
  }

  public setYear(aYear : number)  : void
  {
    this.year = aYear;
  }

  public setMonth(aMonth : number)  : void
  {
    this.month = aMonth;
  }

  public getDayNumber() : number
  {
    return this.dayNumber;
  }

  public getDayWeek() : string
  {
    return this.dayWeek;
  }

  public getIsToday() : boolean
  {
    return this.isToday;
  }

  public getYear() : number
  {
    return this.year;
  }

  public getMonth() : number
  {
    return this.month;
  }

  /*
  public void delete()
  {}
  */


  public toString() : String {
    return  "["+
      "dayNumber" + ":" + this.getDayNumber()+ "," +
      "dayWeek" + ":" + this.getDayWeek()+ "," +
      "isToday" + ":" + this.getIsToday()+ "," +
      "year" + ":" + this.getYear()+ "," +
      "month" + ":" + this.getMonth()+ "]";
  }
}
