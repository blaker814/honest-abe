let interests = [];

export const useInterests = () => [...interests];

export const getInterests = () => {
    return fetch("http://localhost:8088/interests")
    .then(response => response.json())
    .then(parsedInterests => interests = parsedInterests)
}