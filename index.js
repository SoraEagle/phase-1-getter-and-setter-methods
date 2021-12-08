// Add your Circle class here
/*
Define getter methods for diameter, circumference, and area (calculate each value using this.radius and pi)

Define setter methods for diameter, circumference, area which will accept values for each calculation, 
    calculate the radius based on the input value and set this.radius accordingly

All instances should be able to set this.radius by setting a value to diameter, circumference, or area*/
/*
//Formulas to convert diameter, circumference, and area (in order) to radius:
radius = diameter / 2; 
radius = circumference / 2 / Math.PI
radius = area / radius / Math.PI
*/

class Circle{
    //Private properties?

    constructor(radius){
        this.radius = radius;
    }
    //Methods
    //Setter methods:
    set diameter(diameter){ //Set diameter's value.
        this.diameter = diameter;
    }

    set circumference(circumference){ //Set circumference's value.
        this.circumference = circumference;
    }

    set area(area){ //Set area's value.
        this.area = area;
    }

    //Getter methods:
    get diameter(){
        return this.diameter = this.radius * 2;
    }

    get circumference(){
        return this.circumference = Math.PI * (this.radius * 2);
    }

    get area(){
        return this.area = Circle.pi * Math.pow(this.radius, 2);
    }

    //
}