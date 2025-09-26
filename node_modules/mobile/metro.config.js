// packages/mobile/metro.config.js

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Temukan path direktori project
const projectRoot = __dirname;
// Temukan path root dari monorepo
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Izinkan Metro untuk melihat file di luar root project (yaitu dari workspace)
config.watchFolders = [workspaceRoot];

// 2. Bantu Metro menemukan module dari workspace
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// 3. (Opsional tapi direkomendasikan) Cegah Metro dari error duplikat haste module
config.resolver.disableHierarchicalLookup = true;

module.exports = config;