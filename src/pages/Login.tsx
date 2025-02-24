import { useForm } from "../hooks/useForm";
import { Input } from "../components";
import { LinkItem } from "../components/shared/LinkItem";
import { TitleWelcomeLogin } from "./modules/TitleWelcomeLogin";
import { Button } from '../components/buttons/Button';
import { useAppDispatch, useAppSelector } from "../redux/store";
import { login } from "../redux/slices/authSlice";
import { Spinner } from "../components/shared/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Login = () => {

    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.ui)
    const { isAuthenticated } = useAppSelector(state => state.auth);

    const navigate = useNavigate()

    const [imageIndex, setImageIndex] = useState(1)
    const [values, handleInputChange] = useForm({
        email: "fayser.dev1@gmail.com",
        password: "Gett2023!",
        remember: false
    })

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(login({
            email: values.email,
            password: values.password,
            navigate
        }))
    }

    useEffect( () => {
        const interval = setInterval(() => {
            setImageIndex( imageIndex => imageIndex === 5 ? 1 : imageIndex + 1)
        }, 5000);
        return () => clearInterval(interval)
    })

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [navigate, isAuthenticated])

    return (
        <section className="bg-slate-50">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-7 lg:h-full xl:col-span-8">
                    <img
                        alt="background"
                        src={`/img/login/${imageIndex}.jpg`}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <TitleWelcomeLogin
                        variant='dark'
                        text="Ingresa a tu cuenta y retoma el control de las ventas de tu bar en segundos. Administra tus productos, consulta tus estadísticas y mantente siempre informado con Ding Bar. ¡Tu Bar, siempre en tus manos!"
                    />
                </section>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-5 lg:px-16 lg:py-12 xl:col-span-4 bg-radial-[at_40%_0%] from-white from-60% to-gray-300 to-100%">
                    <div className="max-w-xl lg:max-w-3xl">
                        <TitleWelcomeLogin
                            variant='light'
                            text="Ingresa a tu cuenta y retoma el control de tus inventarios en segundos. Administra tus productos, consulta tus estadísticas y mantente siempre informado con Ding Stocks. ¡Tu stock, siempre en tus manos!"
                        />
                        <h3 className="text-center text-3xl text-gray-700 hidden lg:block">🦑Resto-app</h3>
                        <div className="h-4 mt-5 flex items-center justify-center">
                            {isLoading && <Spinner size={8} />}
                        </div>
                        <form
                            action="#"
                            className="mt-8 grid grid-cols-6 gap-6 sm:min-w-[380px]"
                            onSubmit={handleSubmit}
                        >
                            <div className="col-span-6">
                                <Input
                                    label="Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    value={values.email}
                                    placeholder="correo@correo.com"
                                />
                            </div>
                            <div className="col-span-6 ">
                                <Input
                                    label="Contraseña"
                                    name="password"
                                    onChange={handleInputChange}
                                    type="password"
                                    value={values.password}
                                    placeholder="123456789"
                                />
                            </div>
                            <div className="col-span-6">
                                <Input
                                    label="Recordarme"
                                    name="remember"
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    checked={values.remember}
                                />
                            </div>
                            <div className="col-span-6 flex flex-col items-center gap-4">
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <span>¿Aún no tienes una cuenta? </span>
                                    <LinkItem to={'/register'} className="[&_span]:!justify-center inline-flex">Regístrate</LinkItem>.
                                </p>
                                <Button
                                    action={() => ''}
                                    className="w-full sm:w-auto"
                                    variant="primary"
                                    label="Iniciar Sesión"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};
