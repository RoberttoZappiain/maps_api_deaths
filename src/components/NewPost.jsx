import React from 'react'
import { Card, Label, TextInput, Checkbox, Button, Textarea, Select, Tooltip, Radio } from 'flowbite-react'
import {HiOutlineArrowRight} from 'react-icons/hi'

const NewPost = () => {
    return (
        <div class="flex  bg-red-600 ">
            <div class="m-auto ">
                <Card >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Ingresa la informacion para publicar una nueva nota
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Recuerda cumplir con las normas y asegurate de ingresar informacion correcta, mantenemos tus datos en privados y seguros
                    </p>
                    <form className="grid grid-cols-2 gap-4">
                        <div class="max-w-xl col-span-2">
                            <Label
                                htmlFor="mediapost"
                                value="Agrega imagenes o video"
                            />
                            <label
                                class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer mt-3 hover:border-gray-400 focus:outline-none">
                                <span class="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span class="font-medium text-gray-600">
                                        Puedes subir 5 imagenes y un video como limite
                                        <span class="text-blue-600 underline">  browse</span>
                                    </span>
                                </span>
                                <input type="file" name="file_upload" class="hidden" />
                            </label>
                        </div>
                        <div className='col-span-2'>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="titlepost"
                                    value="Titulo de la nota"
                                />
                            </div>
                            <TextInput
                                id="titlepost"
                                type="text"
                                placeholder=""
                                required={true}
                            />
                        </div>
                        <div className='col-span-2'>
                            <Label
                                htmlFor="titledesc"
                                value="Descripcion y narrativa"
                            />
                            <Textarea
                                id="comment"
                                placeholder="Cuentale al mundo que sucedio, no olvides los detalles!"
                                required={true}
                                rows={4}
                            />
                        </div>
                        <div id="select_estado">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="estados"
                                    value="Selecciona el estado"
                                />
                            </div>
                            <Select
                                id="countries"
                                required={true}
                            >
                                <option>
                                    Nayarit
                                </option>
                                <option>
                                    Guadalajara
                                </option>
                                <option>
                                    Monterrey
                                </option>
                                <option>
                                    Germany
                                </option>
                            </Select>
                        </div>
                        <div id="select_munic">
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="municipio"
                                    value="Municipio"
                                />
                            </div>
                            <Select
                                id="countries"
                                required={true}
                            >
                                <option>
                                    Tepic
                                </option>
                                <option>
                                    Compostela
                                </option>
                                <option>
                                    Xalisco
                                </option>
                                <option>
                                    Germany
                                </option>
                            </Select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="post_date"
                                    value="¿Cuando sucedio?"
                                />
                            </div>
                            <TextInput
                                id="post_date"
                                type="date"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="post_date"
                                    value="Hora del incidente"
                                />
                            </div>
                            <TextInput
                                id="post_date"
                                type="time"
                                required={true}
                            />
                        </div>
                        <div className='col-span-1'>
                      
                        <fieldset
                            className="flex flex-col gap-4"
                            id="radio_GD"
                        >
                            <legend>
                                Grupo delincuencial involucrado
                            </legend>
                            <div className="flex items-center gap-2 mt-3">
                                <Radio
                                    id="cartel_sinaloa1"
                                    name="countries"
                                    value="USA"
                                    defaultChecked={true}

                                />
                                <Label htmlFor="united-state">
                                    Cartel de sinaloa faccion mayo zambada
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="germany"
                                    name="countries"
                                    value="Germany"
                                />
                                <Label htmlFor="germany">
                                    Cartel de sinaloa faccion chapo guzman
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="spain"
                                    name="countries"
                                    value="Spain"
                                />
                                <Label htmlFor="spain">
                                    Cartel jalisco nueva generacion
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="uk"
                                    name="countries"
                                    value="United Kingdom"
                                />
                                <Label htmlFor="uk">
                                    Cartel arellano felix
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="china"
                                    name="countries"
                                    value="China"
                                />
                                <Label
                                    htmlFor="china"
                                >
                                    Cartel del golfo
                                </Label>
                            </div>
                        </fieldset>
                        </div>
                        <div className='col-span-1 mt-5'>
                      
                        <fieldset
                            className="flex flex-col gap-4"
                            id="radio_GD"
                        >
                            
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="cartel_sinaloa1"
                                    name="countries"
                                    value="USA"
                                    defaultChecked={true}

                                />
                                <Label htmlFor="united-state">
                                    Cartel de sinaloa faccion mayo zambada
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="germany"
                                    name="countries"
                                    value="Germany"
                                />
                                <Label htmlFor="germany">
                                    Cartel de sinaloa faccion chapo guzman
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="spain"
                                    name="countries"
                                    value="Spain"
                                />
                                <Label htmlFor="spain">
                                    Cartel jalisco nueva generacion
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="uk"
                                    name="countries"
                                    value="United Kingdom"
                                />
                                <Label htmlFor="uk">
                                    Cartel arellano felix
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    id="china"
                                    name="countries"
                                    value="China"
                                />
                                <Label
                                    htmlFor="china"
                                >
                                    Cartel del golfo
                                </Label>
                            </div>
                        </fieldset>
                        </div>
                        <div className='col-span-2 grid justify-items-end'>
                        <Button type="submit" size="xl" color="dark" >
                           Publicar
                           <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        </div>
                       
                    </form>
                </Card>
            </div>
        </div>

    )
}

export default NewPost
