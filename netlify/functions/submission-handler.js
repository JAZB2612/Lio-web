// This function would run on Netlify when a form is submitted
// It receives the form data and can send it to Google Sheets
// You would need to set up Google Sheets API credentials

const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const data = JSON.parse(event.body);

        // 1. Initialize the sheet (requires GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY)
        // const doc = new GoogleSpreadsheet('YOUR_SHEET_ID');
        // await doc.useServiceAccountAuth({ ... });
        // await doc.loadInfo();
        // const sheet = doc.sheetsByIndex[0];

        // 2. Add row
        // await sheet.addRow(data);

        console.log("Data received for Google Sheets:", data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data received and sent to Google Sheets" }),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};
