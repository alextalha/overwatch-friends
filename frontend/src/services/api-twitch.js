import axios from 'axios';



export async function getStreamers() {
   
    console.log('getStreamers');

    axios.defaults.headers.common['Client-ID'] = process.env.TWITCH_ID_CLIENT

    console.log('....',process.env.TWITCH_ID_CLIENT)
    let {info} = await axios.get('https://api.twitch.tv/helix/streams?first=10')

    console.log(info)


}

export default { getStreamers };