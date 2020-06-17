console.log('Main!');

import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'


window.onload = () => {
    locService.getPosition()
        .then(pos => {
            locService.setLocs(pos.coords)
                // console.log('User position is:', pos.coords);
        })
        .catch(err => {
            console.log('err!!!', err);
        })
    locService.getLocs()
        .then(locs => mapService.initMap(locs.lat, locs.lng))
        .then(() => {
            locService.getLocs()
                .then(locs => mapService.addMarker(locs))
                .then(marker => console.log('marker:', marker))
        })
        .catch(console.log('INIT MAP ERROR'));

}

document.querySelector('.my-location').addEventListener('click', (ev) => {
    console.log('Aha!', ev.target);
    mapService.panTo(locService.getLocs()
        .then(locs => Promise.resolve(locs))
    )
})