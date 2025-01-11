'use strict';

const tablePifagor = document.getElementById('tablePifagor');


let line = Number(prompt("Ведіть кількисть рядків"));
let column = Number(prompt("Ведіть кількисть стовпчиків"));

if (!line && !column || isNaN(line) && isNaN(column)) {
    alert('Треба задати розмір таблиці (цифрами)');
}
else {
    function createSizePifagorTable(table, a, b) {
        for (let i = 0; i <= a; i++) {
            const row = document.createElement('tr');
        
            // будує таблицю по рядкам, по зваршенню другого цикла повертає один рядок, і так поки не зупиниться перший цикл
            for (let j = 0; j <= b; j++) {
                let cellTag = (i === 0 || j === 0) ? 'th' : 'td'; // якщо перший рядок/стовпчик то -> th, всі інші -> td
                const cell = document.createElement(cellTag);
    
                // умови заповнення клітинок
                if (i === 0 && j === 0) {
                    cell.textContent = ''; // порожня углова клітинка
                } else if (i === 0) {
                    cell.textContent = j; // заголовок стовпчика
                } else if (j === 0) {
                    cell.textContent = i; // заголовок рядка
                } else {
                    cell.textContent = i * j;
                }
        
                // перетин ліній
                if (i === j && i !== 0 && j !== 0) {
                    cell.style.backgroundColor = "green";
                    cell.style.color = "white";
                }
        
                row.appendChild(cell);
            }
        
            table.appendChild(row);
        }
    }
    
    createSizePifagorTable(tablePifagor, line, column);
}
