import { PoliticianHTML } from "./Politician.js"
import { getPoliticians, usePoliticians } from "./PoliticianProvider.js"

export const PoliticianList = () => {
    getPoliticians()
        .then(() => {
            render(usePoliticians())
        })
}

const render = (politicians) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = politicians.map(politician => PoliticianHTML(politician)).join("")

    contentTarget.innerHTML = `
        <h2>Politicians</h2>
        ${HTMLRep}
    `
}