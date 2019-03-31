
export interface IPetFacade {
    createPet(owner: string, userID: string, name: string): IPet
    removePet(owner: string, userID: string): IPet
    getPet(owner: string, userID: string): IPet
    performAction(owner:string, userID: string, action: PetAction): string
}

export interface IPet{
    pet(): string
    feed(f: Food): string
    admire(): string
    paint(): string
}

export enum Food{
    ROCK,
    SAND,
    COCONUT
}

export interface PetAction{
    action: PetActionKind
    args: object;
}

export class FeedAction implements PetAction{
    action: PetActionKind
    args: {food: Food};
}

export enum PetActionKind{
    PET,
    FEED,
    ADMIRE,
    PAINT
}