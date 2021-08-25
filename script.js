let crosses = true;
const squares = [...document.querySelectorAll('.board-square')];

const Gb = (function() {
    return {
        top : [1, 2, 3],
        middle : [4, 5, 5],
        bottom : [7, 8, 9],
        left : [1, 4, 7],
        centre : [2, 5, 8],
        right : [3, 6, 9],
        downdiag : [1, 5, 9],
        updiag : [7, 5, 3],

        board : [
            '','','',
            '','','',
            '','',''
        ],

        getLine(arr = this.board, line) {
            return line.map(i => arr[i-1]);
        }
    
    }
})();

function checkLines() {
    const cwin = [1,1,1];
    const nwin = [0,0,0];


}


squares.forEach(square => {
    square.addEventListener('click', (e) => {
        // crosses ? Gb[`sq${e.target.id}`] = 'cross' : Gb[`sq${e.target.id}`] ='naught'; 
        if (Gb.board[e.target.id - 1] == '') {
            crosses ? Gb.board[e.target.id - 1] = 1 : Gb.board[e.target.id - 1] = 0;
        }
        console.log(Gb.board);






        crosses = !crosses;
    })
})


