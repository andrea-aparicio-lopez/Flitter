import { RouteLocation } from "vue-router";

const haveAuthGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    console.log(to, from, next)
    
    const accessToken = localStorage.getItem('accessToken')

    if(accessToken) {
        next()
    }else {
        next({name: 'home'})
    }
}

export default haveAuthGuard;