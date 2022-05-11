import { Role } from '../interfaces/role.enum';
import { CanActivate, Type } from '@nestjs/common';
declare const RoleGuard: (role: Role) => Type<CanActivate>;
export default RoleGuard;
