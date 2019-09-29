import request from 'request';

export const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY2JzYWlrdW1hciIsImEiOiJjazE1NGR0NmEwbjZkM2VycW81dXdrdWo4In0.hpDMjFbOMCrQVQ68qAKeIw&limit=1`

    request({url, json: true}, (err, {body} = {}) => {
        if(err) callback('Unable to connect to weather service!', undefined);

        else if(body.features.length === 0) callback('Unable to find location Try another search!', undefined);

        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}