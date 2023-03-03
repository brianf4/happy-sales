import React from "react";


function Transactions() {
  return (
    
    <div className="overflow-x-auto whitespace-nowrap">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Pizza</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Ice Cream</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <td>Rice</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td>Bruce chad</td>
            <td>Engineer</td>
            <td>Yellow</td>
            <td>Sushi</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Transactions