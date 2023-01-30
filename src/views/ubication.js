import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { googleMapsApiKey } from "../keys";

const containerStyle = {
    width: '50vw',
    height: '50vh'
};

const Ubication = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey
    })

    if (!isLoaded) return null;

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat: 29.05145,
                    lng: -110.9733188
                }}
                zoom={15}
            >

                <MarkerF

                    position={
                        {
                            lat: 29.05145,
                            lng: -110.9733188
                        }
                    }
                />
            </GoogleMap>
        </div>
    )
}

export default Ubication