import { useState } from "react"
import { DynamicForm } from "../../../components/form/DynamicForm"
import { SectionView } from "../../../components/layout"
import { ActionButton, FormsInputs } from "../../../types/form"


export const AnotherData = () => {

    const [actions, setActions] = useState<ActionButton[]>([])


    const handleSave = (values:FormsInputs) => {
        console.log(values);
    }

    return (
        <SectionView
            title="test"
            description="test"
            actions={actions}
        >
            <DynamicForm
                actionSaveData={handleSave}
                updateActions={setActions}
                requiredFields={['age', 'name']}
                values={{
                    cuil: '',
                    cuit: '',
                    phone_bussines: '',
                    address_bussines: ''
                }}
            />
        </SectionView>
    )
}
