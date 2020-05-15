import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { SecurityUserVM } from './shared/models';

export interface IAdminService {
  getSecurityUserList();
  getSecurityUserRoleList(securityUserId: number);
  isSecurityUserExist(userId: string);
  addSecurityUser(securityUser: SecurityUserVM);
  updateSecurityUser(securityUser: SecurityUserVM);
}
@Injectable()
export class AdminService implements IAdminService {

  static $inject = ['Restangular'];
  admin: any;

  constructor(private restangular: Restangular) {
    this.admin = this.restangular.all('admin');
  }

  getSecurityUserList() {
    return this.admin.customGETLIST('get-security-user-list');
  }
  getSecurityUserRoleList(securityUserId: number) {
    return this.admin.customGETLIST('get-security-user-role-list/', {securityUserId: securityUserId});
  }
  isSecurityUserExist(userId: string) {
    return this.admin.customGET('is-security-user-exist/', {userId: userId});
  }
  addSecurityUser(securityUser: SecurityUserVM) {
    return this.admin.customPOST(securityUser, 'add-security-user');
  }
  updateSecurityUser(securityUser: SecurityUserVM) {
    return this.admin.customPOST(securityUser, 'update-security-user');
  }

}
