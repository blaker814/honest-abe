let corporationDonations = [];

export const useCorporationDonations = () => [...corporationDonations];

export const getCorporationDonations = () => {
    return fetch("http://localhost:8088/corporatedonations?_expand=corporation")
    .then(response => response.json())
    .then(parsedCorporationDonations => corporationDonations = parsedCorporationDonations)
}