import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Transactions from './components/Transactions';
import Graph from './components/Graph';
import Stat from './components/Stat';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="drawer drawer-mobile">
        
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="border-2 border-amber-800 drawer-content flex flex-col items-center justify-center overflow-x-hidden">
          {/* <!-- Page content here --> */}
          
          
          <section className="border-2 border-green-400"> 
            <Graph />
          </section>
          <section className="border-2 border-green-400 w-[99%]">
            <Transactions />
          </section>
          <section className="border-2 border-green-400 flex flex-col w-full bg-neutral p-2 gap-y-4">
            <Stat />
            <Stat />
            <Stat />
          </section>
          
        </div> 
        <Sidebar />
        
      </div>
    </div>
  );
}

export default App;