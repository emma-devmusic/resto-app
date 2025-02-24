import { LayoutView, SectionView } from "../components/layout"
import { UserTable } from "../components/tables"
import { ActionButton } from "../types/form"
import { useAppDispatch } from "../redux/store"
import { uiModal } from "../redux/slices/uiSlice"
import { AlertBordered } from "../components/alert/bordered/AlertBordered"

export const Users = () => {

    const dispatch = useAppDispatch()

    const newUser = () => {
        dispatch(uiModal({
            modalFor: 'new_user',
            modalOpen: true,
            modalTitle: 'Nuevo Usuario'
        }))
    }

    const actionHeader: ActionButton[] = [
        {
            action: newUser,
            label: 'Crear Usuario'
        }
    ]

    return (
        <LayoutView title="Usuarios">
            <SectionView
                title="Lista de Usuarios"
                actionsHeader={actionHeader}
            >
                <div className="flex flex-col gap-4">
                    <AlertBordered
                        title="Listando usuarios"
                        description="Revisa, edita, elimina y crea los usuarios que necesites para tu organización."
                        type="secondary"
                        showIcon={false}
                    />
                    <UserTable />
                </div>
            </SectionView>
        </LayoutView>
    )
}
