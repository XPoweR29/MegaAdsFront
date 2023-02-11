import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../../../utils/fix-map-icon';
import './Map.css';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../contexts/search.context';
import {SimpleAdEntity} from 'types';
import { SingleAd } from './SingleAd';
import { apiUrl } from '../../../config/api';

export const Map = () => {
    const {search} = useContext(SearchContext)
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async() => {
            
            const res = await fetch(`${apiUrl}/ad/search/${search}`);
            const data = (await res.json()) as SimpleAdEntity[];

            setAds(data);

        })();
    }, [search]);

    return <>
        <div className="map">
            <MapContainer center={[49.942750, 19.182023]} zoom={20}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />

                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    </>
}