import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../services/shared.service";
 
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  id_currency: string = "";
  my_result: any;
  constructor(private _sharedService: SharedService) {
  }
 
  ngOnInit() {
  }
 
  callCurrencyService() {  
    this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
      .subscribe(
      lstresult => { 
                this.my_result = JSON.stringify(lstresult); 
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
        console.log(error);
      }
      ); 
  }

}
