import React from 'react'
import { Card, Label, TextInput, Checkbox, Button, Avatar } from 'flowbite-react'
import { GiMexico } from 'react-icons/gi'
import {Navigate, useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/register")
    }
    return (
        <div className=' flex items-center justify-center h-screen '>
            <div className="max-w-sm w-96">
                <Card>
                    <img
                        className="mb-3 h-36 w-36 rounded-full shadow-lg mx-auto"
                        src="https://cdn.shopify.com/s/files/1/0016/2008/2803/products/mexico-map_4496274616226_errings_1024x1024@2x.jpg?v=1579726802"
                        alt="mexico map"
                    />
                     <div className='border-l-4 border-gray-500 rounded'><p className='ml-3 font-sans text-sm font-medium text-start'>Ingresa tus datos para iniciar sesion</p></div>
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Correo electronico"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="email@mapsmexico.com"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Contraseña"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                                Recordar mis datos
                            </Label>
                        </div>
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                        >
                            Iniciar sesion
                        </button>
                        <button
                            onClick={handleClick}
                            className="inline-flex w-full justify-center border border-gray-300 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                        >
                           Registrarme
                        </button>
                        <div className='mx-auto'>
                        <a href="" className='inline-flex items-center  py-2 px-4 text-center text-sm font-medium text-gray-400 '>¿Olvidaste tus datos?</a>
                        </div>
                        
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login
