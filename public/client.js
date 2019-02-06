
//The application should have an input form that collects _employee first name, 
//last name, ID number, job title, annual salary_.
//A 'Submit' button should collect the form information, 
//store the information to calculate monthly costs, append information to the 
//DOM and clear the input fields.
//Using the stored information, 
//calculate monthly costs and append this to the to DOM.
//If the total monthly cost exceeds $20, 000, add a red background 
//color to the total monthly cost.

//program is a solution to a problem
console.log('client.js has been loaded');

$(document).ready(onReady);
let salaries = [];
let monthlySalaries = [];
function onReady() {
    console.log('jquery is loaded');
    $('#inputButton').on('click', addEmployee);
    $('#employeeTable').on('click', '.deleteButton', deleteEmployee);
}//end onReady

function addEmployee() {
    //could do let newEmployee= {
    // firstName: $('#firstNameInput').val(),
    // lastName: 
    // }
    //making a new object^ with input values instead of different variables like below
    //helps with making an array of employees
    //access input fields
    console.log('submit button working');
    let employeeFirstName = $('#firstNameInput').val();
    console.log(employeeFirstName);
    let employeeLastName = $('#lastNameInput').val();
    console.log(employeeLastName);
    let employeeIdNumber = $('#IDnumberInput').val();
    console.log(employeeIdNumber);
    let employeeJobTitle = $('#jobTitleInput').val();
    console.log(employeeJobTitle);
    let employeeSalary = $('#annualSalaryInput').val();
    console.log(employeeSalary);

    salaries.push(employeeSalary);
    console.log(salaries);

    //append values to table
    $('#employeeTable').append(`
        <tr> 
       <td>
        <button class="deleteButton">Delete</button>
        </td>
        <td> 
        ${employeeFirstName} 
        </td> 
        <td> 
        ${employeeLastName} 
        </td> 
        <td>
        ${employeeIdNumber}
        </td>
        <td>
        ${employeeJobTitle}
        </td>
        <td>
        $${Number(employeeSalary).toFixed(2)}
        </td>
        
        </tr>
 
    `);//add input to table 
    emptyFields();//create function to clear input fields
    //create a function to calculate monthly costs
    monthlyCosts(employeeSalary);
}

function emptyFields() {
    $('#firstNameInput').val('');//empty iputs
    $('#lastNameInput').val('');
    $('#IDnumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

}//clear input fields

function monthlyCosts(num1) {
    let num2 = num1 / 12;
    monthlySalaries.push(num2)
    console.log(monthlySalaries);
    addtogether();
}//get individual monthly salaries

function addtogether() {
    let totalMonthly = 0;
    for (let i = 0; i < monthlySalaries.length; i++) {
        totalMonthly = totalMonthly + monthlySalaries[i];
    }//add together individual monthly salaries for total monthly cost

    console.log(Math.round(totalMonthly));
    if (totalMonthly >= 20000){
        $('#monthlyCosts').css('background-color','red');
    }//change background color to red if total monthly exceeds $20,000
    $('#monthlyCosts').empty();//reset monthly costs field so they dont keep repeating
    $('#monthlyCosts').append('Total Monthly Costs:  $', Number(totalMonthly.toFixed(2)));
}
function deleteEmployee() {
    console.log('in delete employee');
    $(this).closest('tr').remove();

}


//any time you have a list of items you should put the items into an array
//make them objects so that the data stays together as one employee