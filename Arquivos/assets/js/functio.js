const defaultCharacter = {
    name: "",
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (nome) => {
    return{
        ...defaultCharacter,
        nome,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSocerer = (nome) => {
    return{
        ...defaultCharacter,
        nome,
        life:50,
        maxLife: 50,
        attack: 14,
        defense:3
    }
}
