'use client';

import { useEffect, useState } from 'react';
import { lobster, montserrat } from '@/app/fonts/fonts';
import styles from './style.module.css';
import Sun from '@/app/ui/components/Sun/Sun';
import Cloud from '@/app/ui/components/Cloud/Cloud';
import Rain from '@/app/ui/components/Rain/Rain';
import { SiWindicss } from "react-icons/si";
import { TiArrowUp, TiArrowDown, TiLocationArrowOutline } from "react-icons/ti";
import { FiSunrise, FiSunset } from "react-icons/fi";
import Image from 'next/image';

export default function HomePage() {
    const [ city, setCity ] = useState('');
    const [ countryCode, setCountryCode ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ isBindData, setIsBindData ] = useState(false);
    const [ mainWeather, setMainWeather ] = useState('');
    const [ showMore, setShowMore ] = useState(false);
    const [ weather, setWeather ] = useState('');
    const [ windSpeed, setWindSpeed ] = useState('');
    const [ windDirection, setWindDirection ] = useState('');
    const [ humidity, setHumidity ] = useState('');
    const [ temp, setTemp ] = useState('');
    const [sunriseTime, setSunriseTime] = useState('');
    const [sunsetTime, setSunsetTime] = useState('');
  
    const convertUnixTimestampToTimeString = (timestamp: number) => {
        const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
        return date.toLocaleTimeString('my-MM', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
      };

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const newCity = (event.target as HTMLInputElement).value;
            setCity(newCity);
        }
    };

    useEffect(() => {
        const getWeatherDetail = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ec6b5d5a0b4e9b6ccc31be756fb14ce&units=metric`);
            const data = await res.json();
            if(!data) return;
            
            setMainWeather(data.weather[0]['main']);
            setCountryCode(data.sys.country);
            setTemp(data.main.temp);
            setWindSpeed(data.wind.speed);
            setWindDirection(data.wind.deg);
            setHumidity(data.main.humidity);
            setWeather(data.weather[0]['description']);
            setSunriseTime(convertUnixTimestampToTimeString(data.sys.sunrise));
            setSunsetTime(convertUnixTimestampToTimeString(data.sys.sunset));
        }

        if (city !== '') {
            getWeatherDetail();
        }
    }, [city]); // Added getWeatherDetail to the dependency array
    
    useEffect(() => {
        const getCountry = async () => {
            const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const countryData = await countryRes.json();
            setCountry(countryData[0]?.name?.common);
            
            setIsBindData(true);
        }

        if (countryCode !== '') {
            getCountry();
        }
    }, [countryCode]); // Added getCountry to the dependency array
    

    return (
        <section className='overflow-hidden relative'>
            <div style={{ height: '19vh' }}>
                <h1 className={[styles['page-title'], lobster.className].join(' ')}>Grab Your Clouds</h1>
            </div>
            <div className='flex justify-center' style={{ height: '6vh' }}>
                <input type="text" placeholder='Enter the name of city' className={styles['form-control']}
                    style={{zIndex: 10}}
                    onKeyUp={handleSubmit} />
            </div>
            <div style={{ height: '75vh' }}>
                
                { mainWeather == 'Clear' && <Sun /> }
                { mainWeather == 'Clouds' && 
                    <div>
                        <Cloud />
                        <Sun/>
                        <Cloud />
                    </div>
                }
                
                { mainWeather == 'Rain' || mainWeather == 'Drizzle' || mainWeather == 'Thunderstorm' && <Rain />}
                
                { isBindData && 
                    <div className={styles['main-info-page']}>
                        <div className='flex flex-col items-center'>
                            <h1 className={[styles['info-text'], "text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight", montserrat.className].join(' ')}>{temp}°C</h1>
                            <p className={[styles['info-text'], 'capitalize'].join(' ')}>{weather}</p>
                            <p className={[styles['info-text'], 'capitalize text-xl'].join(' ')}>{city}, {country}</p>
                            <div className='flex w-max'>
                                <div className='flex me-0 sm:me-5 items-center sm:items-start'>
                                    <img src="/humidity.svg" alt="Humidity Icon" className={styles['icon']} />
                                    <p className={[styles['weather-text'], 'ms-3'].join(' ')}>{humidity}% <br /> Humidity</p>
                                </div>
                                <div className='flex ms-3 sm:ms-5 items-center sm:items-start'>
                                    <SiWindicss className={styles['wind']} style={{color: 'white'}}/>
                                    <p className={[styles['weather-text'], 'ms-3'].join(' ')}>{windSpeed} m/s <br />Wind Speed</p>
                                </div>
                            </div>
                            { showMore && 
                                <div className="flex my-5 flex-col sm:flex-row">
                                    <div className='flex items-center'>
                                        <TiLocationArrowOutline style={{ width: '40px', height: '40px', color: 'white' }}/>
                                        <p className={styles['info-text']} style={{margin: 0}}>{windDirection}° <br /> Wind Direction</p>
                                    </div>
                                    <div className={styles['info-more-text-box']}>
                                        <FiSunrise style={{ width: '40px', height: '40px', color: 'white' }}/>
                                        <p className={styles['info-text']} style={{margin: 0, marginLeft: '16px'}}>{sunriseTime} <br /> Sunrise</p>
                                    </div>
                                    <div className={styles['info-more-text-box']}>
                                        <FiSunset style={{ width: '40px', height: '40px', color: 'white' }}/>
                                        <p className={styles['info-text']} style={{margin: 0, marginLeft: '16px'}}>{sunsetTime} <br /> Sunset</p>
                                    </div>
                                </div>
                            }
                            <p
                                onClick={() => setShowMore(!showMore)}
                                className={[
                                    styles['info-text'],
                                    'flex items-center',
                                    !showMore ? 'mt-5' : 'mt-0 sm:mt-5', // Conditionally set margin classes
                                    'cursor-pointer'
                                ].join(' ')}
                                >
                                { !showMore ? 'Show More' : 'Show Less' } { !showMore ? <TiArrowDown/> : <TiArrowUp/> }
                                </p>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}