const minPosition = 0;
const maxPosition = 7;

function getAllPossiblePositions([x, y]: number[]) {
    return [
        [x - 2, y + 1],
        [x - 2, y - 1],
        [x - 1, y + 2],
        [x - 1, y - 2],
        [x + 1, y + 2],
        [x + 1, y - 2],
        [x + 2, y + 1],
        [x + 2, y - 1],
    ];
}

function filterLegalPositions(allPossiblePositions: number[][]) {
    return allPossiblePositions.filter(
        ([x, y]) => x >= minPosition && x <= maxPosition && y >= minPosition && y <= maxPosition
    );
}

function knightMoves(startPosition: number[], destination: number[]) {
    const queue: [number[], number[][]][] = [[startPosition, [startPosition]]];
    const visited = new Set<string>();
    visited.add(startPosition.toString());

    while (queue.length > 0) {
        const [currentPosition, path] = queue.shift()!;

        if (currentPosition[0] === destination[0] && currentPosition[1] === destination[1]) {
            return path;
        }

        const allPossiblePositions = filterLegalPositions(getAllPossiblePositions(currentPosition));
        for (const position of allPossiblePositions) {
            if (!visited.has(position.toString())) {
                visited.add(position.toString());
                queue.push([position, [...path, position]]);
            }
        }
    }

    return null;
}

// let path = knightMoves([0, 0], [1, 2]); // [[0,0], [1,2]])
let path = knightMoves([3, 3], [4, 3]); // [[0,0], [1,2]]) 4,5 2,4 4,3
console.log(path?.length)
console.log(path)
