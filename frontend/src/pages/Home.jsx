import React from "react";
import '../App.css';
import Graph from '../components/Graph';
import Stat from '../components/Stat';
import Navbar from '../components/Navbar'

function Home(props) {

  // const products = props.inventory.map((product) => {
  //   return (
  //     <Transactions 
  //       key={props.inventory._id}
  //       inventory={product}
  //       deleteProduct={props.deleteProduct}
  //     />  
  //   )
  // } )
  console.log()

  return (

    <div>
    <Navbar />  
      <section className="border-2 border-cyan-600"> 
      <h1>Revenue</h1>
        <Graph />
      </section>
      <section className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Transactions</th>
                <th>ID</th>
                <th>Cost</th>
                <th>Qty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            
          </table>
        </div>
      </section>
      <section className="border-2 border-green-400 flex flex-col w-[99%] p-2 gap-y-4">
        <Stat />
        <Stat />
        <Stat />
      </section>
    </div>    
        
  )
}
export default Home