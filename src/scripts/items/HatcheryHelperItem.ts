///<reference path="Item.ts"/>

class HatcheryHelperItem extends Item {

    constructor(public hatcheryHelperName: string, basePrice: number, currency = GameConstants.Currency.money) {
        super(`HatcheryHelper${hatcheryHelperName}`, basePrice, currency, { maxAmount: 1 }, `Hatchery Helper ${hatcheryHelperName}`);
    }

    get hatcheryHelper(): HatcheryHelper {
        return HatcheryHelpers.list.find(f => f.name == this.hatcheryHelperName);
    }

    get description(): string {
        const hatcheryHelper = this.hatcheryHelper;
        return `Cost: <img src="assets/images/currency/${GameConstants.Currency[hatcheryHelper?.cost?.currency]}.svg" width="20px">&nbsp;${(hatcheryHelper?.cost?.amount ?? 0).toLocaleString('en-US')}/hatch<br/>
        Step Efficiency: ${(hatcheryHelper?.stepEfficiency ?? 0).toLocaleString('en-US')}%<br/>
        Attack Efficiency: ${(hatcheryHelper?.attackEfficiency ?? 0).toLocaleString('en-US')}%`;
    }

    isAvailable(): boolean {
        const purchased = this.hatcheryHelper?.isUnlocked() ?? true;
        return super.isAvailable() && !purchased;
    }

    get image() {
        const trainerID = this.hatcheryHelper?.trainerSprite || 0;
        return `assets/images/profile/trainer-${trainerID}.png`;
    }
}

// Berry Masters
ItemList['HatcheryHelperDakota'] = new HatcheryHelperItem('Dakota', 100000, GameConstants.Currency.dungeonToken);
ItemList['HatcheryHelperCarey']  = new HatcheryHelperItem('Carey', 10000, GameConstants.Currency.questPoint);
ItemList['HatcheryHelperKris']   = new HatcheryHelperItem('Kris', 2000, GameConstants.Currency.diamond);
ItemList['HatcheryHelperNoel']   = new HatcheryHelperItem('Noel', 20000, GameConstants.Currency.battlePoint);
