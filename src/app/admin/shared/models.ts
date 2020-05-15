// Admin
export class SecurityUserVM {
  securityUserId: number;
  userId: string;
  userName: string;
  email: string;
  createdOn: string;
  createdBy: string;
  lastUpdatedOn: string;
  lastUpdatedBy: string;
  tenantCode: string;
  isActive: boolean;
  userRoleList: Array<SecurityUserRoleVM>;
}

export class SecurityRoleVM {
  securityRoleId: number;
  securityRoleName: string;
  description: string;
  isActive: boolean;
}

export class SecurityUserRoleVM {
  securityUserRoleId: number;
  securityUserId: number;
  securityRoleId: number;
}
