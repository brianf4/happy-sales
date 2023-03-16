import Transactions from "../components/Transactions";
import Navbar from "../components/Navbar";

function Inventory(props) {

  const products = props.inventory.map((product) => {
    return (
      <Transactions 
        key={product._id}
        inventory={product}
        deleteProduct={props.deleteProduct}
        handleId={props.handleId}
      />
    )
  } )
  
  
  return (
    <div className="border-2 border-black">
      <Navbar />
      <header>
        <h2 className="py-4 text-center text-xl">Inventory</h2>
        <section className="flex justify-end p-2">
          
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-primary">Add Item</label>
          
        </section>
      </header>
      <div className="overflow-auto border-2 border-red-500">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Cost</th>
              <th>Qty</th>
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

