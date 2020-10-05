import { useInterests } from "../legislation/InterestProvider.js"
import { useCorporationDonations } from "../corporations/CorporateDonationProvider.js"

export const PoliticianHTML = (politician, bills, donors, corporationInterests) => {

    return `
        <article class="politicians">
            <section class="politician">
                <header class="politician__name">
                    <h3>${politician.name.first} ${politician.name.last}</h3>
                </header>
                <div class="politician__info">
                    <div>Age: ${politician.age}</div>
                    <div>Represents: ${politician.district}</div>
                </div>
                <div class="politician__bills">
                    <h4>Sponsored Bills</h4>
                    <div>
                    ${
                        bills.map(bill => {
                            const interest = useInterests().find(interest => interest.id === bill.legislation.interestId)
                            return `<p>${bill.legislation.name} (Interest: ${interest.about})</p>`
                        }).join("")
                    }
                    </div>
                </div>
                <div class="politician__funders">
                    <h4>Related PACs</h4>
                    <ul>
                    ${
                        donors.map(donor => `<li>${donor.pac.registeredName} ($${donor.amount})</li>`).join("")
                    }
                    </ul>
                </div>
                <div class="politician__influencers">
                    <h4>Influencing Corporations</h4>
                    <ul>
                    ${
                        corporationInterests.map(corporations => {
                            return corporations.map(corporation => {
                                const company = useCorporationDonations().find(cd => corporation.corporationId === cd.corporationId)
                                return donors.map(donor => {
                                    if (company.pacId === donor.pacId) {
                                        return `<li>${company.corporation.company}</li>`
                                    }
                                }).join("")
                            }).join("")
                        }).join("")
                    }
                    </ul>
                </div>
            </section>
        </article>
    `
}