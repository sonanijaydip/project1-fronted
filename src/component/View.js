import React from "react";
import { Link } from "react-router-dom";
import './css/viewcourse.css';

function view_course(){
    return(
        <>
         <h1 align="center">view course</h1>

            <table width="90%" align="center">
              <thead>  
                <tr>
                    <th>course name</th>
                    <th>course fee</th>
                    <th>Remove Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default view_course