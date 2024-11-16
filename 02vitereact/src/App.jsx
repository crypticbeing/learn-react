
import Krushna from "./kruhsna"
import orderData from './orderData.json'

function App() {

  return (
    <>
    <Krushna/>
   <h1>hello React</h1>
   <div >
   {orderData.map((order) => (
        <div key={order.id}>
          <p><strong>Base:</strong> {order.base}</p>
          <p><strong>Protein:</strong> {order.protein}</p>
          <p><strong>Dressings:</strong> {order.dressings.join(', ')}</p>
          <hr />
        </div>
))}
   </div>
   </>
   
  )
}

export default App
