<template>
    <div className='details-header'>
        <button className="back">
            Back
        </button>
    </div>
    <div className="details">
        <div className="details-img">
            <img src="https://flagcdn.com/w320/us.png" />
        </div>
        <div className="details-content">
            <h3>United States of America</h3>
            <div className="content">
                <section>
                    <p><span className="highlight">Native Name:</span> United States</p>
                    <p><span className="highlight">Population:</span> 323,947,000</p>
                    <p><span className="highlight">Region:</span> Americas</p>
                    <p><span className="highlight">Sub Region:</span> Northern America</p>
                    <p><span className="highlight">Capital:</span> Washington D.C</p>
                </section>
                <section>
                    <p><span className="highlight">Top Level Domain:</span> .us</p>
                    <p><span className="highlight">Currencies:</span> USD</p>
                    <p><span className="highlight">Languages:</span> en</p>
                </section>
            </div>

            <div className="borders">
                <section>
                    <h3>Border Countries:</h3>
                    <!-- List of buttons -->
                    <button>Mexico</button>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.details-header {
    margin-bottom: 40px;
}

.back {
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
}

.details {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 900px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.details-img img {
    width: 100%;

    @media screen and (min-width: 900px) {
        width: 75%;
    }
}

.details-img,
.details-content {
    @media screen and (min-width: 900px) {
        width: 50%;
    }
}

.details-content {
    margin-top: 50px;

    section {
        margin-bottom: 50px;

        @media screen and (min-width: 900px) {
            margin-bottom: 0;
            margin-right: 60px;
        }
    }

    .content {
        @media screen and (min-width: 900px) {
            display: flex;
        }
    }
}
</style>