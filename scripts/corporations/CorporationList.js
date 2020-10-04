import { CorporationHTML } from "./Corporation.js"
import { getCorporations, useCorporations } from "./CorporationProvider.js"

export const CorporationList = () => {
    getCorporations()
        .then(() => {
            render(useCorporations())
        })
}

const render = (corporations) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = corporations.map(corporation => CorporationHTML(corporation)).join("")

    contentTarget.innerHTML += `
        <h2>Corporations</h2>
        ${HTMLRep}
    `
}