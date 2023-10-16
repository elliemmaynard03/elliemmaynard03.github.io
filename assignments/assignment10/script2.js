class Toy {
    constructor(title, price, age, rating, pic)
            {
                this.title = title;
                this.price = price;
                this.age = age;
                this.rating = rating;
                this.pic = pic;
            }

    get item() {
        const section = document.createElement("section");
        section.classList.add("toy");


        const ul = document.createElement("ul");
        section.append(ul);
        ul.append(this.listItem(this.title));
        ul.append(this.listItem(this.price));
        ul.append(this.listItem(this.rating));
        ul.append(this.listItem("age range: " + this.age));

        section.append(this.picture(this.pic));

        return section;
    }

    picture(info) {
        const pic = document.createElement("img");
        pic.classList.add("image");
        pic.src = info;
        return pic;
    }

    listItem(info) {
        const li = document.createElement("li");
        li.classList.add("toy-details");
        li.textContent = info;
        return li;
    }

    
}


const showToys = () => {
    const toyList = document.getElementById("toy-list");
   
    const toys = [];
    toys.push(new Toy("Barbie", "$25.00", "7-10", "8 stars", "images/barbie.png"));
    toys.push(new Toy("Doll House", "$50.00", "7-10", "8 stars", "images/dollhouse.png"));
    toys.push(new Toy("Playground", "$100.00", "6-12", "10 stars", "images/playground.png"));
    toys.push(new Toy("Sandbox", "$90.00", "4-10", "5 stars", "images/sandbox.png"));
    toys.push(new Toy("Soccer Ball", "$10.00", "any age", "9 stars", "images/soccerball.png"));
    toys.push(new Toy("Tricycle", "$35.00", "3-5", "5 stars", "images/tricycle.png"));
   
    toys.forEach(toy => {
        toyList.append(toy.item);
    });
  
    
    /*const dog = new Dog("fred", "rotwiler", "brow", 4, "lg", "sdfsd");

    for (let i in dogs) {
        console.log(dogs[i].title);
    }*/

   
    
};

const showDetails = () => {
    document.getElementById("li").classList.add("hidden");
}


window.onload = () => {
    showToys();
    document.getElementById("image").onclick = showDetails;
    console.log("hi");
}