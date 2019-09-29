import { forecast } from './forecast';
import { geocode } from './geocode';
import chalk from 'chalk';

debugger

const address = process.argv[2];
if(!address) {
    console.log(chalk.bgRed('Please try with location string!'))
} else{
    geocode(address, (err, data) => {
        if(err) return console.log(chalk.bgRed(err));
    
        forecast(data.latitude, data.longitude, (err, forecastData)=> {
            if(err) return console.log(chalk.bgRed(err));
        
            console.log(`Weather forcast for ${chalk.bgGreen(data.location)} is ${forecastData}`);
        });
    })    
}