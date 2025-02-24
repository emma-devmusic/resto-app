import { AlertBordered } from "../../../components/alert/bordered/AlertBordered";
import { DynamicForm } from "../../../components/form/DynamicForm"
import { FormsInputs } from "../../../types/form";


export const UserModal = () => {

    const handleSave = (values: FormsInputs) => {
        console.log(values);
    }

    return (
        <div className="flex flex-col gap-4 p-2.5">
            <AlertBordered
                title="Creación de un nuevo usuario"
                description="Coloca la información que creas relevante para la creación del usuario. Ten en cuenta que el 'Nombre' es obligatorio."
                type="secondary"
                showIcon={true}
            />
            <DynamicForm
                floatingLabels
                actionSaveData={handleSave}
                requiredFields={['name', 'password', 'password2']}
                values={{
                    name: '',
                    age: '',
                    phone: '',
                    address: '',
                    password: '',
                    password2: ''
                }}
            />
        </div>
    )
}
