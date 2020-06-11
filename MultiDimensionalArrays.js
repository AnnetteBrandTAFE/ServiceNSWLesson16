// example
// This is best for any grid e.g. naughts and crosses or chessboards

let naughtsAndCrosses = [
    ["0", "X", "X"],
    [" ", "O", " "],
    [" ", "O", " "],
];

// for (let row of naughtsAndCrosses) {
//     console.log(`${row[0]} | ${row[1]} | ${row[2]}`)
// }
// // Output:
// // 0 | X | X
// //   | O |
// //   | O |

// // if you want to get a particular element in one of the arrays 
// console.log(naughtsAndCrosses[0][2]); // Output: X
// In the above it is looking at the first array within naughtsAndCrosses array and the 2nd element. Remenber index starts at 0

// if you want to output everything in the array

for (const row of naughtsAndCrosses) {
    let rowText = " ";
    for (const col of row) {
        rowText += col;
    }
    console.log(rowText);
}
// Output:
// 0XX
// O
// O

