class Toy {
    constructor(title, price, age, rating, pic) {
        this.title = title;
        this.price = price;
        this.age = age;
        this.rating = rating;
        this.pic = pic;
    }

    get details() {
        const section = document.createElement("section");
        section.classList.add("toy");

        const info = document.createElement("section");
        info.classList.add("toy-details");
        // info.classList.add("hidden");
        section.append(info);

        const images = document.createElement("section");
        section.append(images);

    
        const pic = document.createElement("img");
        pic.innerHTML = this.pic;
        images.append(pic);

        const title = document.createElement("p");
        title.innerHTML = this.title;
        info.append(title);

        const price = document.createElement("p");
        price.innerHTML = this.price;
        info.append(price);

        const rating = document.createElement("p");
        rating.innerHTML = this.rating;
        info.append(rating);
       
        section.append(this.picture(this.pic));

        return section;
        }

        picture(info) {
            const pic = document.createElement("img");
            pic.classList.add("image");
            pic.src = info;
            return pic;
        }
        

        //const h3 = document.createElement("h3");
        //h3.innerHTML = this.title;
        //section.append(h3);

        //add the information and give it a class list of hidden
      
       
    }

   

    // const getToyItem = (toy) => {
    //     //now you can show the infomraiton
    //     info.classList.remove("hidden")
    // }



window.onload = () => {
    const toys = [];
    toys.push(new Toy("Barbie", "$25.00", "7-10", "8 stars", "images/barbie.png"));
    toys.push(new Toy("Doll House", "$50.00", "7-10", "8 stars", "images/dollhouse.png"));
    toys.push(new Toy("Playground", "$100.00", "6-12", "10 stars", "images/playground.png"));
    toys.push(new Toy("Sandbox", "$90.00", "4-10", "5 stars", "images/sandbox.png"));
    toys.push(new Toy("Soccer Ball", "$10.00", "any age", "9 stars", "images/soccerball.png"));
    toys.push(new Toy("Tricycle", "$35.00", "3-5", "5 stars", "images/tricycle.png"));
    const toyList = document.getElementById("toy-list");
    //loop through and display them
    toys.forEach(toy => {
        toyList.append(toy.details);

    });
    // document.getElementById("image").onmouseover = () => {
    //     getToyItem(this);
    //     return section;
    // }
}


// class Toy {
//     constructor(title, price, age, rating, pic)
//             {
//                 this.title = title;
//                 this.price = price;
//                 this.age = age;
//                 this.rating = rating;
//                 this.pic = pic;
//             }

//     get item() {
//         const section = document.createElement("section");
//         section.classList.add("toy");


//         const ul = document.createElement("ul");
//         section.append(ul);
//         ul.append(this.listItem(this.title));
//         ul.append(this.listItem(this.price));
//         ul.append(this.listItem(this.rating));
//         ul.append(this.listItem("age range: " + this.age));

//         section.append(this.picture(this.pic));

//         return section;
//     }

//     picture(info) {
//         const pic = document.createElement("img");
//         pic.classList.add("image");
//         pic.src = info;
//         return pic;
//     }

//     listItem(info) {
//         const li = document.createElement("li");
//         li.classList.add("toy-details");
//         li.textContent = info;
//         return li;
//     }

    
// }


// const showToys = () => {
//     const toyList = document.getElementById("toy-list");
   
//     const toys = [];
//     toys.push(new Toy("Barbie", "$25.00", "7-10", "8 stars", "images/barbie.png"));
//     toys.push(new Toy("Doll House", "$50.00", "7-10", "8 stars", "images/dollhouse.png"));
//     toys.push(new Toy("Playground", "$100.00", "6-12", "10 stars", "images/playground.png"));
//     toys.push(new Toy("Sandbox", "$90.00", "4-10", "5 stars", "images/sandbox.png"));
//     toys.push(new Toy("Soccer Ball", "$10.00", "any age", "9 stars", "images/soccerball.png"));
//     toys.push(new Toy("Tricycle", "$35.00", "3-5", "5 stars", "images/tricycle.png"));
   
//     toys.forEach(toy => {
//         toyList.append(toy.item);
//     });
  
    
//     /*const dog = new Dog("fred", "rotwiler", "brow", 4, "lg", "sdfsd");

//     for (let i in dogs) {
//         console.log(dogs[i].title);
//     }*/

   
    
// };

// const showDetails = () => {
//     document.getElementById("li").classList.add("hidden");
// }


// window.onload = () => {
//     showToys();
//     document.getElementById("image").onclick = showDetails;
//     console.log("hi");
// }