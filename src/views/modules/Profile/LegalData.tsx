
import { FormEvent, useEffect, useState } from "react"
import { SectionView } from "../../../components/layout";
import { Input } from "../../../components";
import { useForm } from "../../../hooks/useForm";
import { formValidate } from "../../../common/helpers";
import { ActionButton, FormsInputs, ObjectErrorsMessages } from "../../../types/form";

export const LegalData = () => {

    const [flag, setFlag] = useState(false)
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages)
    const [value, handleInputChange] = useForm({
        cuil: '',
        cuit: '',
        name_bussines: '',
        phone_bussines: '',
        address_bussines: '',
    })

    useEffect(() => {
        const msgs = formValidate(
            value as FormsInputs,
            ['cuil', 'cuit']
        )
        setErrorMsg(msgs)
    }, [value])

    const handleSave = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFlag(true)
        if (!errorMsg.hasErrors) {
            console.log('Guardando', value);
        }
    }

    const actions: ActionButton[] = [
        {
            action: handleSave,
            label: 'Guardar',
            type: 'submit',
            disabled: flag && errorMsg.hasErrors
        }
    ]

    return (
        <form onSubmit={handleSave}>
            <SectionView
                title="Información Legal"
                description="Gestiona los datos legales de tu empresa, como CUIL, CUIT, teléfono y dirección. Mantén siempre la información actualizada."
                actions={actions}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Input
                            label="Cuil"
                            name="cuil"
                            type="text"
                            onChange={handleInputChange}
                            value={value.cuil}
                            placeholder="1230045678"
                            errorMsg={flag ? errorMsg.cuil : ''}
                        />
                        <Input
                            label="Cuit"
                            name="cuit"
                            type="number"
                            onChange={handleInputChange}
                            value={value.cuit}
                            placeholder="1648045678"
                            errorMsg={flag ? errorMsg.cuit : ''}
                        />
                    </div>
                    <Input
                        label="Nombre de la Empresa"
                        name="name_bussines"
                        type="text"
                        onChange={handleInputChange}
                        value={value.name_bussines}
                        placeholder="1234567890"
                        errorMsg={flag ? errorMsg.name_bussines : ''}
                    />
                    <Input
                        label="Teléfono de la Empresa"
                        name="phone_bussines"
                        type="phone"
                        onChange={handleInputChange}
                        value={value.phone_bussines}
                        placeholder="1234567890"
                        errorMsg={flag ? errorMsg.phone_bussines : ''}
                    />
                    <Input
                        label="Dirección de la Empresa"
                        name="address_bussines"
                        type="text"
                        onChange={handleInputChange}
                        value={value.address_bussines}
                        placeholder="Cuyo 48, Charata, Chaco"
                        errorMsg={flag ? errorMsg.address_bussines : ''}
                    />
                </div>
            </SectionView>
        </form>
    )
}
