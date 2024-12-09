import { EventSource } from "eventsource";

const es = new EventSource("http://myurl.com/");

es.addEventListener("my-listener", (message) => {
  // this should error because string and MessageEvent are not compatible
  // but it doesn't because ts isn't finding the underlying type for MessageEvent
  //@ts-expect-error
  const data: string = message;
});
