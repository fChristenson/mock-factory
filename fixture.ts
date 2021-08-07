import { createFactory } from "./mockFactory";

export interface MyData {
  name: string;
  age: number;
  createdAt: Date;
  friends: { name: string }[];
}

export const myMockData: MyData = {
  name: "foobar",
  age: 21,
  createdAt: new Date(),
  friends: [{ name: "John" }, { name: "Jane" }],
};

export const mockDataFactory = createFactory(myMockData);
