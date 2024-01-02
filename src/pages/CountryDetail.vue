<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { getCountryDetails } from '../api';

const route = useRoute();
const country = ref(null);
const error = ref(null);

watch(route, (currRoute) => {
	const countryName = currRoute.params.name;

	// get country details
	getCountryDetails(countryName)
		.then(res => country.value = res.data[0])
		.catch(err => error.value = err)

	// get country border names
}, { immediate: true })

</script>

<template>
	<div class="container">
		<div className='details-header'>
			<button className="back" @click="$router.back()">
				Back
			</button>
		</div>
		<div v-if="country" className="details">
			<div className="details-img">
				<img :src="country.flags.png" :alt="country.flags.alt" />
			</div>
			<div className="details-content">
				<h3>{{ country.name.common }}</h3>
				<div className="content">
					<section>
						<p><span className="highlight">Native Name:</span> {{ country.name.official }}</p>
						<p><span className="highlight">Population:</span> {{ country.population }}</p>
						<p><span className="highlight">Region:</span> {{ country.region }}</p>
						<p><span className="highlight">Sub Region:</span> {{ country.subregion }}</p>
						<p><span className="highlight">Capital:</span> {{ country.capital[0] }}</p>
					</section>
					<section>
						<p><span className="highlight">Top Level Domain:</span> {{ country.tld[0] }}</p>
						<p><span className="highlight">Currencies:</span> ??</p>
						<p><span className="highlight">Languages:</span> ??</p>
					</section>
				</div>

				<div className="borders">
					<section>
						<h3>Border Countries:</h3>
						<!-- List of buttons -->
						<button>
							<RouterLink :to="{ name: 'CountryDetail', params: { name: 'mexico' } }">Mexico</RouterLink>
						</button>
					</section>
				</div>
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