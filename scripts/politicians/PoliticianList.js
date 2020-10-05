import { PoliticianHTML } from "./Politician.js"
import { getPoliticians, usePoliticians } from "./PoliticianProvider.js"
import { getPacDonations, usePacDonations } from "../pacs/PacDonationProvider.js"
import { getPoliticianLegislations, usePoliticianLegislations } from "../legislation/PoliticianLegislationProvider.js"
import { getInterests } from "../legislation/InterestProvider.js"
import { getCorporationInterests, useCorporationInterests } from "../corporations/CorporateInterestProvider.js"

export const PoliticianList = () => {
    getPoliticians()
        .then(getPacDonations)
        .then(getPoliticianLegislations)
        .then(getInterests)
        .then(getCorporationInterests)
        .then(() => {
            render(usePoliticians(), usePoliticianLegislations(), usePacDonations(), useCorporationInterests())
        })
}

const render = (politicians, politicianLegislations, pacDonations, corporationInterests) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = politicians.map(politician => {
        const bills = politicianLegislations.filter(pl => pl.politicianId === politician.id)
        const donations = pacDonations.filter(pd => pd.politicianId === politician.id)
        const sharedInterests = bills.map(bill => {
            return corporationInterests.filter(ci => ci.interestId === bill.legislation.interestId)
        })
        return PoliticianHTML(politician, bills, donations, sharedInterests)
    }).join("")

    contentTarget.innerHTML += `
        <h2>Politicians</h2>
        ${HTMLRep}
    `
}