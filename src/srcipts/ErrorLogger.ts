export function ErrorLogger(from: string | string[], error: string | string[]) {
  let stringBuilder: string = "[sunstrider] > ";

  if (typeof from === "string") {
    stringBuilder += `[${from}]`;
  } else {
    for (let i = 0; i < from.length; i++) {
      stringBuilder += `[${from[i]}]`;
    }
  }

  if (typeof error === "string") {
    stringBuilder += ` > error:{${error}}`;
  } else {
    stringBuilder += " > error:{";
    for (let i = 0; i < error.length; i++) {
      stringBuilder += `${error[i]}`;
      if (i !== error.length - 1) {
        stringBuilder += ", ";
      }
    }
    stringBuilder += "}";
  }

  throw new Error(stringBuilder);
}
