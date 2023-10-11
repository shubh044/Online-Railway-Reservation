import http from "./http-train";


const getTrains = (from,to) =>{
  return http.get(`/getTrainByStations/${from}/${to}`);
};

const getAll = () => {
  return http.get("/ViewAllTrain");
};
const get = (id) => {
  return http.get(`/getById/${id}`);
};
const add = data => {
  return http.post("/saveTrain", data);
};
const update = (id, data) => {
  return http.put(`/updateById/${id}`, data);
};
const remove = id => {
  return http.delete(`/delete/${id}`);
};

const findByName = (name) => {
   //console.log(http.get(`/findByTrainName/${name}`));
  return http.get(`/findByTrainName/${name}`);
};


const trainService = {
  getAll,
  get,
  add,
  update,
  remove,
  findByName,
  getTrains
};
export default trainService;



