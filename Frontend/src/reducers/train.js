import {
  ADD_TRAIN,
  RETRIEVE_TRAIN,
  UPDATE_TRAIN,
  DELETE_TRAIN
} from "../actions/types";
const initialState = {
  trains: [{
    train_id: 123456,
    total_Seat_sleeper: 100,
    total_Seat_ac3: 76,
    total_Seat_ac2: 50,
    total_Seat_ac1: 42,
    train_name: 'Duranto',
    from_station: 'Kolkata',
    to_station: 'Patna'
  }],
  isDeleteResponse: false
};



function trainReducer(trains = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRAIN:
      return [...trains, payload];
    case RETRIEVE_TRAIN:
     return { trains: payload};
    case UPDATE_TRAIN:
      return trains.map((train) => {
        if (train.id === payload.id) {
          return {
            ...train,
            ...payload,
          };
        } else {
          return train;
        }
      });
    case DELETE_TRAIN:
      return trains.filter(({ id }) => id !== payload.id)
   
    default:
      return trains;
  }
};
export default trainReducer;
