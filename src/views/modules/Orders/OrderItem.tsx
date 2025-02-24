import { Collapsible } from "../../../components";
import { OrderTable } from "../../../components/tables";
import { Badge } from "../../../components"; // Suponiendo que tengas un componente de Badge
import { Order } from "../../../types/orders";
import { CardResume } from "./CardResume";


interface OrderItemProps {
    order: Order;
}

export const OrderItem = ({ order }: OrderItemProps) => {
    const { id, customer, status } = order;

    const getColor = (status: string) => {
        switch (status) {
            case "IN_PROCESS":
                return "yellow";
            case "READY":
                return "green";
            case "DELIVERED":
                return "blue";
            case "CANCELED":
            case "REJECTED":
                return "red";
            case "FINALIZED":
                return "purple";
            default:
                return "blue";
        }
    };

    const handlePrint = () => console.log("Imprimiendo pedido...");
    const handleCharge = () => console.log("Cobro realizado.");
    const handleCancel = () => console.log("Pedido cancelado.");

    return (
        <Collapsible
            name={
                <h2 className="flex items-center gap-1">
                    <strong>#{id}</strong>
                    <span className="text-sm">| {customer.name}</span>
                    <Badge
                        color={getColor(status)}
                        text={status.replace(/_/g, " ")}
                        className="ml-1"
                    />
                </h2>
            }
        >
            <div className="flex items-start gap-4 w-full">
                <div className="basis-[66%]">
                    <OrderTable items={order.items} onAddProduct={() => console.log("Agregar producto")} />
                </div>
                <div className="hidden lg:block basis-[33%]">
                    <CardResume
                        order={order}
                        onPrint={handlePrint}
                        onCharge={handleCharge}
                        onCancel={handleCancel}
                    />
                </div>
            </div>
        </Collapsible>
    );
};
