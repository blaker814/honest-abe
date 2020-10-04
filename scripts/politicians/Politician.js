export const PoliticianHTML = (politician, donors) => {
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
                <div class="pac__donations">
                    <h4>PAC Donations</h4>
                    <ul>
                    ${
                        donors.map(donor => `<li>${donor.pac.registeredName} ($${donor.amount})</li>`).join("")
                    }
                    </ul>
                </div>
            </section>
        </article>
    `
}