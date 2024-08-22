# CSV/EXcel File Uploader
A fastest Node.js package for processing uploaded CSV or Excel files.

## Prerequisites
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
##### 1. Read all data in CSV or EXCEL file
```bash
{
  status: 200,
  message: 'File processed successfully',
   data: [
    { No: 1, url: 'http://example.com', Id: 58 },
    { No: 2, url: 'http://example2.com', Id: 59 },
    { No: 3, url: 'http://example3.com', Id: 60 },
    { No: 4, url: 'http://example4.com', Id: 61 },
    { No: 5, url: 'http://example5.com', Id: 62 },
    { No: 6, url: 'http://example6.com', Id: 63 },
    { No: 7, url: 'http://example.com', Id: 64 },
    { No: 8, url: 'http://example2.com', Id: 65 },
    { No: 9, url: 'http://example3.com', Id: 66 },
    { No: 10, url: 'http://example4.com', Id: 67 },
    { No: 11, url: 'http://example5.com', Id: 68 }
  ]
}
```
```
