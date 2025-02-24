
import { Edit3, Trash2 } from "lucide-react";
import { ActionButton } from "../../../types/form";
import { TableDing } from "../table-ding/TableDing"
import { users_obj } from "../../../common/mocks/users";
import { useAppDispatch } from "../../../redux/store";
import { uiModal } from "../../../redux/slices/uiSlice";


export const UserTable = () => {

    const dispatch = useAppDispatch()

    const handleDelete = (e: any) => {
        console.log('Eliminar el elemento:', e);
    }

    const handleEdit = (e: any) => {
        console.log('Actualizar el elemento:', e);
        dispatch(uiModal({
            modalFor: 'edit_user',
            modalOpen: true,
            modalTitle: 'Actualizar Usuario'
        }))
    }

    const actions: ActionButton[] = [
        {
            label: '',
            action: handleEdit,
            icon: <Edit3 className="h-5" />,
            variant: 'plain-primary'
        },
        {
            label: '',
            action: handleDelete,
            icon: <Trash2 className="h-5" />,
            variant: 'plain-danger'
        },
    ]

    return (
        <TableDing
            td={users_obj}
            columns={['name', "role", 'phone']}
            withActions
            actions={actions}
            getItemsSelected={(e) => console.log('Elementos seleccionados:', e)}
        />
    )
}



