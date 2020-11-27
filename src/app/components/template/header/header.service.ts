import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';


@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  private header = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon:'home',
    routerUrl:''
  })

  constructor() { }

  get headerData(): HeaderData{
    return this.header.value
  }

  set headerData(header: HeaderData){
    this.header.next(header)
  }

}
