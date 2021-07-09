import { get } from "@u/http"
import { LOADDATA } from "./actionType"

const loadDataSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

const loadDataAsync = () => {
  return async dispatch => {
    let result = await get({
      url: 'api/list'
    })
    dispatch(loadDataSync(result.data.data))
  }
}

export {
  loadDataAsync,
  loadDataSync
}