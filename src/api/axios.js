import axios  from "axios";
import {getItem} from  '@/helpers/persistanceStorage'

axios.defaults.baseURL='http://localhost:5054/api/'

axios.interceptors.request.use(config=>{
const token =getItem('accesToken')
const authorizationToken=token ? `Token ${token}` :''
config.headers.Authorization=authorizationToken
return config
})

export default axios