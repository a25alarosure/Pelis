
<script setup>
defineProps({
    pelicula: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['mes-info'])
</script>

<template>
    <v-card class="movie-card" elevation="4">
        <v-img
            :src="pelicula.Poster !== 'N/A' ? pelicula.Poster : undefined"
            height="340"
            cover
            class="movie-poster"
        />

        <v-card-title class="movie-title">
            {{ pelicula.Title }}
        </v-card-title>

        <v-card-text class="movie-info">
            <p>Any: {{ pelicula.Year }}</p>
            <p>Tipus: {{ pelicula.Type }}</p>
        </v-card-text>

        <v-card-actions class="movie-actions">
            <v-btn
                color="primary"
                variant="flat"
                block
                @click="emit('mes-info', pelicula.imdbID)"
            >
                MÉS INFO
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.movie-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #222222;
    color: #ffffff;
    border-radius: 12px;
    overflow: hidden;
}

.movie-poster {
    background-color: #303030;
}

.movie-title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.4;
    min-height: 68px;
    align-items: center;
    white-space: normal;
}

.movie-info {
    color: #dddddd;
    flex-grow: 1;
}

.movie-info p {
    margin-bottom: 8px;
    text-transform: capitalize;
}

.movie-actions {
    padding: 16px;
}
</style>
