import React from 'react'
import { Navbar, Button } from 'flowbite-react'

const Navegacion = () => {
    return (
        <>
            <div className='navbar' style={{ backgroundColor: "white !important" }}>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <a href="" className='inline-flex items-center rounded-lg border  py-2 px-4 text-center text-sm font-medium text-gray-400 '>+52 1 311 664 98</a>
                       
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="/navbars"
                            active={true}
                        >
                            Inicio
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Notas
                        </Navbar.Link>
                        <Navbar.Link href="/navbars">
                            Datos
                        </Navbar.Link>

                    </Navbar.Collapse>
                </Navbar>
                <Navbar
                    fluid={true}
                    rounded={true}
                    style={{
                        marginTop: "-10px"
                    }}
                >
                    <Navbar.Brand href="https://flowbite.com/">
                        <div className='ml-5 flex '>
<img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            ceteos
                        </span>
                        </div>
                    
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                       
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border  py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:text-white focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Acceder
                        </a>
                    </div>
                    <div className="w-96 mx-auto">
                        

                            <form>
                                <label for="search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                <div class="relative">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="search" class="block p-4 pl-10 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required="" />
                                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                                </div>
                            </form>

                        
                    </div>

                </Navbar>
            </div>

        </>

    )
}

export default Navegacion
