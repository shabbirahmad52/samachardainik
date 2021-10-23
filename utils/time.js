import { useState, useEffect, useMemo, useRef } from 'react'

export function useNepaliTime() {
    var nums = {
        0: '०',
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७­',
        8: '८',
        9: '९'
    };
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        ;
        return i;
    }

    function convertToNepali(strNum) {

        var arrNumNe = strNum.toString().split('').map(function (ch) {
            if (ch === '.' || ch === ',') {
                return ch;
            }
            return nums[Number(ch)];
        });
        return arrNumNe.join('');
    }
    const id = useRef(null);

    const [today, setToday] = useState(new Date());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = convertToNepali(h);
    m = convertToNepali(m);
    s = convertToNepali(s);
    let unmemorizedTime = h + " : " + m + " : " + s;
    const time = useMemo(() => unmemorizedTime, [today]);
    useEffect(() => {
        id.current = setInterval(setToday(new Date()), 1000);
        return () => {
            clearInterval(id.current); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);
    // document.getElementById('live-time').innerHTML =
    return {
        time
    }

}


