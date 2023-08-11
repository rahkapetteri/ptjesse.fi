<template>
        <div class="template">
            <div class="calculator">
                <FormulateInput v-model="reps" type="number" label="Toistot" help="Toistot" min="0" max="500"
                    error-behavior="live" validation="number|between:-1,500" />

                <FormulateInput v-model="kg" type="number" label="Tangossa painoa" help="Paino kg" min="0" max="500"
                    error-behavior="live" validation="number|between:-1,500" />

                <FormulateInput v-model="percent" type="number" label="Prosentit ykkösmaksimista" help="Jos haluat laskea esimerkiksi 50 % kuorman maksimituloksestasi, valitse 50" min="0" max="101"
                error-behavior="live" validation="number|between: 0,101" />

                <!-- <FormulateInput v-model="equation" help="Jos tulokset näyttävät hassulta, kokeile eri kaavaa"
                :options="{ brzycki: 'Brzycki', epley: 'Epley', lander: 'Lander', mayhew: 'Mayhew et al.' }"
                type="radio" label="Kaava" /> -->
                
                <div>
                    <p v-if="this.kg > 0 && this.kg < 500 && this.reps > 0 && this.reps  < 500 && this.percent > 0 && this.percent < 101">Penkkipunnerruksen maksiminostosi on noin <span class="kcal">{{ benchpressmax }}</span> kg.</p>
                    <p v-else>Penkkipunnerruksen maksiminostosi on noin <span class="kcal">0</span> kg.</p>
                </div>
                <p class="text-sm">Tulos on pyöristetty 2,5 kg tarkkuuteen.</p>
            </div>
        </div>
</template>

  
<script>
export default {

    data() {
        return {
            kg: 60,
            reps: 10,
            percent: 100,
            // equation: "brzycki"
        }
    },
    computed: {
        benchpressmax: function () { 

            // if (this.equation === 'brzycki') {
            //     return Math.round(((Number(this.percent) * (Number(this.kg) * 2.21) / (1.0278 - (0.0278 *  Number(this.reps))) / 2.21) / 100) / 2.5) * 2.5
            // }

            // else if (this.equation === 'epley') {
            //     return Math.round(((Number(this.percent) * (Number(this.kg) * (1+ (0.0333 * Number(this.reps))))) / 100) / 2.5) * 2.5
            // }

            // else if (this.equation === 'lander') {
            //     return Math.round(((Number(this.percent) * (100 * Number(this.kg)) / (101.3 - (2.67123 * Number(this.reps))) ) / 100) / 2.5) * 2.5
            // }

            // else if (this.equation === 'mayhew') {
                return Math.round(((Number(this.percent) * (100 * Number(this.kg)) / (52.2 + (41 * Math.pow(Math.E, -0.055 * Number(this.reps)))) ) / 100) / 2.5) * 2.5
            // }

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
  
  