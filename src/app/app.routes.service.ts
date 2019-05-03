import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { OrdersComponent } from './views/orders/orders.component';
import { UsersComponent } from './views/users/users.component';
import { DeleteusersComponent } from './views/deleteusers/deleteusers.component';
import { AddusersComponent } from './views/addusers/addusers.component';
import { EditusersComponent } from './views/editusers/editusers.component';
import { MenuComponent } from './views/menu/menu.component';
import { TableComponent } from './views/table/table.component';
import { TablesComponent } from './views/tables/tables.component';
import { PaymentComponent } from './views/payment/payment.component';
import { EditmenuComponent } from './views/menu/editmenu/editmenu.component';
import { DeletemenuComponent } from './views/menu/deletemenu/deletemenu.component';
import { AddcategoryComponent } from './views/menu/addcategory/addcategory.component';
import { AddprofileComponent } from './views/addusers/addprofile/addprofile.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'orders' },
  { path: 'orders', component: OrdersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'deleteusers', component: DeleteusersComponent },
  { path: 'addusers', component: AddusersComponent },
  { path: 'addprofile', component: AddprofileComponent },
  { path: 'editusers', component: EditusersComponent },
  { path: 'addcategory', component: AddcategoryComponent},
  { path: 'editmenu', component: EditmenuComponent },
  { path: 'deletemenu', component: DeletemenuComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'table', component: TableComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'payments', component: PaymentComponent },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
