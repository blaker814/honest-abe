import { PacHTML } from "./Pac.js"
import { getPacs, usePacs } from "./PACProvider.js"
import { getCorporationDonations, useCorporationDonations } from "../corporations/CorporateDonationProvider.js"

export const PacList = () => {
    getPacs()
        .then(getCorporationDonations)
        .then(() => {
            render(usePacs(), useCorporationDonations())
        })
}

const render = (pacs, corporateDonations) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = pacs.map(pac => {
        const donations = corporateDonations.filter(cd => cd.pacId === pac.id)
        return PacHTML(pac, donations)
    }).join("")
    
    contentTarget.innerHTML += `
        <h2>Corporate Donations</h2>
        ${HTMLRep}
    `
}