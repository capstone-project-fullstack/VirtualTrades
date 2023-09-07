'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.prisma = void 0;
var client_1 = require('@prisma/client');
var globalForPrisma = global;
exports.prisma = globalForPrisma.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = exports.prisma;
exports.default = exports.prisma;
