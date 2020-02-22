"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("./query"));
const types_1 = __importDefault(require("./types"));
const resolversMap = Object.assign(Object.assign({}, query_1.default), types_1.default);
exports.default = resolversMap;
