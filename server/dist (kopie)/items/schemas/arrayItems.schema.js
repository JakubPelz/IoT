"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayItemsSchema = void 0;
const mongoose = require("mongoose");
const item_schema_1 = require("./item.schema");
exports.ArrayItemsSchema = new mongoose.Schema({
    arryItems: [item_schema_1.TemperatureSchema],
});
//# sourceMappingURL=arrayItems.schema.js.map