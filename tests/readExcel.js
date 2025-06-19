const XLSX = require('xlsx');

const filePath = 'D:/POM/tests/output.xlsx';
const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets['Sheet1'];
const data = XLSX.utils.sheet_to_json(sheet);
console.log('Data read from Excel file:', data);
// You can now use the 'data' variable for further processing or assertions
// Example: Log each row of data
console.log(data.length, 'rows found in the Excel file');
for (let i = 0; i < data.length; i++) {
    
    console.log(`Row ${i + 1}:`, data[i]);
    console.log(`Name Value ${i + 1}:`, data[i].name);
    console.log(`Password Value ${i + 1}:`, data[i].password);
}
