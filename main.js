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

// Code to grab list of games from wikipedia and creates an object for each game
var table = document.querySelector('tbody')

for (var i = 0; i < table.rows.length; i++) {
	var gameTitles = (table.rows[i].cells[0].getElementsByTagName('i')[0].textContent);
	var gameDeveloper = (table.rows[i].cells[1].firstChild.textContent);
	var gamePublisher = (table.rows[i].cells[2].firstChild.textContent);
	var releaseDate = (table.rows[i].cells[6].childNodes[1].textContent)
	console.info(`
{
	name: "${gameTitles}", 
	developer: "${gameDeveloper}",
	publisher: "${gamePublisher}",
	releaseDate: "${releaseDate}"
},	
`)
}


