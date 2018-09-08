import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
         
      {
        label: 'Company',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Company-List',  icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/companydashboard_log']},
            {label: 'Company-Report', icon: 'fa fa-fw fa-area-chart',routerLink: ['/authenticated/company_log_list']}
        ]
    },
    {
      label: 'Marketing',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'Marketing-List', icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/marketing-dashBoard']},
          {label: 'Marketing-Report', icon: 'fa fa-fw fa-area-chart',routerLink: ['/authenticated/marketing_log_list']}
      ]
  },
  {
    label: 'Conversion',
    icon: 'pi pi-fw pi-pencil',
    items: [
        {label: 'Conversion-List', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/conversion_list']}
       
    ]
},


  ];


  }

}
