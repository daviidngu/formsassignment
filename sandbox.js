const csv = require('csvtojson')


async function test(){
    const employees = await csv().fromFile('./test/employeeData/employeeData.csv')

    console.log(employees)
}

test()
