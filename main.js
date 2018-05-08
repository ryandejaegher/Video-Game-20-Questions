const gamecube = [
    {
        name: "Legend of Zelda: Wind Waker",
        releaseDate: 2002,
        publisher: "Nintendo"
    },
    {
        name: "Metroid Prime",
        releaseDate: 2002,
        publisher: "Nintendo"
    },
    {
        name: "Luigi's Mansion",
        releaseDate: 2001,
        publisher: "Nintendo"
    },
    {
        name: "Killer 7",
        releaseDate: 2005,
        publisher: "Capcom"
    }
]

// Code to grab list of games from wikipedia
for (var i = 0; i < table.rows.length; i++) {
	var games = (table.rows[i].cells[0].getElementsByTagName('i')[0].textContent)
	console.log(`"${games}"`)
}


 