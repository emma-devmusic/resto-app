import { DynamicForm } from "../components/form/DynamicForm"
import { LayoutView, SectionView } from "../components/layout"
import { ActionButton } from "../types/form"

export const Dash = () => {

    

    const actions: ActionButton[]= [
        {
            label: "Nuevo",
            action: () => console.log("Nuevo"),
            type: 'button',
            variant: 'primary'
        },
        {
            label: "Secundario",
            action: () => console.log("Nuevo"),
            type: 'button',
            variant: 'secondary'
        },
    ]

    return (
        <div>
            <LayoutView
                title="Tablero"
            >
                <SectionView
                    title="Ventas del Mes"
                    description="Descripcion de Ventas del Mes"
                    actionsHeader={actions}
                >
                    <DynamicForm 
                        actionSaveData={(e:any) => console.log(e)}
                        values={{
                            name: '',
                            lastname: '',
                            email: ''
                        }}
                        requiredFields={['email', 'name', 'lastname']}
                        showSubmit={true}
                        floatingLabels={true}
                    />
                </SectionView>
            </LayoutView>
        </div>
    )
}
