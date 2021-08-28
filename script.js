let crosses = true;
// const naught = `<img src="imgs/donut.jpg alt="O">`;
// const cross = `<img src="imgs/cross.jpg alt="X>`;
const naught = 'O';
const cross = 'X';
const squares = [...document.querySelectorAll('.board-square')];

squares.forEach(square => {
    square.addEventListener('click', handleClick)
    });

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
            'm','m','m',
            'm','m','m',
            'm','m','m'
        ],
        getLine(line) {
            return Gb.lines[line];
        },
        winner : false
    
    }
})();

// Check for 3 in a row
function checkLines(line) {
    const cwin = [1,1,1].toString();
    const nwin = [0,0,0].toString();
    console.log('lines checked');
    // check for winning line
    let lineToCheck = line.map(index => Gb.board[index-1]).toString();
    if (lineToCheck == cwin || lineToCheck == nwin) {
       console.log('We Have A Winner!');
       Gb.winner = true;
       line.map(index => { // apply winning styling
           document.getElementById(`${index.toString()}`).classList.add('winner')
           squares.forEach(square => square.classList.remove('hover'));
           squares.forEach(
               square => square.removeEventListener('click', handleClick));
        });
    } if (!Gb.board.includes('m') && !Gb.winner){
        console.log(`It's a draw`);
    } 
}





function handleClick(e) {
    if (Gb.board[e.target.id - 1] == 'm') { // if square is empty, add naught or cross
        crosses ? Gb.board[e.target.id - 1] = 1 : Gb.board[e.target.id - 1] = 0;
        crosses ? e.target.innerHTML += cross : e.target.innerHTML += naught;
        crosses = !crosses;
        console.log('zero');
    }

    console.log(Gb.board);

    // Every click, check all the lines
    // CheckLines sees if any 3 in a row
    Object.values(Gb.lines).forEach(line => checkLines(line));

}


