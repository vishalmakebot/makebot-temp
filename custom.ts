/**
 * Makebot blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace Makebot {
    /**
     * @param c is for coloum
     * @param r is for rows 
     * @param t is for Interval time
     */
    //% block="Blink coloum $c row $r Interval time $t"
     //% c.min=0 c.max=4 r.min=0 r.max=4
    //% c.fieldOptions.precision=1 r.fieldOptions.precision=1
    export function Makebot (c: number, r: number, t: number): void {
      let start= game.createSprite(c,r)
      start.setBlink(t)
      start.blink()  
    }

    /**
     * Measure the temperature in degrees C
     * @param pin The pin that the temerature sensor is attached to.
     */
    //% block
    export function tempC(pin: AnalogPin): number {
        let reading = pins.analogReadPin(pin);
    
     let R2 = 100000.0;
        let R25 = 100000.0;
        let B = 4275.0;
        let t0k = 273.15;
        let t0 = t0k + 25;

        let vout = reading * 3.3 / 1023.0;
        let r = (R2 * (3.3 - vout)) / vout;
        let inv_t = 1.0 / t0 + (1.0 / B) * Math.log(r / R25);
        let t = (1.0 / inv_t) - t0k;
        return (Math.round(t));
    }
  
  
  }
