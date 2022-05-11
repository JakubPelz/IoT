"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: String,
    surname: String,
    password: String,
    role: String,
});
//# sourceMappingURL=user.schema.js.map