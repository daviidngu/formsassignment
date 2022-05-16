
const baseUrl = require("../config").baseUrl

class formPage{

    async openFormPage(){
        await browser.url(baseUrl)
        await browser.pause(1000)
    }


    get employeeNameField(){
        return $('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[1]/input')
    }

    async fillEmployeeName(employee){
        await this.employeeNameField.setValue(employee)
        //await browser.pause(1000)
    }

    get maleButton(){
        return $('[for=i9]')
    }

    get femaleButton(){
        return $('[for=i12]')
    }

    get noneButton(){
        return $('[for=i15]')
    }

    get preferButton(){
        return $('[for=i18]')
    }
    


    async fillGender(gender){
        if(gender === "Male"){
            await this.maleButton.click()
        }
        else if(gender === "Female"){
            await this.femaleButton.click()
            
        }
        else if(gender === "None of the above"){
            await this.noneButton.click()
        }
        else{
            this.preferButton.click()
        }



    }

    get employeeDepartmentButton(){
        return $('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[1]')

    }

    async dropDownOptionsButton(department){
        if(department === "METS"){
            var end = '3]'
        }

        else if(department === "I&D"){
            var end = '4]'
        }

        else{
            var end = '5]'
        }
        return $('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div['+end)
    }

    async fillEmployeeDepartment(department){
        await this.employeeDepartmentButton.click()
        await browser.pause(1000)
        var departmentSelection = await this.dropDownOptionsButton(department)
        await departmentSelection.click()
        await browser.pause(1000)
    }

    get submitButton(){
        return $('span=Submit')
    }

    async submitForm(){
        await this.submitButton.click()
        await browser.pause(1000)
    }

    
}

module.exports = new formPage();