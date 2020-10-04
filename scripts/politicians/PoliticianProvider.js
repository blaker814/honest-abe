let politicians = [];

export const usePoliticians = () => [...politicians];

export const getPoliticians = () => {
    return fetch("http://localhost:8088/politicians")
    .then(response => response.json())
    .then(parsedPoliticians => politicians = parsedPoliticians)
}