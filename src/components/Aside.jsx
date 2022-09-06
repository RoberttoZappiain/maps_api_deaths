import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { GrClear } from 'react-icons/gr'
import { FaSkullCrossbones } from 'react-icons/fa'
import { GiMexico } from 'react-icons/gi'
import { Sidebar, Button, Badge } from 'flowbite-react';
import { BsExclamationCircleFill } from 'react-icons/bs'
import mexicoData from '../data/mexico.json'

const Aside = () => {
  const mystyle = {
    borderTop: "1px",
    borderColor: "#194D33"
  };
  return (
    <div className="w-fit mt-3 containers">
      <Sidebar aria-label="Sidebar with multi-level dropdown example "
      >
        <Sidebar.Items >
          <Sidebar.ItemGroup>

            <Sidebar.Item href="" icon={GiMexico}>
              <span className="text-sm font-sans text-semibold mb-3 mt-5 text-gray-900  ">Filtrar por</span>
            </Sidebar.Item>

            <Sidebar.Collapse
              label="Estado"
            >
              {mexicoData.map(mxm => (
                <Sidebar.Item href="#" >
                  {mxm.label}
                </Sidebar.Item>
              ))}


            </Sidebar.Collapse>

            <Sidebar.Collapse
              label="Municipio"
            >
              <Sidebar.Item
                href="#"
              >
                Municipio
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse
              label="Delegacion"
            >
              <Sidebar.Item
                href="#"
              >
                Delegacion
              </Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item
            >
              <p className='text-sm font-sans text-semibold mb-5 mt-5 text-gray-900'>Grupo delincuencial</p>
              <div className="flex flex-wrap justify-around  gap-2">
                <Badge
                  href="#"
                  color="info"
                  size="sm"
                >
                  Default
                </Badge>
                <Badge
                  href="#"
                  color="gray"
                  size="sm"
                >
                  Dark
                </Badge>
                <Badge
                  href="#"
                  color="info"
                  size="sm"
                >
                  Default
                </Badge>
              </div>
            </Sidebar.Item>
            <Sidebar.Item
            >
              <div class="flex justify-between">
                <div class=""><Button size="sm" color="light" >
                  <GrClear className=" h-5 w-5 bg-white" />
                </Button></div>
                <div class=""><Button size="sm" color="dark" >
                  Aplicar
                  <HiOutlineArrowRight className="ml-2 h-3 w-3" />
                </Button>
                </div>

              </div>

            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup
            style={mystyle}
          >
            <Sidebar.Item
              icon={FaSkullCrossbones}
            >
              <span className='text-sm font-sans text-semibold mb-3 mt-5 text-left text-gray-900'>Estadisitcas Generales</span>

            </Sidebar.Item>
            <Sidebar.Item
              href="#"

            >
              <Button label="2" color="warning" size="xs" disabled={true} style={{ margin: "5px", color: 'black' }}>
                Muertes Semanales
              </Button>
              <Button label="2" color="dark" size="xs" disabled={true} style={{ margin: "5px", marginTop: "15px", color: 'white' }}>
                Muertes Anuales
              </Button>
              <Button label="2" color="failure" size="xs" disabled={true} style={{ margin: "5px", marginTop: "15px", color: 'black' }}>
                Total de Victimas
              </Button>
            </Sidebar.Item>

          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <Sidebar.CTA>
          <div className='bg-gray-300 rounded-lg p-3 mb-5'>
            <div className="mb-3 flex items-center">
              <Badge color="failure" icon={BsExclamationCircleFill}>
                Importante
              </Badge>
              <button
                aria-label="Close"
                className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-200 p-1 text-red-600 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                type="button"
              >
                <svg
                  aria-hidden={true}
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-justify text-gray-600 dark:text-blue-400 ">
              Queremos felicitar a las drogas por haber ganado la guerra contra las drogas.        </p>
            <a
              className="text-sm text-gray-600 text-center underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              href="#"
            >
              Vice. 2021
            </a>
          </div>

        </Sidebar.CTA>
      </Sidebar>
    </div>
  )
}

export default Aside
