import { AlertBordered } from "../components/alert/bordered/AlertBordered"
import { LayoutView, SectionView } from "../components/layout"
import { ProductsTable } from "../components/tables/productos/ProductsTable"
import { uiModal } from "../redux/slices/uiSlice"
import { useAppDispatch } from "../redux/store"
import { ActionButton } from "../types/form"

export const Products = () => {

    const dispatch = useAppDispatch()

    const newUser = () => {
        dispatch(uiModal({
            modalFor: 'new_product',
            modalOpen: true,
            modalTitle: 'Nuevo Producto'
        }))
    }

    const actionHeader: ActionButton[] = [
        {
            action: newUser,
            label: 'Nuevo Producto',
        }
    ]

    return (
        <LayoutView title="Productos">
            <SectionView
                title="Todos los productos"
                actionsHeader={actionHeader}
            >
                <div className="flex flex-col gap-4">
                    <AlertBordered
                        title="Listando de productos"
                        description="Revisa, edita, elimina y crea los productos que tu bar ofrece al público."
                        type="secondary"
                        showIcon={false}
                    />
                    <ProductsTable />
                </div>
            </SectionView>
        </LayoutView>
    )
}
