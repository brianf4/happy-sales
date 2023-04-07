import React, { useState } from "react";
import '../App.css';
import Graph from '../components/Graph';
import Stat from '../components/Stat';

function Home(props) {
  console.log(props.latestTransactions)

  const items = props.latestTransactions.map((item, i) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <tbody key={i}>
        <tr>
          <th>{i + 1}</th> 
          <td>{item[0].product}</td> 
          <td>
            {`${monthNames[item[0].date.getMonth()]} ${item[0].date.getDay()} ${item[0].date.getFullYear()} ${item[0].date.getHours() - 12}:${item[0].date.getMinutes()}`}
          </td> 
          <td>{item[0].cost}</td> 
          <td>{}</td>
        </tr>
      </tbody> 

    )
  })
  
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
                  <th>Qty</th>
                </tr>
              </thead> 
              {items}
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