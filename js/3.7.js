const array = [1, 2, 3, 4, 5, 6, 7, 8];

returnElem = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(array[i]);
    }
    return result;
};

console.log(returnElem(2,4));