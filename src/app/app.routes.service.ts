import { LoginComponent } from './views/login/login.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { OrdersComponent } from './views/orders/orders.component';
import { UsersComponent } from './views/users/users.component';
import { DeleteusersComponent } from './views/users/deleteusers/deleteusers.component';
import { AddusersComponent } from './views/users/addusers/addusers.component';
import { EditusersComponent } from './views/users/editusers/editusers.component';
import { MenuComponent } from './views/menu/menu.component';
import { TableComponent } from './views/table/table.component';
import { TablesComponent } from './views/table/tables/tables.component';
import { PaymentComponent } from './views/payment/payment.component';
import { EditmenuComponent } from './views/menu/editmenu/editmenu.component';
import { DeletemenuComponent } from './views/menu/deletemenu/deletemenu.component';
import { AddcategoryComponent } from './views/menu/addcategory/addcategory.component';
import { AddprofileComponent } from './views/users/addusers/addprofile/addprofile.component';
import { DeletetableComponent } from './views/table/deletetable/deletetable.component'


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'orders' },
  { path: 'login', component: LoginComponent },
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
  { path: 'deletetable', component: DeletetableComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
