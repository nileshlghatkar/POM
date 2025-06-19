const XLSX = require('xlsx');

const data = [
  { name: 'NeeleshG', password: 'Inserthome@123' },
  { name: 'Bob', password: 25 },
  { name: 'Charlie', password: 35 }
];

const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();   
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
XLSX.writeFile(wb, 'D:/POM/tests/output.xlsx');
console.log('Excel file created successfully at D:/POM/tests/output.xlsx');