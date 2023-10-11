function PassengerCard(props) {
  return (
    <div>
      <table class="ui four column table">
        <tbody>
          <tr>
            <td class="collapsing">
              <i class="user icon"></i> {props.passengerData.name}
            </td>
            <td>{props.passengerData.age}</td>
            <td>{props.passengerData.gender}</td>
            <td>{props.passengerData.seatNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PassengerCard;
