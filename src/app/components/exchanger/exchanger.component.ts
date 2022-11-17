import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyMB } from 'src/app/models/ICurrencyMB';
import { ICurrency } from 'src/app/models/ICurrency';
import { NgModule } from '@angular/core';
  
import { FormsModule, NgModel } from '@angular/forms';
import { IPairs } from 'src/app/models/IPairs';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent  {
  @Input() data: ICurrencyMB[] = [];
  state:string = '';


  constructor() {}


  buyClicked() {
    this.state = 'buy';
  }
  sellClicked() {
    this.state = 'sell'
  }
  getValue (value:ICurrency) {
    console.log(value)
   

    return value
  }

  onChange(event:any, value:ICurrency, type = this.state) {
    console.log(event)
    console.log(value)
    
    console.log(this.data)

    let currencySearchResult = this.data.filter(item=>{
      return (
        (Number(item.currencyCodeA)===Number(value.currencyBuy) && Number(item.currencyCodeB)===Number(value.currencySell))
        ||
        (Number(item.currencyCodeB)===Number(value.currencyBuy) && Number(item.currencyCodeA)===Number(value.currencySell))
      )
    })
    console.log(currencySearchResult)


    if (type === 'buy') {
      if (Number(value.currencyBuy) === 980) {
        console.log(value.amountBuy*1/currencySearchResult[0].rateBuy)
       value.amountSell = Number((value.amountBuy*1/currencySearchResult[0].rateBuy).toFixed(2))
      }
      else if (Number(value.currencyBuy) === Number(value.currencySell)) {
        value.amountBuy=Number(value.amountSell.toFixed(2))
      }
      else {
      console.log(value.amountBuy * currencySearchResult[0].rateSell)
      value.amountSell = Number((value.amountBuy * currencySearchResult[0].rateSell).toFixed(2))

      }

    }
    else if (type === 'sell') {
      if (Number(value.currencySell) === 980) {
        console.log(value.amountSell*1/currencySearchResult[0].rateSell)
       value.amountBuy = Number((value.amountSell*1/currencySearchResult[0].rateSell).toFixed(2))

      }
      else if (Number(value.currencyBuy) === Number(value.currencySell)) {
        value.amountBuy=Number((value.amountSell).toFixed(2))
      }
      else {
      
      console.log(value.amountSell*currencySearchResult[0].rateBuy)
      value.amountBuy = Number((value.amountSell*currencySearchResult[0].rateBuy).toFixed(2))

      }

    }
    }


  

}
