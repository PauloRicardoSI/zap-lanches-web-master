import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { ModalsComponent } from './modals/modals.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { TablesComponent } from './tables/tables.component';
import { PaymentComponent } from './payment/payment.component';
import { EditusersComponent } from './editusers/editusers.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { AddusersComponent } from './addusers/addusers.component';
import { EditmenuComponent } from './menu/editmenu/editmenu.component';
import { DeletemenuComponent } from './menu/deletemenu/deletemenu.component';
import { AddcategoryComponent } from './menu/addcategory/addcategory.component';
import { AddprofileComponent } from './addusers/addprofile/addprofile.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    TablesComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Profile1Component,
    HelpComponent,
    OrdersComponent,
    UsersComponent,
    MenuComponent,
    TableComponent,
    PaymentComponent,
    
    EditusersComponent,
    DeleteusersComponent,
    AddusersComponent,
    EditmenuComponent,
    DeletemenuComponent,
    AddcategoryComponent,
    AddprofileComponent,
 
    

  ],
  exports: [
    FooterComponent,
    TablesComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
