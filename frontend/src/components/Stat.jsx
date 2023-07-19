import React from "react";

function Stat(props) {
  let date = new Date()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  

  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
      <div className="stats shadow md:w-1/3 bg-secondary text-secondary-content">
  
        <div className="stat">
          <div className="stat-title">Inventory Count</div>
          <div className="stat-value">{props.inventory.reduce((sum, current) => sum + current.qty, 0) - props.soldItems.length}</div>
          <div className="stat-desc">Amount of inventory on hand</div>
        </div>

      </div>

      <div className="stats shadow md:w-1/3 bg-secondary text-secondary-content">
  
        <div className="stat">
          <div className="stat-title">Items Sold</div>
          <div className="stat-value">{props.soldItems.length}</div>
          <div className="stat-desc">Total items sold</div>
        </div>

      </div>

      <div className="stats shadow md:w-1/3 bg-secondary text-secondary-content">
  
        <div className="stat">
          <div className="stat-title">This Month</div>
          <div className="stat-value tracking-wide">{`$${props.soldItems.reduce((sum,  current) => sum + current.cost, 0)}`}</div>
          <div className="stat-desc">Total revenue for {months[date.getMonth()]}</div>
        </div>

      </div>
    </div>
  )
}

export default Stat