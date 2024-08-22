# URL Uploader

A Node.js package for processing uploaded CSV or Excel files.

## prerequisites
- Your file should be CSV or Excel
- The file must have columns

Example of the file: `example.csv`


| No         | url             |  ID | Owner | 
| ---         |     ---      |          --- | --- |
| 1   | https://www.example1.com     | RHA58  | Dom58 | 
| 2     | https://www.example2.com      |  RHA59  | Dom |
| 3   | https://www.example1.com     | RHA60 | Dom58 |
| 4     | https://www.example3.com       | RHA61  | Dom58 |
| 5   | https://www.example1.com     |  RHA62  | Dom58 |
| 6     | https://www.example3.com      | RHA63 | Dom |

## Installation

```bash
npm install classic-file-uploader
pnpm add classic-file-uploader
yarn add classic-file-uploader
```

## Usage in your project
```bash
import { FileUploadProcessor } from "classic-file-uploader";
```

### In your controller of somewhere you need to use the Package
```bash
const result = await FileUploadProcessor.uploadCsvExcelFile(request as Request)
console.log(result);
```
Result should be error or data in the file

### Sample of the result

#### Errors
##### 1. When the file is not CSV or Excel file
```bash
{
  status: 400,
  error: 'Unsupported file type, file should be CSV/Excel'
}
```

##### 2. When there is an Internal server error
```bash
{
  status: 500,
  error: 'Internal server error'
}
```

#### Data response
##### 1. Read data in CSV or EXCEL file with no duplicated data
```bash
{
  status: 200,
  message: 'File processed successfully',
  data: [
    { url: 'https://www.example1.com' },
    { url: 'https://www.example2.com' }
  ],
  duplicatedWebsites: []
}
```

##### 2. Read data in CSV or EXCEL file with duplicated urls data
```bash
{
  status: 200,
  message: 'File processed successfully',
  data: [
    { url: 'https://www.example1.com' },
    { url: 'https://www.example2.com' }
  ],
  duplicatedWebsites: [
    { url: 'https://www.example1.com' },
    { url: 'https://www.example1.com' },
    { url: 'https://www.example1.com' }
  ]
}
```
