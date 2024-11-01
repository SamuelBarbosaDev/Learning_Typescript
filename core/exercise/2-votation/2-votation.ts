type VotationOption = {
    numberOfvotes: number,
    option: string,
}

class Votation{
    private _votationOption: VotationOption[] = [];
    constructor(public details: string){}

    addVotationOption(VotationOption: VotationOption): void{
        this._votationOption.push(VotationOption)
    }

    vote(votationIndex: number): void{
        if(!this._votationOption[votationIndex]) return;
        this._votationOption[votationIndex].numberOfvotes += 1;
    }

    get votationOptions(){
        return this._votationOption
    }
}

class VotationApp{
    private votations: Votation[] = [];

    addVotation(votation: Votation): void{
        this.votations.push(votation);
    }

    showVotations(): void{
        for (const votation of this.votations){
            console.log(votation.details);
            for(const votationOption of votation.votationOptions){
                console.log(votationOption.option, votationOption.numberOfvotes);
            }
        }
    }
}

const votation = new Votation('Destruir o estado/leviatã?');
votation.addVotationOption({option: 'Sim', numberOfvotes: 0});
votation.addVotationOption({option: 'Com certeza', numberOfvotes: 0});
votation.vote(0);
votation.vote(0);
votation.vote(0);
votation.vote(1);
votation.vote(1);
votation.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation);
votationApp.showVotations();
