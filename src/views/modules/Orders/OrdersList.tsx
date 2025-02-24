// import { Collapsible } from "../../../components"
// import { OrderTable } from "../../../components/tables"
import { orders } from "../../../common/mocks/orders"
import { OrderItem } from "./OrderItem"

export const OrdersList = () => {


    return (
        orders.map((order, index) => (
            <OrderItem key={index} order={order} />
        ))
    )
}
