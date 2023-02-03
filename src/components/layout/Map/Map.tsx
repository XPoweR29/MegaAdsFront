import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../../../utils/fix-map-icon';
import './Map.css';

export const Map = () => {
    return <>
        <div className="map">
            <MapContainer center={[49.942750, 19.182023]} zoom={20}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[49.942750, 19.182023]}>
                    <Popup>
                        <h2>Rondo!</h2>
                        <p>Kiedyś się tu rozpierdalały samochody.</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
}