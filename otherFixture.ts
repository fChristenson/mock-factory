import { mockDataFactory } from "./fixture";
import { createFactory } from "./mockFactory";

export const someOtherData = {
  name: "foobar",
  myData: mockDataFactory(),
};

export const someOtherDataFactory = createFactory(someOtherData);
