const product =[
    {
        id:0,
        image:'images/germanShepard.jpg',
        title:'German Shepard',
        price:120,
    },
    {
        id:1,
        image:'images/Golden_retriever.jpg',
        title: 'Golden retriever',
        price:230,
    },
    {
        id:2,
        image:'images/germanShepard.jpg',
        title: 'German Shepard',
        price:230,
    },
    {
        id:3,
        image:'images/germanShepard.jpg',
        title: 'German Shepard',
        price:230,
    },
    {
        id:4,
        image:'images/germanShepard.jpg',
        title: 'German Shepard',
        price:230,
    },
    {
        id:5,
        image:'images/germanShepard.jpg',
        title: 'German Shepard',
        price:230,
    },
    {
        id:6,
        image:'images/Husky.jpg',
        title: 'Husky',
        price:230,
    },

];


const categories =[... new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var {image,title,price}=item;
        return(
           `<div class='box'>
                <div class='img-box'>
                    <img class='images'src=${image}></img>
                </div>
            
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}</h2>`+
            "<button onclick='addtocart(" + i + ")'>Add to cart</button>" +
            `</div>
            </div>`
        )

    }).join('')
    var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart(a);
}

function displaycart(a){
    let j=0;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty"
        document.getElementById("total").innerHTML="$"+0;
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$"+total;
            return(
                `<div class='cart-item'>
               
                <p style-'font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++)+")'></i></div>"
            )
        }).join('');
    }
}
