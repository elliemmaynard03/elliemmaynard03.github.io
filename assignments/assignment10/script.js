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
        
    }

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

}
