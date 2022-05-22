import React, {useState,setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    
    return(
 
        <body>
<h3>STUDENT REGISTRATION FORM</h3>

 
<table align="center" cellpadding = "10">
 
{/* <!----- First Name ----------------------------------------------------------> */}
<tr>
<td> NAME</td>
<td><input type="text" name="First_Name" maxlength="30"/>

</td>
</tr>
 
{/* <!----- Date Of Birth ----------------------------------------------------------> */}
<tr>
<td>Date Of Birth</td>
<td><input type="date" name="Last_Name" maxlength="30"/>
</td>
</tr>

{/* <!----- class ----------------------------------------------------------> */}
<tr>
<td>CLASS</td>
<td>
    <select className="form__input">
        <option>I</option>
        <option> II</option>
        <option> III</option>
        <option>IV</option>
        <option>V</option>
        <option>VI</option>
        <option> VII</option>
        <option> VIII</option>
        <option>IX</option>
        <option>X</option>
        <option>XI</option>
        <option>XII</option>
    </select></td>
</tr>
 
{/* <!----- Division----------------------------------------------------------> */}
<tr>
<td>DIVISION</td>
<td>
    
    <select>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
</td>
</tr>
 
{/* <!----- Gender -----------------------------------------------------------> */}
<tr>
<td>GENDER</td>
<td>
Male <input type="radio" name="Gender" value="Male" />
Female <input type="radio" name="Gender" value="Female" />
</td>
</tr>
 

 
<tr> 
<td colspan="2" align="center">
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
</td>
</tr>
</table>

 
</body>
       
    )       
}

export default RegistrationForm;