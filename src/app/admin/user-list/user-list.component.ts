import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { AdminService } from '../admin.service';
import { SecurityUserVM } from '../shared/models';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { WindowService, WindowCloseResult } from '@progress/kendo-angular-dialog';

interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type: 'text' | 'numeric' | 'boolean' | 'date';
}

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public allUsers: Observable<GridDataResult>;
  public userRoleList: Observable<GridDataResult>;

  public userRoleGridColumns: ColumnSetting[] = [
    {
      field: 'roleId',
      format: '{0:c}',
      title: 'Role Id',
      type: 'numeric'
    }, {
      field: 'roleName',
      title: 'Role Name',
      type: 'text'
    }, {
      field: 'assigned',
      title: '',
      type: 'boolean'
    }
  ];

  constructor(private adminService: AdminService, private windowService: WindowService) { }

  ngOnInit() {
    this.allUsers = this.adminService.getSecurityUserList();
    // this.adminService.updateSecurityUser(new SecurityUserVM());
  }

  public openAddNewUserWindow() {
    const windowRef = this.windowService.open({
      title: 'Add New User',
      content: UserDetailComponent,
      width: 650
    });

    // const userDetail = windowRef.content.instance;
    // userDetail.userId = 'Test';
  }

  public addNewUser() {

  }

}
