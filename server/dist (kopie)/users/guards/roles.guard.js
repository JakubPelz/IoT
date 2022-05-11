"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const RoleGuard = (role) => {
    class RoleGuardMixin extends jwt_auth_guard_1.JwtAuthGuard {
        async canActivate(context) {
            await super.canActivate(context);
            const request = context.switchToHttp().getRequest();
            const user = request.user.payload;
            return user === null || user === void 0 ? void 0 : user.role.includes(role);
        }
    }
    return (0, common_1.mixin)(RoleGuardMixin);
};
exports.default = RoleGuard;
//# sourceMappingURL=roles.guard.js.map