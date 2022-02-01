import axios, { AxiosError } from 'axios';

async function check() {
    const dateStr = (new Date()).toISOString();
    let resStr;
    try {
        //const res = await axios.get('https://faro.websharecloud.com/sdgasgd');
        const res = await axios.get('https://ipv4.icanhazip.com/');
        resStr = 'OK - ' + (res.data as string).trim();
    } catch (e0) {
        const e = e0 as AxiosError;
        resStr = 'ERROR - ' + e.code + ' ' + e.response?.status + ' ' + e.message;
    }
    console.log(dateStr + ' ' + resStr);
}


setInterval(check, 1000);
