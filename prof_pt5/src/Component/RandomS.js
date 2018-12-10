const randSelectFair = function (Students) {
    const population_size = Students.length;
    const rand_index = Math.floor(Math.random() * population_size);
    return Students[rand_index];
};

const RandomS = {
    fair: randSelectFair,
};

export default RandomS;