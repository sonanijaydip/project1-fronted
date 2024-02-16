import React from "react";
// import { Link } from "react-router-dom";
import './css/viewcourse.css';

function view_course(){
    return(
        <>
        <div className="bg-white">
         <h1 align="center" >view course</h1>

            <table width="100%" align="center" border="1px">
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
            </div>
        </>
    )
}

export default view_course