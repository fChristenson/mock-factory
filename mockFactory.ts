import merge from "lodash/merge";

export function createFactory<T>(data: T) {
  return (...args: Partial<T>[]): T => {
    return merge({}, data, ...args);
  };
}
