export const locService = {
    getLocs,
    getPosition,
    setLocs
}
var locs;

function setLocs({ latitude, longitude }) {
    locs = [{ lat: latitude, lng: longitude }]
        // console.log('LOCS', locs);
}

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


function getPosition() {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}