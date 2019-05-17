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

// router.put("/update", (req, res) => {
//     console.log("Updating: ", req.body.updatedMeal);

//     connection.query(`
//         UPDATE meals SET
//         meal = '${req.body.updatedMeal.meal}',
//         prep_time = '${req.body.updatedMeal.prep_time}',
//         ingred1 = '${req.body.updatedMeal.ingred1}',
//         ingred2 = '${req.body.updatedMeal.ingred2}',
//         ingred3 = '${req.body.updatedMeal.ingred3}',
//         ingred4 = '${req.body.updatedMeal.ingred4}',
//         ingred5 = '${req.body.updatedMeal.ingred5}',
//         ingred6 = '${req.body.updatedMeal.ingred6}',
//         ingred7 = '${req.body.updatedMeal.ingred7}',
//         ingred8 = '${req.body.updatedMeal.ingred8}'
//         WHERE user_id = '${req.body.uid}'
//         AND id = '${req.body.updatedMeal.id}';`, (err, data) => {
//             if (err) throw err;
//             res.send(data);
//         })
// });

// router.delete("/delete/:uid/:meal_id", (req, res) => {
//     console.log("Deleting meal: ", req.params)
//     connection.query(`
//     DELETE FROM meals
//     WHERE user_id = '${req.params.uid}'
//     AND id = '${req.params.meal_id}';`, (err, data) => {
//         if (err) throw err;
//         res.send(data);
//     })
// })


module.exports = router;
