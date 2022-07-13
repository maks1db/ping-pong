const fs = require('fs-extra');

const makeFolderName = package => `${process.cwd()}/packages/${package}/public`;

const FROM_FOLDER = `${process.cwd()}/public`;

module.exports.copyStatic = name => {
  const folderName = makeFolderName(name);
  if (fs.existsSync(folderName)) {
    fs.rmdirSync(folderName, { recursive: true });
  }
  fs.copySync(FROM_FOLDER, folderName);
  fs.rmdirSync(FROM_FOLDER, { recursive: true });
};
