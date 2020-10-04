let pacs = [];

export const usePacs = () => [...pacs];

export const getPacs = () => {
    return fetch("http://localhost:8088/pacs")
    .then(response => response.json())
    .then(parsedPacs => pacs = parsedPacs)
}