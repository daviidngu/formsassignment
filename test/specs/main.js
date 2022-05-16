const formPage = require('../pageobjects/formPage');
const csv = require('csvtojson');


describe('Load in all employee data from CSV', () => {
    it('should load in all employee data from CSV', async () => {
        const employees = await csv().fromFile("./test/employeeData/employeeData.csv");
        
        
        for(let i = 0; i<employees.length; i++){
            let employee = employees[i]
            await formPage.openFormPage()
            await formPage.fillEmployeeName(employee["EmployeeName"])
            await formPage.fillGender(employee["EmployeeGender"])
            await formPage.fillEmployeeDepartment(employee["Department"])
            await formPage.submitForm()
        }
        await browser.closeWindow();
    });
});


