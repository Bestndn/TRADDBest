
// react
import React from 'react';


// openlayers
import GeoJSON from 'ol/format/GeoJSON'
import Feature from 'ol/Feature';

// components
import MapWrapper from '../MapWrapper'

function Mymap() {
    const stylelable = {
        width: '50%',
        overflow: 'auto',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        background: 'white',
        pointerEvents: 'none'
    }

    return (
        <div style={{ textAlign: 'center', height: '100%', width: '100%', display: "flex" }}>

            {/* <div style={stylelable}>
                <p>React Functional Components with OpenLayers Example</p>
                <p>Click the map to reveal location coordinate via React State</p>
            </div> */}
            
            <MapWrapper features height={"auto"} />
            
        </div>
    )
}

export default Mymap
