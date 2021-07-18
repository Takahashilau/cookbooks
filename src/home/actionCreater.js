import { CHANGESWITCH } from "./actionTypes"

const changeSwitch = (checked) => {
  return {
    type: CHANGESWITCH,
    checked
  }
}


const actionCreater = {
  changeSwitch
}
export default actionCreater