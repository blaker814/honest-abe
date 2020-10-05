export const CorporationHTML = (corporation) => {
    return `
        <article class="corporations">
            <section class="corporation">
                <header class="corporation__name">
                    <h3>${corporation.company}</h3>
                </header>
                <div class="corporation__info">
                    <div>Address: ${corporation.address}</div>
                </div>
            </section>
        </article>
    `
}