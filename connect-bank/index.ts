import axios from "axios";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 8080 || process.env.PORT;
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello Welcome to Jamali Pay connect bank API");
});

app.get("/institutions", getInstitutions);

async function getInstitutions(req: Request, res: Response) {
  await axios
    .get("https://api.yapily.com/institutions", {
      auth: {
        username: "39577cea-df63-40d1-a68e-8e61837ca55a",
        password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
      },
    })
    .then(({ data }) => res.send(data.data));
}

async function createUserAuthorization() {
  const response = await axios.post(
    "https://api.yapily.com/account-auth-requests",
    {
      applicationUserId: "test@gmail.com",
      institutionId: "modelo-sandbox",
      callback:
        "https://d0c8-2001-448a-5130-da3f-416c-2d0c-838f-4b68.ngrok-free.app/",
    },
    {
      params: {
        raw: "true",
      },
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "psu-corporate-id": "string",
        "psu-id": "string",
        "psu-ip-address": "string",
      },
      auth: {
        username: "39577cea-df63-40d1-a68e-8e61837ca55a",
        password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
      },
    }
  );
  console.log(response.data);
}

createUserAuthorization();

async function reAuthroizeAccountConsent() {
  const response = await axios.patch(
    "https://api.yapily.com/account-auth-requests",
    "",
    {
      headers: {
        Accept: "application/json;charset=UTF-8",
        consent:
          "eyJraWQiOiIwNmViZTQ1Yy1hYzU5LTRiM2MtOWY5NC03MDljMDM5ZTQxYWIiLCJhbGciOiJFUzI1NiJ9.eyJJTlNUSVRVVElPTiI6Im1vZGVsby1zYW5kYm94IiwiQ09OU0VOVCI6IjM3ZWQwYmQ2LWI1NzctNDY3YS05MDdkLWFjYzQxYjhiYjM0MyIsIkFQUExJQ0FUSU9OX1VTRVJfSUQiOiJtdWhhbW1hZDAxMzE3QGdtYWlsLmNvbSIsIlVTRVIiOiIzNmFhYmFiOS0wYTQ3LTQwZWMtYTAxMi04NDgwNmYyZmZmM2YifQ.Tn6T0rtjoRkJQMUZRrABwqOE-Av4v563W8b1ElEJDClmPzNoVTkuUCHbHGdm89Zmd4--olZhzmIvqEgqlVMucA",
        Authorization:
          "Basic Mzk1NzdjZWEtZGY2My00MGQxLWE2OGUtOGU2MTgzN2NhNTVhOkdtdUZKZ3Q0Z2NCMmh1QnVNOWVmVGRVZUJZV1pJbWIz",
      },
    }
  );

  console.log(response.data);
}

async function createPaymentAuthorization() {
  function generatePaymentIdempotencyId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const idLength = 35;
    let paymentIdempotencyId = "";

    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      paymentIdempotencyId += characters.charAt(randomIndex);
    }

    return paymentIdempotencyId;
  }
  const idempotencyId = generatePaymentIdempotencyId();
  console.log(idempotencyId);
  const response = await axios.post(
    "https://api.yapily.com/payment-auth-requests",
    {
      applicationUserId: "muhammadjufry@gmail.com",
      institutionId: "modelo-sandbox",
      callback: "https://display-parameters.com/",
      paymentRequest: {
        paymentIdempotencyId: idempotencyId,
        amount: {
          amount: 1,
          currency: "GBP",
        },
        reference: "Bill Payment",
        type: "DOMESTIC_PAYMENT",
        payee: {
          name: "Jane Doe",
          address: {
            country: "GB",
          },
          accountIdentifications: [
            {
              type: "PAN",
              identification: "1234000000000010",
            },
          ],
        },
      },
    },
    {
      params: {
        raw: "true",
      },
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "psu-corporate-id": "string",
        "psu-id": "string",
        "psu-ip-address": "string",
      },
      auth: {
        username: "39577cea-df63-40d1-a68e-8e61837ca55a",
        password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
      },
    }
  );

  console.log(response.data);
}

