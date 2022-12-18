export default function handler(req, res) {
    const { email } = JSON.parse(req.body);
    return new Promise((resolve, reject) => {
        fetch(
            `https://xi50fsvldc.execute-api.us-east-1.amazonaws.com/default/seoSiteEmails`,
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.API_GATEWAY_KEY
                },
                body: JSON.stringify({'email': email})
            }
        ).then((r) => {
            res.status(r.status).json(r.body);
            resolve();
        });
    });
  }


