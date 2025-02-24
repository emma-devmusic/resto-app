import { PlusCircle } from "lucide-react"
import { LayoutView, SectionView } from "../components/layout"
import { ActionButton } from "../types/form"
import { OrdersList } from "./modules/Orders/OrdersList"


export const Orders = () => {

    const action = () => {
        console.log('Nuevo Pedido');
    }

    const actions: ActionButton[] = [
        {
            label: 'Nueva Orden',
            action,
            icon: <PlusCircle className="h-4 w-4" />,
            type: 'button',
            variant: 'primary'
        }
    ]

    return (
        <LayoutView title="Tus Pedidos">
            <SectionView
                title="Ordenes"
                actionsHeader={actions}
            >
                <div className="rounded-lg  space-y-4">
                    <OrdersList />
                </div>
            </SectionView>
        </LayoutView>
    )
}
