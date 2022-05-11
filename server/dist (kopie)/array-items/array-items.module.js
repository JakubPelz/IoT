"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayItemsModule = void 0;
const common_1 = require("@nestjs/common");
const array_items_service_1 = require("./array-items.service");
const array_items_controller_1 = require("./array-items.controller");
let ArrayItemsModule = class ArrayItemsModule {
};
ArrayItemsModule = __decorate([
    (0, common_1.Module)({
        controllers: [array_items_controller_1.ArrayItemsController],
        providers: [array_items_service_1.ArrayItemsService]
    })
], ArrayItemsModule);
exports.ArrayItemsModule = ArrayItemsModule;
//# sourceMappingURL=array-items.module.js.map