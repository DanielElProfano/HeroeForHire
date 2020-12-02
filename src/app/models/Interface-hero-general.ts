export interface InterfaceHeroGeneral {

    name : string;
    gender : string;
    race : string;
    weight : string[];
    image : string;
    id: string;
   
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
