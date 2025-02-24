import { CircleDollarSign, PrinterIcon, XCircle } from "lucide-react";
import { Button, Card } from "../../../components";
import { Order, PAYMENT_METHOD } from "../../../types/orders";

interface CardResumeProps {
    order: Order;
    onPrint: () => void;
    onCharge: () => void;
    onCancel: () => void;
}

export const CardResume: React.FC<CardResumeProps> = ({
    order,
    onPrint,
    onCharge,
    onCancel,
}) => {
    const statusColors:any = {
        IN_PROCESS: "text-yellow-600",
        READY: "text-blue-600",
        DELIVERED: "text-green-600",
        CANCELED: "text-red-600",
        REJECTED: "text-red-700",
        FINALIZED: "text-gray-600",
    };

    const paymentMethodLabels: Record<PAYMENT_METHOD, string> = {
        CASH: "Efectivo",
        CARD: "Tarjeta",
        PENDING: "Pendiente",
    };

    const formatDateTime = (dateTime: string) => {
        const date = new Date(dateTime);
        return date.toLocaleString("es-AR");
    };

    return (
        <Card className="border border-gray-200 shadow-transparent">
            <Card.Header className="border-b-2 !border-gray-200 py-2">
                <h3 className="text-sm font-medium">Resumen de Pedido</h3>
            </Card.Header>

            <Card.Body>
                <div className="flex flex-col gap-3 [&_div_span,&_div_strong]:text-xs">
                    {/* Información general del pedido */}
                    <div className="flex gap-2 text-sm">
                        <span>Número de Pedido:</span> <strong>#{order.id}</strong>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>Cliente:</span> <strong>{order.customer.name}</strong>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>Teléfono:</span> <strong>{order.customer.phone}</strong>
                    </div>
                    {order.type === "DINE_IN" && order.table_number && (
                        <div className="flex gap-2 text-sm">
                            <span>Mesa:</span> <strong>{order.table_number}</strong>
                        </div>
                    )}
                    {order.type === "DELIVERY" && order.delivery_address && (
                        <>
                            <div className="flex gap-2 text-sm">
                                <span>Dirección:</span>{" "}
                                <strong>
                                    {order.delivery_address.street}, {order.delivery_address.city}{" "}
                                    ({order.delivery_address.postal_code})
                                </strong>
                            </div>
                            {order.delivery_address.notes && (
                                <div className="flex gap-2 text-sm">
                                    <span>Notas:</span>{" "}
                                    <strong>{order.delivery_address.notes}</strong>
                                </div>
                            )}
                        </>
                    )}
                    {order.waiter && (
                        <div className="flex gap-2 text-sm">
                            <span>Atendido por:</span> <strong>{order.waiter.name}</strong>
                        </div>
                    )}

                    {/* Estado del pedido */}
                    <div className="flex gap-2 text-sm">
                        <span>Estado:</span>{" "}
                        <strong className={statusColors[order.status]}>
                            {order.status.replace(/_/g, " ")}
                        </strong>
                    </div>

                    {/* Información de pago */}
                    <div className="flex gap-2 text-sm">
                        <span>Método de pago:</span>{" "}
                        <strong>{paymentMethodLabels[order.payment_method]}</strong>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>Hora del pedido:</span>{" "}
                        <strong>{formatDateTime(order.order_date_time)}</strong>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>Tiempo estimado:</span>{" "}
                        <strong>{order.estimated_time}</strong>
                    </div>
                    <div className="flex gap-2 text-sm">
                        <span>Total:</span>{" "}
                        <strong>${order.total.toLocaleString("es-AR")}</strong>
                    </div>

                    {/* Acciones */}
                    <Button
                        label="Imprimir"
                        icon={<PrinterIcon className="h-4" />}
                        variant="primary-outline"
                        className="[&_div]:gap-0"
                        action={onPrint}
                    />
                    {order.status === "IN_PROCESS" && (
                        <Button
                            label="Cobrar"
                            icon={<CircleDollarSign className="h-4" />}
                            className="[&_div]:gap-0"
                            action={onCharge}
                        />
                    )}
                    {order.status === "IN_PROCESS" && (
                        <Button
                            label="Cancelar"
                            icon={<XCircle className="h-4" />}
                            variant="danger-outline"
                            className="[&_div]:gap-0"
                            action={onCancel}
                        />
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};
