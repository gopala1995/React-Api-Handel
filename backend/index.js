import express, { query } from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 29.99,
      image: "https://example.com/images/wireless-mouse.jpg",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 59.99,
      image: "https://example.com/images/mechanical-keyboard.jpg",
    },
    {
      id: 3,
      name: "USB-C Hub",
      price: 39.99,
      image: "https://example.com/images/usb-c-hub.jpg",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 49.99,
      image: "https://example.com/images/bluetooth-speaker.jpg",
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 24.99,
      image: "https://example.com/images/laptop-stand.jpg",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((el) =>
      el.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Listening on port", port);
});
