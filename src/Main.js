import { useState, useMemo } from "react";

import Events from "./Events";
import { events as initialEvents } from "./utils";

const Main = () => {
  const [searchCity, setSearchCity] = useState(null);
  const [searchPrice, setSearchPrice] = useState(null);

  const memoizedEvents = useMemo(() => {
    let events = initialEvents;

    if (searchCity) {
      events = events.filter(({ city }) =>
        city.toLowerCase().includes(searchCity)
      );
    }

    if (searchPrice) {
      events = events.filter(({ price }) => price <= searchPrice);
    }

    return events;
  }, [searchCity, searchPrice]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { city, price } = Object.fromEntries(formData);

    setSearchCity(city.toLowerCase());
    setSearchPrice(Number(price));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Enter City" name="city" />
            <input type="text" placeholder="Enter Price" name="price" />
          </div>
          <button type="submit">Submit</button>
          {memoizedEvents.length ? (
            <Events events={memoizedEvents} />
          ) : (
            <p>Sorry;(, results not found.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Main;
