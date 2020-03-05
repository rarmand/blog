// akcje - reprezentowane działania zmiany stanu całej aplikacji
// użyte stąd akcje to jedyny sposób na zmianę czegokolwiek w storze
// umieszczane tu funkcje zwracające AKCJE dla zadanych argumentów (action creators)

export const languageFetched = language => ({
  type: "FETCH_LANGUAGE_SUCCESS",
  language
});
