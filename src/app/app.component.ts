import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'one-conversion';
  //-------------------ngIf---------------------------------------------------
  showMsg = true;

  btnClicked() {
    console.log('button clicked');
    if (this.showMsg) {
      this.showMsg = false;
    } else {
      this.showMsg = true;
    }
  }
  //---------------------ngSwitch and event binding-------------------------------------------------
  switchNumber = '1';
  numberCounter = 0;
  numbers = ['1','2','3','4','5'];
  othrBtnClicked() {
    this.switchNumber = this.numbers[this.numberCounter];

    if (this.numberCounter == this.numbers.length-1) {
      this.numberCounter = 0;
    } else {
      this.numberCounter = this.numberCounter +1;
    }
  }
  //--------------------------ngFor and interpolation--------------------------------------------
  users = [
    {id: 12, fName: 'John', lName: 'Greek'},
    {id: 42, fName: 'Suzie', lName: 'Clarke'},
    {id: 36, fName: 'Barb', lName: 'Lupee'},
    {id: 24, fName: 'Luke', lName: 'Krill'},
    {id: 75, fName: 'Philip', lName: 'Super'},
    {id: 26, fName: 'Mike', lName: 'Hemer'},
  ];
  //--------------------------ngStyle and property binding--------------------------------------------
  colorVal = "green";
  colorVal2 = "purple";
  colorname = ['green', 'blue', 'purple','red','orange','yellow'];
  colorCounter = 0;
  colorCounter2 = 3;
  colorBtnClicked() {
    this.colorVal = this.colorname[this.colorCounter];
    this.colorVal2 = this.colorname[this.colorCounter2];
      if (this.colorCounter == this.colorname.length-1) {
        this.colorCounter = 0;
      } else {
        this.colorCounter = this.colorCounter +1;
      }
      if (this.colorCounter2 == this.colorname.length-1) {
        this.colorCounter2 = 0;
      } else {
        this.colorCounter2 = this.colorCounter2 +1;
      }
  }
  //--------------------------ngClass--------------------------------------------
  clsName = 'two';
  clsNameM1 = 'three';
  clsNameM2 = 'four';
  clsNameE1 = true;
  clsNameE2 = true;
  expBtnClicked() {
    if (this.clsNameE1) {
      this.clsNameE1 = false;
    } else {
      this.clsNameE1 = true;
    }
    if (this.clsNameE2) {
      this.clsNameE2 = false;
    } else {
      this.clsNameE2 = true;
    }
  }
  //--------------------------attribute binding (useless???)--------------------------------------------
 hrefVal = 'http://google.com';
 updatedLink = 'http://oracle.com';
 //--------------------------two-way data binding--------------------------------------------
firstName="Adam";
//--------------------------pipes--------------------------------------------
user = {
  ID: 45,
  first: "Silver",
  last: "Scale",
  DOB:"1/30/1996",
  NetW: 2349472.78,
  rating: 4/5
};

}
