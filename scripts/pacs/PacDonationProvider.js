let pacDonations = [];

export const usePacDonations = () => [...pacDonations];

export const getPacDonations = () => {
    return fetch("http://localhost:8088/pacdonations?_expand=pac")
    .then(response => response.json())
    .then(parsedPacDonations => pacDonations = parsedPacDonations)
}