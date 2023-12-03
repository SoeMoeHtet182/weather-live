import styles from './rain.module.css';
import { useEffect } from 'react';

export default function Rain() {

    const makeItRain = (styles: any) => {
        //clear out everything
        const rainFrontRow = document.querySelector('.rain.front-row');
        const rainBackRow = document.querySelector('.rain.back-row');
        
        if(rainFrontRow !== null) {
            rainFrontRow.innerHTML = '';
        }
        if(rainBackRow !== null) {
            rainBackRow.innerHTML = '';
        }
      
        var increment = 0;
        var drops = "";
        var backDrops = "";
      
        while (increment < 100) {
            //couple random numbers to use for various randomizations
            //random number between 98 and 1
            var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            //random number between 5 and 2
            var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
            //increment
            increment += randoFiver;
        
            // Create drop element
            const drop = document.createElement('div');
            drop.className = styles.drop;
            drop.style.left = `${increment}%`;
            drop.style.bottom = `${randoFiver + randoFiver - 1 + 100}%`;
            drop.style.animationDelay = `0.${randoHundo}s`;
            drop.style.animationDuration = `0.5${randoHundo}s`;
        
            // Create stem element
            const stem = document.createElement('div');
            stem.className = styles.stem;
            stem.style.animationDelay = `0.${randoHundo}s`;
            stem.style.animationDuration = `0.5${randoHundo}s`;
        
            // Create splat element
            const splat = document.createElement('div');
            splat.className = styles.splat;
            splat.style.animationDelay = `0.${randoHundo}s`;
            splat.style.animationDuration = `0.5${randoHundo}s`;
        
            // Append stem and splat to drop
            drop.appendChild(stem);
            drop.appendChild(splat);
        
            // Append drop to front row or back row
            rainFrontRow?.append(drop);
            rainBackRow?.append(backDrops);
        }
    };
    
    useEffect(() => {
        makeItRain(styles);
    }, []);

    return (
        <div>
            <div className={`${styles.rain} rain front-row`}></div>
            <div className={`${styles.rain} ${styles['back-row']} rain back-row`}></div>
        </div>
    );
}