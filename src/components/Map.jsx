import React, { useContext } from 'react'
import '../App.css';
import { MapContainer, TileLayer, Marker, SVGOverlay } from 'react-leaflet';
import mexicoData from '../data/mexico.json'
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import { AppContext } from '../context/AppContext';


const Map = () => {

  const { setInformacion } = useContext(AppContext);

  console.log(mexicoData)
  
  const iconMarkup = renderToStaticMarkup(
    <i className=" fa fa-map-marker-alt fa-3x" />
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup
  });
  
  const onHandleMarker = () => {
    setInformacion(true);
  };

  return (
    <>     
     <MapContainer center={[19.34508941956005, -99.15325161549731]} zoom={6} scrollWheelZoom={true} >    
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mexicoData.map(mxm => (
          <Marker
         
            icon={customMarkerIcon}
            opacity={1}
            key={mxm.id}

            eventHandlers={{
              click: () => {
                onHandleMarker();
              },
            }}

            position={[mxm.lat, mxm.lng]}>
            Map
          </Marker>
        ))}
         
      </MapContainer>            
    </>
   

  )
}

export default Map
