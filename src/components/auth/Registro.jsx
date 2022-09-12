import React from 'react'
import { Card, Label, TextInput, Checkbox, Button, Avatar, Tooltip } from 'flowbite-react'
import { Navigate, useNavigate } from 'react-router-dom'
const Registro = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
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
                    <div className='border-l-4 border-gray-800 rounded'><p className='ml-3 font-sans text-sm font-medium text-start'>Necesitamos la siguiente informacion para crear tu cuenta</p></div>
                    <form className="grid grid-cols-2 gap-4">
                        <div className='col-span-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="fullname"
                                    value="Nombre"
                                />
                            </div>
                            <TextInput
                                id="fullname"
                                type="text"
                                placeholder="Nombre y Apellido"
                                required={true}
                            />
                        </div>
                        <div className='col-span-2'>
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
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Repite tu Contraseña"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="birthday_date"
                                    value="Fecha de nacimiento"
                                />
                            </div>
                            <Tooltip
                                content="Se solicita para confirmar la edad"
                                placement="bottom"
                            >
                                <TextInput
                                    id="birthday_date"
                                    type="date"
                                    required={true}
                                /> </Tooltip>
                        </div>
                        <div className="col-span-2 gap-2 space-x-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" required={true} >
                                Confirmo ser mayor de edad y cumplr con las normas y reglas del sitio web
                            </Label>
                        </div>
                        <div className='col-span-2'>

                            <button
                                type="button"
                                className="inline-flex w-full my-5 justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                            >
                                Registrarme
                            </button>


                        </div>
                        <div className='mx-auto col-span-2'>
                            <a onClick={handleClick} className='inline-flex items-center cursor-pointer  px-4 text-center text-sm font-medium text-gray-400 '> ¿Ya tienes una cuenta? <br />  Iniciar sesion</a>
                        </div>

                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Registro
