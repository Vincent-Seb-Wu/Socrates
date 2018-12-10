const randSelectFair = function (names) {
    const population_size = names.length;
    if (population_size < 2) {
        return 'Not enough students';
    }
    const rand_index_1 = Math.floor(Math.random() * population_size);
    let rand_index_2 = Math.floor(Math.random() * population_size);
    while (rand_index_2 === rand_index_1) {
        rand_index_2 = Math.floor(Math.random() * population_size);
    }
    return [names[rand_index_1], names[rand_index_2]];
};

const RandomS = {
    fair: randSelectFair,
};

export default RandomS;
