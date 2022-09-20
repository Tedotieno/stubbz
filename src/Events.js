const Event = ({ id, city, name, price }) => (
  <p>
    {name} {city} {price}
  </p>
);

const Events = ({ events }) => {
  return events.map(({ id, ...rest }) => <Event key={id} {...rest} />);
};

export default Events;
