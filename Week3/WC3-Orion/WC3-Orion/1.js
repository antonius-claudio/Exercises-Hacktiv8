/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * 'steps' adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan,
 * lokasi yang sudah di lewati oleh penambang, akan menjadi kosong
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 * Dan jika variable mine yang di tambang di console.log maka penampakan terakhirnya adalah seperti ini:
 *    [
 *      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 *      [' ', ' ', ' ', ' ', 'd', '#', '#'],
 *      ['#', '#', '#', 'g', '#', '#', '#']
 *    ]
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf etc
 */

/* 	Claudio Antonius

	BEGIN mineTycoon
		READ and SET mine
		READ and SET steps
		SET result = []
		SET countCopper = 0
		SET countSilver = 0
		SET countGold = 0
		SET countDiamond = 0

		FOR i = 0; i < mine.length
			FOR j = 0; j < mine[i].length
				IF steps > 0
					DO 	IF (mine[i][j] === 'c')
							DO countCopper++
						ELSE IF (mine[i][j] === 's')
							DO countSilver++
						ELSE IF (mine[i][j] === 'g')
							DO countGold++
						ELSE IF (mine[i][j] === 'd')
							DO countDiamond++
						ENDIF
					mine[i][j] = ' '
					steps--
				ELSE break
				ENDIF
			j++
			ENDFOR
		i++
		ENDFOR
		IF (countCopper !== 0)
			SET temp = []
			SAVE countCopper TO temp
			SAVE 'copper' TO temp
			SAVE temp TO result
		ENDIF
		IF (countSilver !== 0)
			SET temp = []
			SAVE countSilver TO temp
			SAVE 'silver' TO temp
			SAVE temp TO result
		ENDIF
		IF (countGold !== 0)
			SET temp = []
			SAVE countGold TO temp
			SAVE 'gold' TO temp
			SAVE temp TO result
		ENDIF
		IF (countDiamond !== 0)
			SET temp = []
			SAVE countDiamond TO temp
			SAVE 'diamond' TO temp
			SAVE temp TO result
		ENDIF
		DISPLAY result
	END
*/

function mineTycoon(mine, steps) {
	//implementasi function disini!
	let result = [];
	let countCopper = 0;
	let countSilver = 0;
	let countGold = 0;
	let countDiamond = 0;
	for (let i = 0; i < mine.length; i++) {
		for (let j = 0; j < mine[i].length; j++) {
			if (steps > 0) {
				if (mine[i][j] === 'c') {
					countCopper++;
				} else if (mine[i][j] === 's') {
					countSilver++;
				} else if (mine[i][j] === 'g') {
					countGold++;
				} else if (mine[i][j] === 'd') {
					countDiamond++;
				}
				mine[i][j] = ' ';
				steps--;
			} else break;
		}		
	}
	if (countCopper !== 0) {
		let temp = [];
		temp.push(countCopper);
		temp.push('copper');
		result.push(temp);
	}
	if (countSilver !== 0) {
		let temp = [];
		temp.push(countSilver);
		temp.push('silver');
		result.push(temp);
	}
	if (countGold !== 0) {
		let temp = [];
		temp.push(countGold);
		temp.push('gold');
		result.push(temp);
	}
	if (countDiamond !== 0) {
		let temp = [];
		temp.push(countDiamond);
		temp.push('diamond');
		result.push(temp);
	}
	// return mine; 	//test mine
	return result;
}

var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]