async function createPayment() {
  const response = await axios.post(
    "https://api.yapily.com/payments",
    {
      paymentIdempotencyId: "rPlbMFeYBKErdhkdVyOiaLA9adskbE5vHHp",
      amount: {
        amount: 1,
        currency: "GBP",
      },
      reference: "Bill Payment",
      type: "DOMESTIC_PAYMENT",
      payee: {
        name: "Jane Doe",
        address: {
          country: "GB",
        },
        accountIdentifications: [
          {
            type: "PAN",
            identification: "1234000000000010",
          },
        ],
      },
    },
    {
      params: {
        raw: "true",
      },
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        consent:
          "eyJraWQiOiIwNmViZTQ1Yy1hYzU5LTRiM2MtOWY5NC03MDljMDM5ZTQxYWIiLCJhbGciOiJFUzI1NiJ9.eyJJTlNUSVRVVElPTiI6Im1vZGVsby1zYW5kYm94IiwiQ09OU0VOVCI6ImI2NjE0NWNlLTU3MjktNGUwZC1iOGJkLWEyYzM0YTZiMDUwNSIsIkFQUExJQ0FUSU9OX1VTRVJfSUQiOiJtdWhhbW1hZGp1ZnJ5QGdtYWlsLmNvbSIsIlVTRVIiOiI5ZjVkYmE4ZS02MmIwLTQ4ZTAtOTk5YS0yM2RmZDczNDVjN2IifQ.lrYrUZmVM9koWzpo82pORGXLON5f0SSi15QJnMsfmZvkSYxnASsG7fjtEIDOzWmBQ1PM0RERfbI8PmwVzMYMiQ",
        "psu-corporate-id": "string",
        "psu-id": "string",
        "psu-ip-address": "string",
      },
      auth: {
        username: "39577cea-df63-40d1-a68e-8e61837ca55a",
        password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
      },
    }
  );
  console.log(response.data);
}

async function checkPayment() {
  const response = await axios.get(
    "https://api.yapily.com/payments/pv3-af1cb76c-8158-4fd6-ae67-d36b8c16e88f/details",
    {
      params: {
        raw: "true",
      },
      headers: {
        consent:
          "eyJraWQiOiIwNmViZTQ1Yy1hYzU5LTRiM2MtOWY5NC03MDljMDM5ZTQxYWIiLCJhbGciOiJFUzI1NiJ9.eyJJTlNUSVRVVElPTiI6Im1vZGVsby1zYW5kYm94IiwiQ09OU0VOVCI6ImI2NjE0NWNlLTU3MjktNGUwZC1iOGJkLWEyYzM0YTZiMDUwNSIsIkFQUExJQ0FUSU9OX1VTRVJfSUQiOiJtdWhhbW1hZGp1ZnJ5QGdtYWlsLmNvbSIsIlVTRVIiOiI5ZjVkYmE4ZS02MmIwLTQ4ZTAtOTk5YS0yM2RmZDczNDVjN2IifQ.lrYrUZmVM9koWzpo82pORGXLON5f0SSi15QJnMsfmZvkSYxnASsG7fjtEIDOzWmBQ1PM0RERfbI8PmwVzMYMiQ",
        "psu-corporate-id": "string",
        "psu-id": "string",
        "psu-ip-address": "string",
      },
      auth: {
        username: "39577cea-df63-40d1-a68e-8e61837ca55a",
        password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
      },
    }
  );

  console.log(response.data.data);
}

async function getAccounts() {
  const query = new URLSearchParams({ raw: "true" }).toString();

  const response = await axios.get(`https://api.yapily.com/accounts?${query}`, {
    headers: {
      Consent:
        "eyJraWQiOiIwNmViZTQ1Yy1hYzU5LTRiM2MtOWY5NC03MDljMDM5ZTQxYWIiLCJhbGciOiJFUzI1NiJ9.eyJJTlNUSVRVVElPTiI6Im1vZGVsby1zYW5kYm94IiwiQ09OU0VOVCI6IjI2NTBiOThlLWVkMTktNDNiOC04Y2RkLTdjMjcyYzAwNDZlZSIsIkFQUExJQ0FUSU9OX1VTRVJfSUQiOiJtdWhhbW1hZGp1ZnJ5QGdtYWlsLmNvbSIsIlVTRVIiOiI5ZjVkYmE4ZS02MmIwLTQ4ZTAtOTk5YS0yM2RmZDczNDVjN2IifQ.34dB975xFhs9Uyj8laxmTucjzW-Kcn2w0wJ98prURM82GpMjYpyZHMijttnWxXGhzJSjqDyCFGi5IiG9EdQoeQ",
    },
    auth: {
      username: "39577cea-df63-40d1-a68e-8e61837ca55a",
      password: "GmuFJgt4gcB2huBuM9efTdUeBYWZImb3",
    },
  });

  console.log(response.data.data[0]);
}

// getInstitutions();
// createUserAuthorization()
// reAuthroizeAccountConsent()
// createPaymentAuthorization()
// createPayment()
// checkPayment()
// getAccounts()
