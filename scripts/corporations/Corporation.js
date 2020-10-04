export const CorporationHTML = (corporation) => {
    return `
        <article class="corporations">
            <section class="corporation">
                <header class="corporation__name">
                    <h1>${corporation.company}</h1>
                </header>
                <div class="corporation__info">
                    <div>Address: ${corporation.address}</div>
                </div>
            </section>
        </article>
    `
}