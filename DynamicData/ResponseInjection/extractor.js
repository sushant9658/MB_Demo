module.exports = {
    extractor: function extractCIFAndPackageID(request) {
        if (request && request.path) {
            var req = request.path.split('/');
            if (req.length > 2 && req[1]) {
                return { CustomerID: req[req.length - 1] }
            }
        }
        return null;
    }
}

for (var i = 0; i < accountLength; i++) {
        const accountID = accountRef[i][`AcctRef`][`AcctInfo`][`AcctIdent`][0][`AcctIdentValue`]._text;
        const accountRefernce= accountRef[i][`AcctRef`];
        const IncBal= accountRef[i][`IncExtBal`];
        const data = csvJSONFile.find(obj => obj.AcctId === accountID);
        console.log(data);
        if (data) {
            var balRecForFound = JSON.parse(JSON.stringify(balRecForFound));
            balRecForFound[`BalInfo`][`AcctRef`] = accountRefernce;
            balRecForFound[`BalInfo`][`IncExtBal`] = IncBal;
            balRecForFound[`BalInfo`][`AcctBal`][0][`CurAmt`][`Amt`]._text = data.Current;
            balRecForFound[`BalInfo`][`AcctBal`][0][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][1][`CurAmt`][`Amt`]._text = data.Avail;
            balRecForFound[`BalInfo`][`AcctBal`][1][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][2][`CurAmt`][`Amt`]._text = data.CreditLimit;
            balRecForFound[`BalInfo`][`AcctBal`][2][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][3][`CurAmt`][`Amt`]._text = data.Ledger;
            balRecForFound[`BalInfo`][`AcctBal`][3][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][4][`CurAmt`][`Amt`]._text = data.OpeningAvail;
            balRecForFound[`BalInfo`][`AcctBal`][4][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][5][`CurAmt`][`Amt`]._text = data.IntBal;
            balRecForFound[`BalInfo`][`AcctBal`][5][`EffDt`]._text = timestamp;
            balRecForFound[`BalInfo`][`AcctBal`][6][`CurAmt`][`Amt`]._text = data.AvailableFund;
            balRecForFound[`BalInfo`][`AcctBal`][6][`EffDt`]._text = timestamp;
            balRecForFound[`BalStatus`][`BalStatusCode`]._text = data.BalStatusCode;
            balRecForFound[`AcctStatus`][`AcctStatusCode`]._text = data.AcctStatusCode;
            balRec = [...balRec, ...[balRecForFound]];           
            console.log(balRecForFound[`BalInfo`][`AcctRef`][`AcctInfo`][`AcctIdent`][0][`AcctIdentValue`]._text );          
            isFound = isFound+1;
        } else {
            var balRecForNotFound = JSON.parse(JSON.stringify(balRecForNotFound));
            balRecForNotFound[`BalInfo`][`AcctRef`] = accountRefernce;
            balRecForNotFound[`BalInfo`][`IncExtBal`] = IncBal;
            balRecForNotFound[`BalStatus`][`BalStatusCode`]._text = "NotAvail";
            balRecForNotFound[`AcctStatus`][`AcctStatusCode`]._text = "Closed";
            balRec = [...balRec, ...[balRecForNotFound]]
        }
    }

/* added today */

let accountRef = reqjs["soapenv:Envelope"][`soapenv:Body`][`a:BalInqRq`][`BalRef`];   
    if(!Array.isArray(accountRef) ) {
        accountRef = [accountRef];
    };
    const accountLength = accountRef.length;
    console.log(accountLength);

    let balRec = [];
    let isFound = 0;
