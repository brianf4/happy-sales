import React from "react";
import '../App.css';
import Sidebar from '../components/Sidebar';
import Transactions from '../components/Transactions';
import Graph from '../components/Graph';
import Stat from '../components/Stat';

function Home() {
  return (
    <div>
      
      
      <div className="drawer drawer-mobile">
        
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="border-2 border-amber-800 drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          
          
          <section className="border-2 border-cyan-600"> 
            <Graph />
          </section>
          <section className="border-2 w-[99%]">
            <Transactions />
          </section>
          <section className="border-2 border-green-400 flex flex-col w-full p-2 gap-y-4">
            <Stat />
            <Stat />
            <Stat />
          </section>
          
        </div> 
        <Sidebar />
        
      </div>
    </div>
  )
}
export default Home