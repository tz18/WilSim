import {FeedAction, Food, IPet, IPetFacade, PetAction, PetActionKind} from "./IPetFacade";

class Pet implements IPet{
    public hunger: number = 0;
    public thirst: number = 0;
    public painted: number;
    public name: string;

    constructor(name: string){
        this.name=name;
        this.painted=0;
    }

    public admire(): Pet {
        let result = this;
        if (this.painted===0)
            result["flavortext"] = `You are unable to decipher ${this.name}'s blank expression.`
        else{
            result["flavortext"] = `${this.name} looks lost in thought.`
        }
        return result
    };
    public pet(): Pet{
        let result = this;
        result["flavortext"] =`${this.name}'s contemplative expression doesn't change.`;
        return result;
    }
    public paint(): Pet{
        this.painted=100;
        let result = this;
        result["flavortext"]= `Using some extra blood, you give ${this.name}'s visage a touch-up.`;
        return result;
    }
    public feed(f: Food): Pet{
        let result = this;
        result["flavortext"] = `${this.name} doesn't seem to be very hungry.`;
        return result;
    }

}

export class PetFacade implements IPetFacade{
    PetCemetery: {[owner: string] : Pet};

    constructor(){
        this.PetCemetery = {};
    }


    public createPet(owner: string, userID: string, name: string = "Wilson"): Pet
    {
        this.PetCemetery[owner] = new Pet(name);
        return this.PetCemetery[owner];
    }
    public removePet(owner: string, userID: string): Pet
    {
        let pet = this.PetCemetery[owner];
        delete this.PetCemetery[owner];
        return pet;
    }
    getPet(owner: string, userID: string){
        return this.PetCemetery[owner];
    }
    performAction(owner:string, userID: string, action: PetAction): Pet{
        switch(action.action){
            case PetActionKind.ADMIRE: {
                return this.PetCemetery[owner].admire();
            }
            case PetActionKind.PET: {
                return this.PetCemetery[owner].pet();
            }
            case PetActionKind.FEED: {
                return this.PetCemetery[owner].feed((action as FeedAction).args.food);
            }
            case PetActionKind.PAINT:{
                return this.PetCemetery[owner].paint();
            }
        }
    }
}
