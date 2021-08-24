let crosses = true;
const squares = [...document.querySelectorAll('.board-square')];
squares.forEach(square => {
    square.addEventListener('click', (e) => {
        console.log(crosses, e.target)
        crosses ? Gameboard[`sq${e.target.id}`] = 'cross' : 'naught'; 
        console.log(Gameboard);
        crosses = !crosses;
    })
})


const Gameboard = {}