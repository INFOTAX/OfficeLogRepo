import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-consolidated-sidebar',
  templateUrl: './admin-consolidated-sidebar.component.html',
  styleUrls: ['./admin-consolidated-sidebar.component.css']
})
export class AdminConsolidatedSidebarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [

      {
        label: 'Reports',expanded : true,
          
        items: [
                {label: 'Company',routerLink:['admin/Company-report']},
                {label: 'Marketing',routerLink:['admin/Marketing-report']},
                 ]
    },  
  ]
}}