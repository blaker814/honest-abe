let politicianLegislations = [];

export const usePoliticianLegislations = () => [...politicianLegislations];

export const getPoliticianLegislations = () => {
    return fetch("http://localhost:8088/politicianlegislations?_expand=legislation")
    .then(response => response.json())
    .then(parsedPoliticianLegislations => politicianLegislations = parsedPoliticianLegislations)
}