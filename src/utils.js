import eventsJSON from "../events.json";

let events = [];

// recursively get the events form the nested children objects
const getEvents = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i]?.children?.length) {
      getEvents(arr[i].children);
    } else {
      events.push(...arr[i].events);
    }
  }
};

getEvents(eventsJSON?.children);

export { events };
