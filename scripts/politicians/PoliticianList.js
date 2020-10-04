import { PoliticianHTML } from "./Politician.js"
import { getPoliticians, usePoliticians } from "./PoliticianProvider.js"
import { getPacDonations, usePacDonations } from "../pacs/PacDonationProvider.js"

export const PoliticianList = () => {
    getPoliticians()
        .then(getPacDonations)
        .then(() => {
            render(usePoliticians(), usePacDonations())
        })
}

const render = (politicians, pacDonations) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = politicians.map(politician => {
        const donations = pacDonations.filter(pd => pd.politicianId === politician.id)
        return PoliticianHTML(politician, donations)
    }).join("")

    contentTarget.innerHTML += `
        <h2>Politicians</h2>
        ${HTMLRep}
    `
}