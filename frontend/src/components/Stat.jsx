import React from "react";

function Stat() {
  return (
    <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
      <div className="stats shadow md:w-1/3">
  
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

      </div>
      <div className="stats shadow md:w-1/3">
  
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

      </div>
      <div className="stats shadow md:w-1/3">
  
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

      </div>
    </div>
  )
}

export default Stat