"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureSchema = void 0;
const mongoose = require("mongoose");
exports.TemperatureSchema = new mongoose.Schema({
    timestamp: Number,
    temperature: Number,
    humidity: Number,
});
//# sourceMappingURL=item.schema.js.map