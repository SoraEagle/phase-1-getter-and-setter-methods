/*
Define getter methods for diameter, circumference, and area (calculate each value using this.radius and pi).

Define setter methods for diameter, circumference, area which will accept values for each calculation, 
    calculate radius based on input value and set this.radius accordingly.

All instances should be able to set this.radius by setting value to diameter, circumference, or area.
*/
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    //Methods
    static pi(){
        return Math.PI;
    }

    set diameter(diameter){ //Set diameter's value.
        this.radius = diameter / 2;
    }

    set circumference(circumference){ //Set circumference's value.
        this.radius = circumference / 2 / Circle.pi();
    }

    set area(area){ //Set area's value.
        this.radius = Math.sqrt(area / Circle.pi());
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return Math.PI * (this.radius * 2);
    }

    get area(){
        return Circle.pi() * Math.pow(this.radius, 2);
    }
}