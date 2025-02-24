
import { LayoutView } from "../components/layout";
import { LegalData } from "./modules/Profile/LegalData";
import { PersonalData } from "./modules/Profile/PersonalData";

export const Profile = () => {

    return (
        <LayoutView title="Mi Perfil">
            <PersonalData />
            <LegalData />
        </LayoutView>
    )
}
