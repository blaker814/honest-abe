let corporations = [];

export const useCorporations = () => [...corporations];

export const getCorporations = () => {
    return fetch("http://localhost:8088/corporations")
    .then(response => response.json())
    .then(parsedCorporations => corporations = parsedCorporations)
}