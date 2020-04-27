import { normalize, parse } from "uri-js";

export function breakdownURIPath(uri: string): string[] {
  const normalized = normalize(uri);
  const { path } = parse(normalized);

  if (path === "" || !path) {
    return [];
  }

  return path
    .split("/")
    .reduce(
      (accumulator, value, currentIndex, originalArray) => [
        ...accumulator,
        `${
          // Is there anything in the accumulator?
          accumulator.length != 0
            ? // If so, get the last item from it
              accumulator[accumulator.length - 1]
            : // If not, add an empty string
              ""
        }${
          // Add the current value from the split path
          value
        }${
          // Is there more left in the split path?
          currentIndex != originalArray.length - 1
            ? // If so, add a trailing slash
              "/"
            : // If not, add nothing
              ""
        }`,
      ],
      [] as string[]
    )
    .filter((element, index, self) => index == self.indexOf(element));
}
