import Transactions from "../components/Transactions";

function Inventory(props) {

  const products = props.inventory.map((product, i) => {
    return (
      <Transactions 
        key={product._id}
        inventory={product}
        numOfItem={i}
        deleteProduct={props.deleteProduct}
        handleId={props.handleId}
      />
    )
  } )
  
  return (
    <div className="">
      <header>
        <h2 className="py-4 text-center text-xl">Inventory</h2>
        <section className="flex justify-end p-2">
          
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-primary">Add Item</label>
          
        </section>
      </header>
      <div className="overflow-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>ID</th>
              <th>Cost</th>
              <th>Qty</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          
          {products}
          
        </table>
        
      </div>
      

    </div>
  )
}
export default Inventory

