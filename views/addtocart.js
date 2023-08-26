const product = [
  {
    id: 0,
    image: "images/germanShepard.jpg",
    title: "German Shepard",
    price: 120,
  },
  {
    id: 1,
    image: "images/Golden_retriever.jpg",
    title: "Golden retriever",
    price: 230,
  },
  {
    id: 2,
    image: "images/germanShepard.jpg",
    title: "German Shepard",
    price: 230,
  },
  {
    id: 3,
    image: "images/germanShepard.jpg",
    title: "German Shepard",
    price: 230,
  },
  {
    id: 4,
    image: "images/germanShepard.jpg",
    title: "German Shepard",
    price: 230,
  },
  {
    id: 5,
    image: "images/germanShepard.jpg",
    title: "German Shepard",
    price: 230,
  },
  {
    id: 6,
    image: "images/Husky.jpg",
    title: "Husky",
    price: 230,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

document.getElementById("root").innerHTML = categories
  .map((item, index) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
                <div class='img-box'>
                    <img class='images'src=${image}></img>
                </div>

            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}</h2>` +
      "<button onclick='addtocart(" +
      index +
      ")'>Add to cart</button>" +
      `</div>
            </div>`
    );
  })
  .join("");
var cart = [];

function addtocart(a) {
  axios
    .post("http://localhost:8080/cart", {
      product_name: categories[a].title,
      price: categories[a].price,
      username: "anuj.mani",
    })
    .then(function (response) {
      console.log(response);
      alert(response.data);
      window.location.reload();
    })
    .catch(function (err) {
      alert(err);
    });
  cart.push({ ...categories[a] });
  displaycart();
}
