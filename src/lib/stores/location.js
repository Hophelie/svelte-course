import  {readable} from "svelte/store"

const location = readable(null, (set)=>{
    let watchId;
    if(navigator.geolocation && navigator.geolocation.watchPosition){

        // watchposition va venir cherrcher la position du user a chaque changement
        watchId = navigator.geolocation.watchPosition((position)=>{
            const {latitude, longitude} = position.coords
            set({latitude, longitude} )
            console.log(position)
        }, (error)=>{
            set({error})

        })
    }
    return ()=>{
        navigator.geolocation.clearWatch(watchId)
        set(null)
    }
})
export default location