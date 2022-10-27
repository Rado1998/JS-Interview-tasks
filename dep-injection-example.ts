class Main {
    private _firstService!: FristService;
    private _secondService!: SecondService;
    private _sharedService!: SharedService;

    constructor() {
        this._sharedService = new SharedService();

        this._firstService = new FristService(this._sharedService);
        this._secondService = new SecondService(this._sharedService);
    }

    public logLabels(): void {
        console.log(this._firstService.sharedService.sharedLabel);
        console.log(this._secondService.sharedService.sharedLabel);
    }

    public changeLabel(label: string): void {
        this._sharedService.sharedLabel = label;
    }

}


class FristService {

    constructor(
        public sharedService: SharedService
    ) { }
}

class SecondService {


    constructor(
        public sharedService: SharedService
    ) { }

}

class SharedService {
    public sharedLabel!: string;

    constructor() { }

}

const main = new Main();

main.changeLabel('Test');
main.logLabels();
console.log('==========================');


const secondMain = new Main();
secondMain.logLabels();
secondMain.changeLabel('Second Label');
secondMain.logLabels();
