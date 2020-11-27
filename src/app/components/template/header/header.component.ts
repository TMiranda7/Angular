import { Component, OnInit } from '@angular/core';
import { HeaderData } from './header-data.model';
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header' ,
  templateUrl: 'header.component.html' ,
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service : HeaderService ) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.service.headerData.title
  } 

  get icon(): string{
    return this.service.headerData.icon
  } 

  get routerUrl(): string{
    return this.service.headerData.routerUrl
  } 

}
