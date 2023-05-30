let aboutus = [
    {
      Cat: "About us",
      discription: `Welcome to Fashion Diablo's, your ultimate destination for all things fashion and style!
       We are a premier online boutique dedicated to bringing you the latest trends and timeless classics
        that will enhance your personal style and elevate your wardrobe. At Fashion Diablo's, we 
        believe that fashion is a form of self-expression and we are passionate about helping you discover your 
        unique fashion identity.`,
      
    },
    {
      Cat: "Our Vision",
      discription: `At Fashion Diablo's, our vision is to inspire and empower individuals to embrace their inner
       fashionista and confidently express themselves through their personal style. We strive to be at the 
       forefront of the fashion industry, constantly exploring new trends and innovative designs.`,
      
    },
  ];
let aboutSec = document.querySelector("#Aboutus");
aboutus.forEach((data) => {
    if (data.Cat == "About us") {
        aboutSec.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3>
              <div class="card" style="width:250px;" >
                  <div class="card-body">
                  <h6 class="display-">${data.Cat}</h6>
                  <p class="text-black">${data.discription}</p>
                  </div>
            </div>
          </div>`;
    }
});
  
aboutus.forEach((data) => {
    if (data.Cat == "Our Vision") {
        aboutSec.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4 col-lg-3>
              <div class="card" style="width:250px;" >
                  <div class="card-body">
                  <h6 class="display-">${data.Cat}</h6>
                  <p class="text-black">${data.discription}</p>
                  </div>
            </div>
          </div>`;
    }
});
  