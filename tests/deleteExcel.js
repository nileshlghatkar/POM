const fs = require('fs');
const path = 'D:/POM/tests/output.xlsx'; // Use string, not require

fs.unlink(path, (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
    } else {
        console.log('File deleted successfully:', path);
    }
});