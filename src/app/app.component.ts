import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component';
import { ICurrencyMB } from './models/ICurrencyMB';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testtask2';
  currencies: ICurrencyMB[] = []
  oldData = [{currencyCodeA: 840, currencyCodeB: 980, date: 1668550209, rateBuy: 36.65, rateSell: 37.4406, rateCross: 0},
    {currencyCodeA: 978, currencyCodeB: 980, date: 1668582610, rateBuy: 38.05, rateSell: 39.0503, rateCross: 0},
   {currencyCodeA: 978, currencyCodeB: 840, date: 1668582610, rateBuy: 1.028, rateSell: 1.048, rateCross:0}]
  constructor (private currencyService: CurrencyService) {

  }
  formatToFloat(data:ICurrencyMB[]) {
    data.forEach(item => {
      item.rateBuy = Number(item.rateBuy.toFixed(2))
      item.rateSell = Number(item.rateSell.toFixed(2))})
  }
  ngOnInit(): void {
      this.currencyService.getAll().subscribe(currencyList=>
        {
      this.currencies = currencyList.slice(0,3);
      this.formatToFloat(this.currencies)
        }, 
    error => {
      console.log('oooops', error)
      if (error.status == 429) {
       alert('To many requests to monobank API. Wait a minute and retry. Old data wil be provided')
        this.currencies= this.oldData  
        this.formatToFloat(this.currencies)

      }
      else{
      alert('Error, can`t provide actual data. Old data will be provided.')
      this.currencies= this.oldData
      this.formatToFloat(this.currencies)

      }
    }
    );
  
    
  }
}
