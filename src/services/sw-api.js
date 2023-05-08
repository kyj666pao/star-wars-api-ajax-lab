const baseUrl = "https://swapi.dev/api"

export async function getAllStarships() {
    let starshipList = []
    let page = 1
    let parsedData
    do {
        const res = await fetch(`${baseUrl}/starships/?page=${page}`)
        parsedData = await res.json()
        // console.log(parsedData.results.length)
        starshipList = [...starshipList, ...parsedData.results]
        page++
    } while (parsedData.next)
    console.log(starshipList.length, starshipList)
    return starshipList
}
// getAllStarships()

export async function getStarship(starshipId) {
    console.log(starshipId)
    const res = await fetch(`${baseUrl}/starships/${starshipId}`)
    let parsedData = await res.json()
    console.log(parsedData)
    return parsedData
}
// getStarship(2)
