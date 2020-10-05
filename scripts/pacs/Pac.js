export const PacHTML = (pac, donors) => {
    return `
        <article class="pacs">
            <section class="pac">
                <header class="pac__name">
                    <h3>${pac.registeredName}</h3>
                </header>
                <div class="pac__info">
                    <div>${pac.address}</div>
                </div>
                <div class="pac__donors">
                    <h4>Donors</h4>
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