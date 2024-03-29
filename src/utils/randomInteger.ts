function randomInteger(min: number, max: number) { 
    return min - Math.random() * ( max + 1 - min );
}

export default randomInteger;