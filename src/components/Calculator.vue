<template>
        <div class="template">
            <div class="calculator">
                <FormulateInput v-model="length" type="number" label="Pituus" help="Pituus cm" min="0" max="1500"
                    error-behavior="live" validation="number|between:-1,1500" />

                <FormulateInput v-model="weight" type="number" label="Paino" help="Paino kg" min="0" max="1500"
                    error-behavior="live" validation="number|between:-1,1500" />

                <FormulateInput v-model="age" type="number" label="Ikä" help="Ikä vuosina" min="-1" max="500"
                    error-behavior="live" validation="number|between:-1,500"/>

                <FormulateInput v-model="gender" :options="{ nainen: 'Nainen', mies: 'Mies' }" placeholder="Valitse sukupuoli"
                    type="select" label="Sukupuoli" />

                <FormulateInput v-model="activity" type="select" label="Harrastukset" :options="[
                    { value: 0, label: 'Passiivinen' },
                    { value: 0.125, label: 'Arkiaktiivisuus, ei liikuntaa' },
                    { value: 0.275, label: 'Kevyttä terveysliikuntaa 2-3 kertaa viikossa' },
                    { value: 0.4, label: 'kohtalaisesti rasittavaa liikuntaa 3 kertaa viikossa' },
                    { value: 0.525, label: 'keskiraskasta liikuntaa 3-4 kertaa viikossa' },
                    { value: 0.675, label: 'Raskasta liikuntaa yli 5 kertaa viikossa' },
                ]" />

                <FormulateInput v-model="work" type="select" label="Työn fyysiyys" :options="[
                    { value: 0, label: 'Kevyt toimistotyö, autonkuljettaja tai vastaava' },
                    { value: 0.125, label: 'Keskiraskas työ, hoitotyö, siivoustyö, keittiötyöt tai vastaava' },
                    { value: 0.25, label: 'Raskas työ, metsätyöt, rakennustyöt, teollisuus tai vastaava' },
                ]" />

                <FormulateInput v-model="priority"
                    :options="{ painonpudotus: 'Painonpudotus', lihasmassa: 'Lihasmassan kasvatus', yllapito: 'Pyrin syömään tasapainoisesti' }"
                    type="radio" label="Tavoite" />

                <div>
                    <p v-if="this.weight != 0 && this.length != 0 && this.age != 0">Energian tarpeesi on noin <span class="kcal">{{ calorieconsumption }}</span> kcal päivässä.</p>
                    <p v-else>Energian tarpeesi on noin <span class="kcal">0</span> kcal päivässä.</p>
                </div>
            </div>
        </div>
</template>

  
<script>
export default {

    data() {
        return {
            gender: "nainen",
            activity: 0,
            weight: 0,
            length: 0,
            age: 0,
            work: 0,
            priority: "yllapito",
            bulkdiet: 300,
            calories: 0,
        }
    },

    computed: {
        // (9,247 x paino kg) + (3,098 x pituus cm) – (4,330 x ikä vuosissa) + 447,593
        // (13,397 x paino kg) + (4,799 x pituus cm) – (5,677 x ikä vuosissa) + 88,362

        calorieconsumption: function () {
            if (this.gender == 'nainen') {
                if (this.priority === 'painonpudotus') {
                    this.calories = (Math.round((((9.247 * this.weight) + (3.098 * this.length) - (4.330 * this.age) + 447.59) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25) - this.bulkdiet
                }

                else if (this.priority === 'lihasmassa') {
                    this.calories = (Math.round((((9.247 * this.weight) + (3.098 * this.length) - (4.330 * this.age) + 447.59) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25) + this.bulkdiet
                }

                else {
                    this.calories = Math.round((((9.247 * this.weight) + (3.098 * this.length) - (4.330 * this.age) + 447.59) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25
                }

                if ( this.calories < 1250 ){
                    return 1250
                }

                else {
                    return this.calories
                }

            }
            else if (this.gender === 'mies') {
                if (this.priority === 'painonpudotus') {
                    this.calories =  (Math.round((((13.397 * this.weight) + (4.799 * this.length) - (5.677 * this.age) + 88.362) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25) - this.bulkdiet
                }

                else if (this.priority === 'lihasmassa') {
                    this.calories =  (Math.round((((13.397 * this.weight) + (4.799 * this.length) - (5.677 * this.age) + 88.362) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25) + this.bulkdiet
                }

                else {
                    this.calories = Math.round((((13.397 * this.weight) + (4.799 * this.length) - (5.677 * this.age) + 88.362) * (1 + Number(this.activity) + Number(this.work))) / 25) * 25;
                }

                if ( this.calories < 1250 ){
                    return 1250
                }

                else {
                    return this.calories
                }
            }

            else {
                return 0
            }
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
  
  