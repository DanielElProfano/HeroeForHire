export interface InterfaceHeroGeneral {

    name : string;
    gender : string;
    image : string;
    alignment : string;
    id: string;
   
}

export interface InterfaceFilteHeroes{

    name : string;
    gender : string;
    image : string;
    alignment : string;
    id: string;
    intelligence : string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat :string;
}

export interface InterfaceHeroDetail {

    id: string;
    name : string;
    gender : string;
    race : string;
    weight : string[];
    image : string;
    intelligence : string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat :string;
    height  : string;
    base : string;
    fullName : string;
    groupAffiliation: string; 
    alterEgos: string;
    alignment : string;
    
}
export interface InterfacePowerStats{
    id: string;
    intelligence : string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat :string;
    name: string;

}
