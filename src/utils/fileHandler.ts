import fs from 'fs';

export const isSupportedFileType = (mimeType: string | false): boolean => {
  const supportedTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv'
  ];
  return mimeType ? supportedTypes.includes(mimeType) : false;
};

export const deleteFile = (filePath: string) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      throw new Error(`Error deleting file: ${err}`);
    }
  });
};
