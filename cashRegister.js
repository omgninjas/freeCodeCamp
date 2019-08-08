function checkCashRegister(price, cash, cid) {
    //cid is a 2D array listing available currency.
    const changeDue = parseFloat(cash - price).toFixed(2),
        currency = {
            "PENNY": .01,
            "NICKEL": .05,
            "DIME": .1,
            "QUARTER": .25,
            "ONE": 1,
            "FIVE": 5,
            "TEN": 10,
            "TWENTY": 20,
            "ONE HUNDRED": 100
        },
        totalCID = cid.slice(0).map(function (value, index) {
            return value[1];
        }).reduce((a, b) => {
            return a + b;
        });

    /*The checkCashRegister() function should always return an object with a status key and a change key.*/
    let register = {
        status: '',
        change: [],
    }

    function getChange(changeDue, cid) {
        const change = [],
            roll = cid.length - 1;
        for (let i = roll; i >= 0; i--) {
            const denom = cid[i][0];
            const monies = cid[i][1];
            const value = currency[denom];
            let numCoins = (monies / value).toFixed(2);
            let newChange = 0;

            while (changeDue >= value && numCoins > 0) {
                changeDue -= value; //subtract .25 from CID
                changeDue = changeDue.toFixed(2);
                numCoins--; //substract a quarter from the number of coins stored 
                newChange++;
            }
            if (newChange > 0) {
                change.push([denom, newChange * value]);
                console.log(change);
            }
        }
        register.change = change;
        //console.log(register.change)
        return register.change;
    }

    getChange(changeDue, cid);
    let totalCashback = register.change.slice(0).map(function (value, index) {
        return value[1];
    }).reduce((a, b) => {
        return a + b;
    });
    if (Number(changeDue) > Number(totalCID) || Number(totalCashback) < Number(changeDue)) {
        register.status = "INSUFFICIENT_FUNDS";
        register.change = [];
    } else if (Number(totalCID) == Number(changeDue)) {
        register.status = "CLOSED";
        register.change = [...cid];
    } else if (changeDue < totalCID) {
        register.status = "OPEN";
        getChange(changeDue, cid);
    }


    return register;
}
