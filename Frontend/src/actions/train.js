import {
  ADD_TRAIN,
  RETRIEVE_TRAIN,
  UPDATE_TRAIN,
  DELETE_TRAIN
} from "./types";
import trainService from "../services/trainService";

export const addTrain = (request) => {
return function (dispatch){
  return trainService.add(request).then((res)=>{
   // console.log(res);
    dispatch({
    type: ADD_TRAIN,
    payload: ""
    })
  })
}
}

export const updateTrain = (request,id) => {
return function (dispatch){
  return trainService.update(request,id).then((res)=>{
   // console.log(res);
    dispatch({
    type: UPDATE_TRAIN,
    payload: ""
    })
  })
}
}
export const deleteTrain = (id) => {
return function (dispatch){
  return trainService.remove(id).then((res)=>{
   console.log(res);
    dispatch({
    type: DELETE_TRAIN,
    payload: {id}
    })
  })
}
}





export const retrieveTrain = () => async (dispatch) => {
  try {
    const res = await trainService.getAll();
    
    dispatch({
      type: RETRIEVE_TRAIN,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const deleteTrain = (id) => async (dispatch) => {
//   try {
//     await trainService.remove(id);
//     dispatch({
//       type: DELETE_TRAIN,
//       payload: { id },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const findByTrainName = (name) => async (dispatch) => {
  try {
    const res = await trainService.findByTrainName(name);
    dispatch({
      type: RETRIEVE_TRAIN,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchByStation = (from,to) => async(dispatch) => {
  try{
      const res = await trainService.getTrains(from,to);
      dispatch({
          type: RETRIEVE_TRAIN,
          payload: res.data,
      });
  } catch (error){ 
      console.log(error);
  }
}