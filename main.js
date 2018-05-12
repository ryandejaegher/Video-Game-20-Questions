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
// Needs a if statement to write release date as Unreleased
var table = document.querySelector('tbody')

for (var i = 0; i < table.rows.length; i++) {
	var gameTitles = table.rows[i].cells[0].getElementsByTagName('i')[0].textContent;
	var gameDeveloper = table.rows[i].cells[1].firstChild.textContent;
    var gamePublisher = table.rows[i].cells[2].firstChild.textContent;
    var releaseDate = table.rows[i].cells[6];
    
    // .childNodes[1].textContent;

    if (releaseDate.childElementCount === 0) {
        releaseDate = releaseDate.textContent;
    } else {
        releaseDate = releaseDate.childNodes[1].textContent;
    }
	console.info(`
{
	name: "${gameTitles}", 
	developer: "${gameDeveloper}",
	publisher: "${gamePublisher}",
	releaseDate: "${releaseDate}"
},	
`)
}


/*

Pulling game covers as well
var gamesData = document.querySelectorAll('article')

for (let i = 0; i < gamesData.length; i++) {
	var gameName = gamesData[i].getElementsByClassName('item-heading')[0].textContent;
	var gameDeveloper = gamesData[i].getElementsByClassName('item-label-value')[0].textContent;
	var gameReleaseDate = gamesData[i].getElementsByClassName('item-label-value')[1].textContent;
	var gameCover = gamesData[i].getElementsByClassName('item-image')[0].getAttribute('data-original')
	console.log(gameCover);
	console.info(`
	gameName: "${gameName.trim()}",
	developer: "${gameDeveloper}",
	releaseDate: "${gameReleaseDate}"
`

)
	
}
*/

