import React from "react";
import '../App.css';
import Transactions from '../components/Transactions';
import Graph from '../components/Graph';
import Stat from '../components/Stat';

function Home() {
  return (
        
        <div>
          
          <section className="border-2 border-cyan-600"> 
          <h1>Revenue</h1>
            <Graph />
          </section>
          <section className="">
            <Transactions />
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