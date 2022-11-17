import { Component, OnInit, Input } from '@angular/core';
import { ICurrencyMB } from 'src/app/models/ICurrencyMB';
import { CurrencyService } from 'src/app/services/currency.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() data: ICurrencyMB[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
