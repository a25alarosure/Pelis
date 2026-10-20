const API_KEY = '86f9dc12'

export async function buscar(text) {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(text)}&apikey=${API_KEY}`

    const resposta = await fetch(url)
    const dades = await resposta.json()

    if (dades.Response === 'False') {
        return []
    }

    return dades.Search || []
}

export async function obtenirDetallPelicula(imdbID) {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`

    const resposta = await fetch(url)
    const dades = await resposta.json()

    if (dades.Response === 'False') {
        return null
    }

    return dades
}
