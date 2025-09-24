export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl:"Type/Plant.png",
        color:"rgba(135,255,124)"
    },
    [MonsterType.ELECTRIC]: {
        imageUrl:"Type/Electric.png",
        color:"rgba(255,255,104)"
    },
    [MonsterType.FIRE]: {
        imageUrl:"Type/Fire.png",
        color:"rgba(255,104,104)"
    },
    [MonsterType.WATER]: {
        imageUrl:"Type/Water.png",
        color:"rgba(118,235,255)"
    },
}