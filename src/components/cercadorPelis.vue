
<script setup>
import { ref } from 'vue'
import { buscar, obtenirDetallPelicula } from '@/services/comunication'
import FitxaPelicula from '@/components/FitxaPelicula.vue'

const cerca = ref('')
const resultat = ref([])
const detall = ref(null)
const dialog = ref(false)

async function cercarPeli() {
    resultat.value = await buscar(cerca.value)
}

async function mostrarDetall(imdbID) {
    detall.value = await obtenirDetallPelicula(imdbID)

    if (detall.value) {
        dialog.value = true
    }
}
</script>

<template>
    <v-container class="main-container">
        <h1 class="page-title">
            Cercador de pel·lícules
        </h1>

        <v-row align="center" class="search-row">
            <v-col cols="12" sm="9">
                <v-text-field
                    v-model="cerca"
                    label="Buscar película"
                    variant="outlined"
                    hide-details
                    @keyup.enter="cercarPeli"
                />
            </v-col>

            <v-col cols="12" sm="3">
                <v-btn
                    color="primary"
                    size="large"
                    block
                    @click="cercarPeli"
                >
                    CERCAR
                </v-btn>
            </v-col>
        </v-row>

        <v-row v-if="resultat.length > 0" class="movies-grid">
            <v-col
                v-for="element in resultat"
                :key="element.imdbID"
                cols="12"
                sm="6"
                md="4"
            >
                <FitxaPelicula
                    :pelicula="element"
                    @mes-info="mostrarDetall"
                />
            </v-col>
        </v-row>

        <v-dialog
            v-model="dialog"
            max-width="700"
        >
            <v-card v-if="detall" class="detail-card">
                <v-card-title class="detail-title">
                    {{ detall.Title }}
                </v-card-title>

                <v-card-text>
                    <v-img
                        :src="detall.Poster !== 'N/A' ? detall.Poster : undefined"
                        height="300"
                        contain
                        class="detail-poster"
                    />

                    <div class="detail-info">
                        <p><strong>Director:</strong> {{ detall.Director }}</p>
                        <p><strong>Actors:</strong> {{ detall.Actors }}</p>
                        <p><strong>Argument:</strong> {{ detall.Plot }}</p>
                        <p><strong>Durada:</strong> {{ detall.Runtime }}</p>
                        <p><strong>Gènere:</strong> {{ detall.Genre }}</p>
                        <p><strong>Valoració IMDb:</strong> {{ detall.imdbRating }}</p>
                    </div>
                </v-card-text>

                <v-card-actions class="detail-actions">
                    <v-spacer />
                    <v-btn
                        color="primary"
                        variant="flat"
                        @click="dialog = false"
                    >
                        TANCAR
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style scoped>
.main-container {
    max-width: 1200px;
    padding-top: 32px;
    padding-bottom: 40px;
}

.page-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 28px;
    color: #ffffff;
    letter-spacing: 0.5px;
}

.search-row {
    margin-bottom: 24px;
}

.movies-grid {
    row-gap: 12px;
}

.detail-card {
    background-color: #222222;
    color: #ffffff;
    border-radius: 12px;
}

.detail-title {
    font-size: 1.5rem;
    font-weight: 700;
    white-space: normal;
}

.detail-poster {
    margin-bottom: 20px;
}

.detail-info p {
    line-height: 1.6;
    margin-bottom: 10px;
    color: #eeeeee;
}

.detail-actions {
    padding: 16px;
}
</style>
