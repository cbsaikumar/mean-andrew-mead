import request from 'request';

export const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/765d37ddf54c611c004f76abe416b0f2/${latitude},${longitude}`

    request({url, json: true}, (err, {body}) => {
        if(err) callback('Unable to connect to weather service!', undefined);

        else if(body.error) callback('Unable to find location', undefined);

        else{
            callback(undefined, `${body.daily.data[0].summary} And it has ${body.daily.data[0].precipProbability} chance of rain.`)
        }
    })
}