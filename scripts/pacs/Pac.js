export const PacHTML = (pac, donors) => {
    return `
        <article class="pacs">
            <section class="pac">
                <header class="pac__name">
                    <h1>${pac.registeredName}</h1>
                </header>
                <div class="pac__info">
                    <div>${pac.address}</div>
                </div>
                <div class="pac__donors">
                    <h2>Donors</h2>
                    <ul>
                    ${
                        donors.map(donor => `<li>${donor.corporation.company} ($${donor.amount})</li>`).join("")
                    }
                    </ul>
                </div>
            </section>
        </article>
    `
}