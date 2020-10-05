let corporationInterests = [];

export const useCorporationInterests = () => [...corporationInterests];

export const getCorporationInterests = () => {
    return fetch("http://localhost:8088/corporateinterests")
    .then(response => response.json())
    .then(parsedCorporationInterests => corporationInterests = parsedCorporationInterests)
}