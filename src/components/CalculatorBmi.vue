<template>
	<div class="template">
		<div class="calculator">
			<FormulateInput v-model="length" type="number" label="Pituus" help="Pituus cm" min="0" max="1500"
				error-behavior="live" validation="number|between:-1,1500" />

			<FormulateInput v-model="weight" type="number" label="Paino" help="Paino kg" min="0" max="1500"
				error-behavior="live" validation="number|between:-1,1500" />
			<div>
				<p v-if="this.weight != 0 && this.length != 0 && this.length < 1500 && this.length > 0 && this.weight < 1500 && this.weight > 0">Painoindeksi on noin <span class="kcal">{{ currentBmi }}</span>,
					{{ currentBmiText }}</p>
				<p v-else>Painoindeksi on noin <span class="kcal">0</span></p>
			</div>
		</div>
		<a class="text-xs link-mod" href="https://ptjesse.fi">Ptjesse.fi</a>
	</div>
</template>


<script>
export default {

	data() {
		return {
			weight: 0,
			length: 0,
			calculatedBmi: 0,
		}
	},

	computed: {

		currentBmi: function () {
			if (this.weight && this.length) {
				this.calculatedBmi = Math.round((this.weight / ((this.length / 100) * (this.length / 100))) * 10) / 10;
				return this.calculatedBmi;
			}

			else {
				return 0
			}
		},

		currentBmiText() {
			const bmi = this.calculatedBmi;

			if (bmi < 18.5) {
				return 'mikä tarkoittaa alipainoa.';
			}
			if (bmi >= 18.5 && bmi <= 24.9) {
				return 'mikä tarkoittaa normaalipainoa.';
			}
			if (bmi >= 25.0 && bmi <= 29.9) {
				return 'mikä tarkoittaa ylipainoa, tai tavallista enemmän lihaksia.';
			}
			if (bmi >= 30.0 && bmi <= 34.9) {
				return 'mikä tarkoittaa reilua ylipainoa, tai olet kehonrakentaja.';
			}
			if (bmi >= 35.0 && bmi <= 39.9) {
				return 'mikä tarkoittaa vaikeaa lihavuutta, tai olet raskaan sarjan kehonrakentaja.';
			}
			return 'mikä tarkoittaa sairaalloista lihavuutta, tai olet superraskaan sarjan kehonrakentaja. Ehkäpä tuleva Ronnie Coleman?';
		}
	},
}
</script>

<style lang="scss" scoped>
.formulate-input {
	margin: 1rem 0;
}

.formulate-input[data-classification=text] input {
	color: var(--color-paragraph) !important;
}

.form-selection {
	font-size: var(--font-size-14);
}

.calculator {
	margin-bottom: var(--padding-container-vertical);
}

.kcal {
	font-size: var(--font-size-hero);
}
</style>