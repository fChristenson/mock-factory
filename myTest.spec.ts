import { mockDataFactory, MyData, myMockData } from "./fixture";

function myFunc(data: MyData) {
  if (data.age < 21) return "No drinks for you";
  return "Don't die";
}

describe("My test", () => {
  it("should return correct message for age === 21", () => {
    const data = { ...myMockData, age: 21 };
    expect(myFunc(data)).toEqual("Don't die");
  });

  it("should return correct message for age > 21", () => {
    const data = { ...myMockData, age: 31 };
    expect(myFunc(data)).toEqual("Don't die");
  });

  it("should return correct message for age < 21", () => {
    const data = { ...myMockData, age: 11 };
    expect(myFunc(data)).toEqual("No drinks for you");
  });

  describe("Factory example", () => {
    it("should return correct data with update", () => {
      const updatedData = mockDataFactory({ name: "test" });
      const tmp = { ...myMockData };
      expect(updatedData.name).toEqual("test");

      tmp.name = "foo";
      updatedData.name = "foo";
      expect(tmp).toEqual(updatedData);
    });

    it("should return correct data with update", () => {
      const updatedData = mockDataFactory({ name: "test" }, { age: 31 });
      expect(updatedData.name).toEqual("test");
      expect(updatedData.age).toEqual(31);
    });

    it("should return correct data with array update", () => {
      const updatedData = mockDataFactory({
        friends: [
          myMockData.friends[0],
          { name: "Jannet" },
          { name: "Foobar" },
        ],
      });

      expect(updatedData.friends[0]).toEqual(myMockData.friends[0]);
      expect(updatedData.friends[1]).toEqual({ name: "Jannet" });
      expect(updatedData.friends[2]).toEqual({ name: "Foobar" });
    });
  });

  describe("with factory", () => {
    it("should return correct message for age === 21", () => {
      expect(myFunc(mockDataFactory({ age: 21 }))).toEqual("Don't die");
    });

    it("should return correct message for age > 21", () => {
      expect(myFunc(mockDataFactory({ age: 31 }))).toEqual("Don't die");
    });

    it("should return correct message for age < 21", () => {
      expect(myFunc(mockDataFactory({ age: 11 }))).toEqual("No drinks for you");
    });
  });
});
