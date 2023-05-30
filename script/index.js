let products = [
  {
    pic: "https://i.postimg.cc/gkYdFR29/man-letter-detail-jacket.webp",
    discription: `Men letter detail jacket`,
    price: `R350`,
    Cat: "jacket",
  },
  {
    pic: "https://i.postimg.cc/FFWRpNvX/men-graphic-varsity-jacket-without-woodie.webp",
    discription: `men graphic varsity jacket`,
    price: `R400`,
    Cat: "jacket",
  },
  {
    pic: "https://i.postimg.cc/G2DWyPbp/north-face-puffer-jacket.webp",
    discription: `north-face-puffer-jacket`,
    price: `R 2 000,99`,
    Cat: "jacket",
  },
  {
    pic: "https://i.postimg.cc/QtVtGygy/mens-taupe-shacket.webp",
    discription: `mens taupe shacket`,
    price: `R 399,99`,
    Cat: "jacket",
  },
  {
    pic: "https://i.postimg.cc/ncNr6DkG/daniel-hector-check-shirt.jpg",
    discription: `check daniel hector shirt `,
    price: `R 369.99`,
    Cat: "shirt",
  },
  {
    pic: "https://i.postimg.cc/gjJyBZDP/denim-1-shirt.jpg",
    discription: `mens autumn denim shirt`,
    price: `R 299,99`,
    Cat: "shirt",
  },
  {
    pic: "https://i.postimg.cc/yx4S4p0B/mens-faded-denim-shirt.webp",
    discription: ` mens-faded-denim-shirt `,
    price: `R 499,99`,
    Cat: "shirt",
  },
  {
    pic: "https://i.postimg.cc/wxby5v1L/longline-boyfriend-denim-shirt.jpg",
    discription: `longline-boyfriend-denim-shirt `,
    price: `R 349,99`,
    Cat: "shirt",
  },
  {
    pic: "https://i.postimg.cc/LsnLF1g9/men-ripped-slim-straight-jeans.webp",
    discription: `men-ripped-slim-straight-jeans`,
    price: `R 699.99`,
    Cat: "pants",
  },
  {
    pic: "https://i.postimg.cc/KY6kXsyf/men-skinny-jeans.webp",
    discription: ` men-skinny-jeans. `,
    price: `R 360,99 `,
    Cat: "pants",
  },
  {
    pic: "https://i.postimg.cc/pXsBNxcB/tuxedo-black-trouser.png",
    discription: `tuxedo-black-trouser `,
    price: `R 1 999,99 `,
    Cat: "pants",
  },
  {
    pic: "https://i.postimg.cc/9QvZVfdy/woman-patch-pocket-crotch-hem-slip-jumpsuit.webp",
    discription: `woman-patch-pocket-crotch-hem-slip-jumpsuit `,
    price: `R 699,99 `,
    Cat: "pants",
  },
  {
    pic: "https://i.postimg.cc/RFCcpD1Y/female-vans.jpg",
    discription: `female-vans `,
    price: ` R 399,99`,
    Cat: "shoes",
  },
  {
    pic: "https://i.postimg.cc/vZLxRvmw/female-white-casual-shoe.jpg",
    discription: `female-white-casual-shoe`,
    price: `R 499,99 `,
    Cat: "shoes",
  },
  {
    pic: "https://i.postimg.cc/vH5v0jpQ/nike.png",
    discription: `nike`,
    price: `R 999,99 `,
    Cat: "shoes",
  },
  {
    pic: "https://i.postimg.cc/y8vc5znz/le-coq-sportif.jpg",
    discription: `le-coq-sportif`,
    price: ` R 799,99 `,
    Cat: "shoes",
  },
];

let productsSec = document.querySelector("#products .row");
products.forEach((data) => {
  if (data.Cat == "shirt") {
    productsSec.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex pb-3">
            <div class="card" style="width:250px;" >
                <img class="card-img-top" style="width:250px; height: 300px !important" src="${data.pic}" alt="Card image">
                <div class="card-body">
                <h6 class="display-">${data.discription}</h6>
                <p class="text-black">${data.price}</p>
                <a href="#" class="btn btn-primary w-100">Add To Cart</a>
            </div>
        </div>`;
  }
});
products.forEach((data) => {
  if (data.Cat == "jacket") {
    productsSec.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex pb-3">
        <div class="card" style= "width:250px">
            <img class="card-img-top img-fluid" style="width:250px; height: 300px !important" src="${data.pic}" alt="Card image">
            <div class="card-body">
                <h6 class="display-">${data.discription}</h6>
                <p class="text-black">${data.price}</p>
                <a href="#" class="btn btn-primary w-100">Add To Cart</a>
            </div>
          </div>
        </div>`;
  }
});
products.forEach((data) => {
  if (data.Cat == "pants") {
    productsSec.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex pb-3">
            <div class="card" style= "width:250px">
                <img class="card-img-top img-fluid" style="width:250px; height: 300px !important" src="${data.pic}" alt="Card image">
                <div class="card-body">
                    <h6 class="display-">${data.discription}</h6>
                    <p class="text-black">${data.price}</p>
                    <a href="#" class="btn btn-primary w-100">Add To Cart</a>
                </div>
            </div>
        </div>`;
  }
});
products.forEach((data) => {
  if (data.Cat == "shoes") {
    productsSec.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center d-flex pb-3">
            <div class="card" style= "width:250px">
                <img class="card-img-top img-fluid" style="width:250px; height: 300px !important" src="${data.pic}" alt="Card image">
                <div class="card-body">
                    <h6 class="display-">${data.discription}</h6>
                    <p class="text-black">${data.price}</p>
                    <a href="#" class="btn btn-primary w-100">Add To Cart</a>
                </div>
            </div>
        </div>`;
  }
});

