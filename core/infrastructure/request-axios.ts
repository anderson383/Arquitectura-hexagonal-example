import {$axios} from "~/utils/api";



export class AxiosRequest {

  constructor () {
    $axios.setToken('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWI1OWI4YmZkYWNlZmMwN2MzNWY4MzdiZGNiODE1OCIsInN1YiI6IjYwZTU5Mzg2Yjc2Y2JiMDA1ZDAwMTNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4c53bKsTuzVovfRfWH-PZV0yNMJSwPKxceUZbbpLBxo', 'Bearer')
  }

  get (endpoint:string, format:string = '$get') : Promise<any> {
    return new Promise((resolve, reject) => {
      $axios.$get(endpoint)
        .then(response => resolve(response))
        .catch((error:any) => reject(error))
    })
  }
  post (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$post(endpoint, data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
  put (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$put(endpoint, data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
  delete (endpoint:string, data:any) {
    return new Promise((resolve, reject) => {
      $axios.$delete(endpoint, data)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}
