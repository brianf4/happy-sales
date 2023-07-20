import React, { useState } from "react";
import '../App.css';
import Graph from '../components/Graph';
import Stat from '../components/Stat';

function Home(props) {

  let latestItems = {}
  for (let i = 0; i < props.latestTransactions.length; i++) {
    let item = props.latestTransactions[i].product
    latestItems[item] = latestItems[item] ?
      [latestItems[item][0] + 1, props.latestTransactions[i].cost, new Date(props.latestTransactions[i].date)]
      :
      latestItems[item] = [1, props.latestTransactions[i].cost, new Date(props.latestTransactions[i].date)]
  }
  

  const items = Object.keys(latestItems).map((key, i) => {
    return (
      <tbody key={i}>
        <tr>
          <th>{i + 1}</th>
          <td>{key}</td>
          <td>
            {`${latestItems[key][2].getMonth() + 1}/${latestItems[key][2].getDate()}/${latestItems[key][2].getFullYear() - 2000}`}
          </td>
          <td>{`$${latestItems[key][1]}`}</td>
          <td>{latestItems[key][0]}</td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className="home-container bg-base-200 border-2 border-green-300 p-2 w-full lg:w-3/4">

        <div className="border-2 border-fuchsia-400 w-full lg:h-full">
          <section className="flex flex-col xl:flex-row xl:gap-x-4 rounded-md p-2 gap-y-4 h-3/4">
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
                      <th>Date</th>
                      <th>Cost</th>
                      <th>Qty</th>
                    </tr>
                  </thead>
                  {items}
                </table>
              </div>
            </section>
          </section>

          <section className="flex flex-col p-2 gap-y-4 h-1/4 justify-center">
            <Stat
              inventory={props.inventory}
              soldItems={props.soldItems}
            />
          </section>
        </div>
    </div>
  )
}
export default Home