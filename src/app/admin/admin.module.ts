import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { AdminService } from './admin.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { WindowModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    WindowModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
  ],
  entryComponents: [ UserDetailComponent ],
  providers: [AdminService]
})
export class AdminModule { }
