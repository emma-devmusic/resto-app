
import { FormEvent, useEffect, useState } from "react"
import { SectionView } from "../../../components/layout";
import { Input } from "../../../components";
import { useForm } from "../../../hooks/useForm";
import { formValidate } from "../../../common/helpers";
import { ActionButton, FormsInputs, ObjectErrorsMessages } from "../../../types/form";

export const PersonalData = () => {

    const [flag, setFlag] = useState(false)
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages)
    const [value, handleInputChange] = useForm({
        name: '',
        lastname: '',
        phone: '',
        address: '',
    })

    useEffect(() => {
        const msgs = formValidate(
            value as FormsInputs,
            ['name', 'lastname']
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
                title="Información Personal"
                description="Actualiza tu información personal como nombre, teléfono y dirección para mantener tus datos al día."
                actions={actions}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Input
                            label="Nombre"
                            name="name"
                            type="text"
                            onChange={handleInputChange}
                            value={value.name}
                            placeholder="Joe"
                            errorMsg={flag ? errorMsg.name : ''}
                        />
                        <Input
                            label="Apellido"
                            name="lastname"
                            type="text"
                            onChange={handleInputChange}
                            value={value.lastname}
                            placeholder="Doe"
                            errorMsg={flag ? errorMsg.lastname : ''}
                        />
                    </div>
                    <Input
                        label="Teléfono"
                        name="phone"
                        type="phone"
                        onChange={handleInputChange}
                        value={value.phone}
                        placeholder="1234567890"
                        errorMsg={flag ? errorMsg.phone : ''}
                    />
                    <Input
                        label="Dirección"
                        name="address"
                        type="text"
                        onChange={handleInputChange}
                        value={value.address}
                        placeholder="Cuyo 48, Charata, Chaco"
                        errorMsg={flag ? errorMsg.address : ''}
                    />
                </div>
            </SectionView>
        </form>
    )
}
