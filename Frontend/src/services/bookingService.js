import httpClient from "./http-booking";
class bookingService {
  getBooking(id) {
    return httpClient.get(`/Booking/allBookingsWithOfUsers/${id}`);
  }

  createBooking1(data) {
    return httpClient.post("/Booking/addBooking/", data);
  }

  getPnr(pnr) {
    return httpClient.get(`/Booking/showTicket/${pnr}`);
  }
  test(data) {
    return httpClient.post("/Booking/home", data);
  }
}
export default new bookingService();