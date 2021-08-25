let crosses = true;
const squares = [...document.querySelectorAll('.board-square')];

const Gb = (function() {
    return {
            lines : {
                'top' : [1, 2, 3],
                'middle' : [4, 5, 6],
                'bottom' : [7, 8, 9],
                'left' : [1, 4, 7],
                'centre' : [2, 5, 8],
                'right' : [3, 6, 9],
                'downdiag' : [1, 5, 9],
                'updiag' : [7, 5, 3],
            },

        board : [
            '','','',
            '','','',
            '','',''
        ],
        getLine(line) {
            return Gb.lines[line];
        }
    
    }
})();

// Check for 3 in a row
function checkLines(line) {
    const cwin = [1,1,1].toString();
    const nwin = [0,0,0].toString();
    console.log('lines checked');
    let lineToCheck = line.map(index => Gb.board[index-1]).toString();
    if (lineToCheck == cwin || lineToCheck == nwin) {
       console.log('We Have A Winner!');
       console.log(line.map(index => Gb.board[index-1]));
       line.map(index => document.getElementById(`${index.toString()}`).classList.add('winner'));
    } //
    
}


squares.forEach(square => {
    square.addEventListener('click', (e) => {
        // crosses ? Gb[`sq${e.target.id}`] = 'cross' : Gb[`sq${e.target.id}`] ='naught'; 
        if (Gb.board[e.target.id - 1] == '') {
            crosses ? Gb.board[e.target.id - 1] = 1 : Gb.board[e.target.id - 1] = 0;
        }
        console.log(Gb.board);

        // Every click, check all the lines
        // CheckLines sees if any 3 in a row
        Object.values(Gb.lines)
            .forEach(line => checkLines(line));



        crosses = !crosses;
    })
})


