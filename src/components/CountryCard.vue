<template>
    <div className="card-container">
        <div className="card-image"><img src="https://flagcdn.com/w320/us.png" /></div>
        <div className="card-info">
            <h3>United States of America</h3>
            <p><span className="highlight">Population:</span> 323,947,000</p>
            <p><span className="highlight">Region:</span> Americas</p>
            <p><span className="highlight">Capital:</span> Washington D.C</p>
        </div>
    </div>
</template>

<style lang="scss">
.card-container {
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
}

.card-image {
    position: relative;

    img {
        border-radius: 5px 5px 0 0;
        width: 100%;
    }
}

.card-info {
    padding: 20px;
}
</style>