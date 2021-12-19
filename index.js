'use strict';

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

/**
 * @function timeDifferenceStr
 * Calculate the time between two dates and output the results in a
 * readable manner
 * @param {Date} start 
 * @param {Date} end 
 * @returns {String} readable date
 */
function timeDifferenceStr(start, end) {

  const clamp = (mod, div, pad=2) => {

    let clampedVal = mod
      ? Math.floor((millis%mod)/div)
      : Math.floor((millis/div));
    if (millis > mod) {
      return clampedVal.toString(10).padStart(pad, '0');
    } else if (millis > div) {
      return clampedVal.toString(10);
    } else {
      return false;
    }
  }

  let millis = end.valueOf() - start.valueOf()
  let result = '';

  if (millis >= s) {
    let c;
    result += (c = clamp(Infinity, d, 0)) ? `${c}d ` : '';
    if (millis % d) {
      result += (c = clamp(d, h)) ? `${c}${(millis%h)?':':'h'}` : '';
      if (millis % h) {
        result += (c = clamp(h, m)) ? `${c}${(millis>h)?((millis%m)?':':''):'m '}` : '';
        if (millis % m) {
          result += (c = clamp(m, s)) ? `${c}` : '';
          result += (c = millis%s) ? `.${c}${millis>h?'':'s'}` : (millis>h?'':'s');
        }
      }
    }
  } else {
    result = `${millis}ms`;
  }
  result = result.replace(/\s*$/, '').replace(/ 0/, ' ');
  return result;
}

export default timeDifferenceStr;
