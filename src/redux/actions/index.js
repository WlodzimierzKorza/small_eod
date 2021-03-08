import axios from '../../axios'

export const getItems = (type) => dispatch => {
  axios.get(type).then(res=>{
    console.log(res)
    dispatch({
        type,
        payload:{}
    })
  }).catch(err =>{
      console.log(err)
  })
   
}