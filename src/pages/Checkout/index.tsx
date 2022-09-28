import Form from "../../components/Form"
import OrderCoffees from "../../components/OrderCoffees"
import { CheckoutContainer } from "./tyles"

const Checkout = () => {
  return (
    <CheckoutContainer>
        <Form />
        <OrderCoffees />
    </CheckoutContainer>
  )
}

export default Checkout