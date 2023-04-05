import React from "react";
import '../App.css';
import Graph from '../components/Graph';
import Stat from '../components/Stat';

function Home(props) {
  
  return (
    <div className="home-container bg-base-200 p-2 overflow-auto h-full">
      <section className="flex flex-col xl:flex-row xl:gap-x-4 rounded-md p-2 gap-y-4"> 
        <Graph 
          soldItems={props.soldItems}
          graphOptions={props.graphOptions}
        />
        <section className="overflow-auto bg-neutral-content rounded-md p-5">
          <div>
            <span className="block text-xl font-bold py-2">Latest Transactions</span>
            <span className="block py-2 text-neutral">This is a list of latest transactions</span>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th></th> 
                  <th>Transaction</th> 
                  <th>Date & Time</th> 
                  <th>Amount</th> 
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>1</th> 
                  <td>Cy Ganderton</td> 
                  <td>Quality Control Specialist</td> 
                  <td>Littel, Schaden and Vandervort</td> 
                </tr>
                <tr>
                  <th>2</th> 
                  <td>Hart Hagerty</td> 
                  <td>Desktop Support Technician</td> 
                  <td>Zemlak, Daniel and Leannon</td> 
                </tr>
                <tr>
                  <th>3</th> 
                  <td>Brice Swyre</td> 
                  <td>Tax Accountant</td> 
                  <td>Carroll Group</td> 
                </tr>
                <tr>
                  <th>4</th> 
                  <td>Marjy Ferencz</td> 
                  <td>Office Assistant I</td> 
                  <td>Rowe-Schoen</td> 
                </tr>
                <tr>
                  <th>5</th> 
                  <td>Yancy Tear</td> 
                  <td>Community Outreach Specialist</td> 
                  <td>Wyman-Ledner</td> 
                </tr>
                <tr>
                  <th>6</th> 
                  <td>Irma Vasilik</td> 
                  <td>Editor</td> 
                  <td>Wiza, Bins and Emard</td> 
                </tr>
                <tr>
                  <th>7</th> 
                  <td>Meghann Durtnal</td> 
                  <td>Staff Accountant IV</td> 
                  <td>Schuster-Schimmel</td> 
                </tr>
                <tr>
                  <th>8</th> 
                  <td>Sammy Seston</td> 
                  <td>Accountant I</td> 
                  <td>O'Hara, Welch and Keebler</td> 
                </tr>
                <tr>
                  <th>9</th> 
                  <td>Lesya Tinham</td> 
                  <td>Safety Technician IV</td> 
                  <td>Turner-Kuhlman</td> 
                </tr>
                <tr>
                  <th>10</th> 
                  <td>Zaneta Tewkesbury</td> 
                  <td>VP Marketing</td> 
                  <td>Sauer LLC</td> 
                </tr>
              </tbody> 
            </table>
          </div>
        </section>
      </section>
      
      <section className="flex flex-col p-2 gap-y-4">
        <Stat />
      </section>
    </div>    
        
  )
}
export default Home