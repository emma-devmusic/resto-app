import { Input } from "../components";
import { Button } from "../components/buttons/Button";
import { LinkItem } from "../components/shared/LinkItem";
import { useForm } from "../hooks/useForm";
import { TitleWelcomeLogin } from "./modules/TitleWelcomeLogin";

export const Register = () => {

    const [values, handleInputChange] = useForm({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        two_factor: false,
    })

    const handleSubmit = () => {

    }

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute h-full w-full object-cover opacity-80"
                    />

                    <TitleWelcomeLogin
                        variant='dark'
                        text="Regístrate y descubre la forma más fácil y eficiente de gestionar tus inventarios. Optimiza tus operaciones, mantén el control total de tus productos y toma decisiones informadas con Ding Stocks. ¡Todo en un solo lugar!"
                    />
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-[500px]">
                        <TitleWelcomeLogin
                            variant='light'
                            text="Regístrate y descubre la forma más fácil y eficiente de gestionar tus inventarios. Optimiza tus operaciones, mantén el control total de tus productos y toma decisiones informadas con Ding Stocks. ¡Todo en un solo lugar!"
                        />
                        <h3 className="text-center text-3xl text-gray-700 hidden lg:block">Register</h3>
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Input
                                    label="Nombre"
                                    name="name"
                                    onChange={handleInputChange}
                                    type="email"
                                    value={values.name}
                                    placeholder="Fernando"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Input
                                    label="Apellido"
                                    name="lastName"
                                    onChange={handleInputChange}
                                    type="text"
                                    value={values.lastName}
                                    placeholder="Perez"
                                />
                            </div>

                            <div className="col-span-6">
                                <Input
                                    label="Correo Electrónico"
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    value={values.email}
                                    placeholder="correo@correo.com"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Input
                                    label="Contraseña"
                                    name="password"
                                    onChange={handleInputChange}
                                    type="password"
                                    value={values.password}
                                    placeholder="123456789"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <Input
                                    label="Confirmar Contraseña"
                                    name="confirmPassword"
                                    onChange={handleInputChange}
                                    type="password"
                                    value={values.confirmPassword}
                                    placeholder="123456789"
                                />
                            </div>

                            <div className="col-span-6">
                                <Input
                                    id="two_factor"
                                    label="Activar Autenticación de 2 factores"
                                    name="two_factor"
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    checked={values.two_factor}
                                />
                            </div>

                            <div className="col-span-6">
                                <p className="text-xs text-gray-500 text-start">
                                    Ver <LinkItem to="#" variant="text" className="inline-flex">términos y condiciones</LinkItem> de servicio y <LinkItem to="#" variant="text" className="inline-flex">políticas de privacidad</LinkItem>.
                                </p>
                            </div>

                            <div className="col-span-6 flex flex-col items-center gap-4">
                                <Button
                                    action={handleSubmit}
                                    variant="primary"
                                    label="Crear Cuenta"
                                />
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    ¿Ya tienes una cuenta? <LinkItem to="/login" variant="text" className="inline-flex">Ingresar</LinkItem>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};
