// reducer - funkcja, która przyjmuje stan aplikacji oraz akcję
// na tej podstawie generuje nowy, zaktualizowany stan

export const language = (state = "polish", action) => {
  switch (action.type) {
    case "FETCH_LANGUAGE_SUCCESS":
      return action.language;

    default:
      return state;
  }
};
