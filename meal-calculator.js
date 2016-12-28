var Dish = function(cost,name) {
    this.name = name;
    this.cost = cost;
}

var salad = new Dish(2, "Salad");
var soup = new Dish(5, "Soup");
var breadsticks = new Dish(1, "Breadsticks")



var Diner = function(dishes1,dishes2 ,name) {
    this.name = name;
    this.dishes1 = dishes1;
    this.dishes2 = dishes2;
    var totalTax = 0
    this.taxes = function() {
        for (var i = 0; i < 1 ; i++){
            totalTax = totalTax + ((dishes1.cost+dishes2.cost) * 5) / 100
            return totalTax;
        };
    }
    var totalTip = 0
    this.tip = function() {
        for (var i = 0; i < 1 ; i++){
            totalTip = totalTip + ((dishes1.cost+dishes2.cost) * 20) / 100
            return totalTip;
        }
    }
    var totalCost = 0
    this.totalCost = function() {
        for (var i = 0; i < 1 ; i++){
            // console.log(dishes1)
            totalCost = totalCost + (dishes1.cost+dishes2.cost)
            return totalCost;
        }
    }
};



var mike = new Diner(salad,soup,"Mike")
var david = new Diner(salad,breadsticks, "David")
var steven = new Diner(soup,breadsticks, "Steven")
// console.log(mike.tip())

var Bill = function(dinerCost, dinerTax, dinerTip) {
    this.dinerCost=dinerCost;
    this.dinerTax=dinerTax;
    this.dinerTip=dinerTip;
}

var bill = new Bill([mike.totalCost(),david.totalCost(),steven.totalCost()],[mike.taxes(),david.taxes(),steven.taxes()],[mike.tip(),david.tip(),steven.tip()])

console.log (bill)
