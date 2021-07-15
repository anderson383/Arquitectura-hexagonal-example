

export const FilteringData = (objectData:any) : string => {
  let complementos:string = ''
  complementos += (complementos.indexOf('?') >= 0) ? '&' : '?'
  for (let clave in objectData) complementos += `${clave}=${encodeURIComponent(objectData[clave])}&`
  return complementos
}
