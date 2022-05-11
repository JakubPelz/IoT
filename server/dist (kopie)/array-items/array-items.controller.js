"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayItemsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_decorator_1 = require("../auth/decorator/jwt.decorator");
const array_items_service_1 = require("./array-items.service");
const create_array_item_dto_1 = require("./dto/create-array-item.dto");
const update_array_item_dto_1 = require("./dto/update-array-item.dto");
let ArrayItemsController = class ArrayItemsController {
    constructor(arrayItemsService) {
        this.arrayItemsService = arrayItemsService;
    }
    create(createArrayItemDto) {
        return this.arrayItemsService.create(createArrayItemDto);
    }
    findAll() {
        return this.arrayItemsService.findAll();
    }
    findOne(id) {
        return this.arrayItemsService.findOne(+id);
    }
    update(id, updateArrayItemDto) {
        return this.arrayItemsService.update(+id, updateArrayItemDto);
    }
    remove(id) {
        return this.arrayItemsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_array_item_dto_1.CreateArrayItemDto]),
    __metadata("design:returntype", void 0)
], ArrayItemsController.prototype, "create", null);
__decorate([
    (0, jwt_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArrayItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArrayItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_array_item_dto_1.UpdateArrayItemDto]),
    __metadata("design:returntype", void 0)
], ArrayItemsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArrayItemsController.prototype, "remove", null);
ArrayItemsController = __decorate([
    (0, common_1.Controller)('array-items'),
    __metadata("design:paramtypes", [array_items_service_1.ArrayItemsService])
], ArrayItemsController);
exports.ArrayItemsController = ArrayItemsController;
//# sourceMappingURL=array-items.controller.js.map