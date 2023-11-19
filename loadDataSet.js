const loadDataSet=()=>{
    const XLSX = require('xlsx');
const path = require('path');

const excelFilePath = path.join(__dirname, 'data-file/Assignment-Data.xlsx')
const workbook = XLSX.readFile(excelFilePath);


const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];


const data = XLSX.utils.sheet_to_json(sheet);
return data;
}
module.exports=loadDataSet;