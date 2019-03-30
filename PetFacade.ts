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

    public admire(): string{
        if (this.painted==0)
            return `You are unable to decipher ${name}'s blank expression.`
        return `${name} looks lost in thought.`
    };
    public pet(): string{
        return `${name}'s contemplative expression doesn't change.`
    }
    public paint(): string{
        this.painted=100;
        return `Using some extra blood, you give ${name}'s visage a touch-up.`
    }
    public feed(f: Food): string{
        return `${name} doesn't seem to be very hungry.`
    }

}

class PetFacade implements IPetFacade{
    PetCemetery: {[owner: string] : Pet};

    constructor(){
        this.PetCemetery = {};
    }


    public createPet(owner: string, name: string): Pet
    {
        this.PetCemetery[owner] = new Pet(name);
        return this.PetCemetery[owner];
    }
    public removePet(owner: string): Pet
    {
        let pet = this.PetCemetery[owner];
        delete this.PetCemetery[owner];
        return pet;
    }
    getPet(owner: string){
        return this.PetCemetery[owner];
    }
    performAction(owner:string, action: PetAction): string{
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
        }
    }
}