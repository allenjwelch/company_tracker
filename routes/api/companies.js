const router = require("express").Router();
var connection = require("../../config/connection.js");

// Completes api path to .../xxx/comp/...
router.get("/all", (req, res) => {
    console.log("Companies API has been hit");
    // console.log(req);
    // console.log(req.params);
    // console.log("uid:" , req.params.uid);

    connection.query(`
        SELECT *
        FROM tracker.companies;`, function(err, data) {
        if (err) throw err;
        // console.log(data);
        res.send(data);
    });
});

router.post('/new', (req, res) => {
    //CURRENTLY DOES NOT CHECK FOR DUPLICATES
    console.log("POST company data: ", req.body)

    connection.query(`
        INSERT INTO companies(name, status, description, street_address, city, state, phone, contact_name, contact_phone, financial_revenue_total, financial_revenue_expected, financial_earnings_year_1, financial_earnings_income_1, financial_earnings_year_2, financial_earnings_income_2, financial_earnings_year_3, financial_earnings_income_3, financial_earnings_year_4, financial_earnings_income_4) VALUES (
            '${req.body.compInfo.name}',
            '${req.body.compInfo.status}',
            '${req.body.compInfo.description}',
            '${req.body.compInfo.street_address}',
            '${req.body.compInfo.city}',
            '${req.body.compInfo.state}',
            '${req.body.compInfo.phone}',
            '${req.body.compInfo.contact_name}',
            '${req.body.compInfo.contact_phone}',
            '${req.body.compInfo.financial_revenue_total}',
            '${req.body.compInfo.financial_revenue_expected}',
            '${req.body.compInfo.financial_earnings_year_1}',
            '${req.body.compInfo.financial_earnings_income_1}',
            '${req.body.compInfo.financial_earnings_year_2}',
            '${req.body.compInfo.financial_earnings_income_2}',
            '${req.body.compInfo.financial_earnings_year_3}',
            '${req.body.compInfo.financial_earnings_income_3}',
            '${req.body.compInfo.financial_earnings_year_4}',
            '${req.body.compInfo.financial_earnings_income_4}');`, (err, data) => {
        if (err) throw err;
        res.send(data);

    })
})

router.put("/update", (req, res) => {
    console.log("Updating: ", req.body.compUpdate);

    connection.query(`
        UPDATE companies SET
        name = '${req.body.compUpdate.name}',
        status = '${req.body.compUpdate.status}',
        description = '${req.body.compUpdate.description}',
        street_address = '${req.body.compUpdate.street_address}',
        city = '${req.body.compUpdate.city}',
        state = '${req.body.compUpdate.state}',
        phone = '${req.body.compUpdate.phone}',
        contact_name = '${req.body.compUpdate.contact_name}',
        contact_phone = '${req.body.compUpdate.contact_phone}',
        financial_revenue_total = '${req.body.compUpdate.financial_revenue_total}',
        financial_revenue_expected = '${req.body.compUpdate.financial_revenue_expected}',
        financial_earnings_year_1 = '${req.body.compUpdate.financial_earnings_year_1}',
        financial_earnings_income_1 = '${req.body.compUpdate.financial_earnings_income_1}',
        financial_earnings_year_2 = '${req.body.compUpdate.financial_earnings_year_2}',
        financial_earnings_income_2 = '${req.body.compUpdate.financial_earnings_income_2}',
        financial_earnings_year_3 = '${req.body.compUpdate.financial_earnings_year_3}',
        financial_earnings_income_3 = '${req.body.compUpdate.financial_earnings_income_3}',
        financial_earnings_year_4 = '${req.body.compUpdate.financial_earnings_year_4}',
        financial_earnings_income_4 = '${req.body.compUpdate.financial_earnings_income_4}'
        WHERE id = '${req.body.compUpdate.id}';`, (err, data) => {
            if (err) throw err;
            res.send(data);
        })
});

router.delete("/byefelicia/:id/", (req, res) => {
    console.log("Deleting company: ", req.params)
    connection.query(`
    DELETE FROM companies
    WHERE id = '${req.params.id}';`, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})


module.exports = router;
