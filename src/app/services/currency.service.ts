import { ICurrencyMB } from "../models/ICurrencyMB";
import { ICurrency } from "../models/ICurrency";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn: 'root'

})
export class CurrencyService {
    currency = []
    constructor(private http: HttpClient) {
    }
    
    getAll() {
        const headers = new Headers();
      
         const currency = this.http.get<ICurrencyMB[]>('https://api.monobank.ua/bank/currency')
         
        return currency
        
    }
}