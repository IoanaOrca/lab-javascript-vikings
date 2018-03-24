// Soldier
function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
}


Soldier.prototype.attack = function () {
    return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
    this.health -= damage;
}

// Viking

function Viking(nameArg, healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);

    this.name = nameArg;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;

    if (this.health > 0 ){
        return (viking.name + ' has received ' + damage + ' points of damage');
    }
    else {
        return (viking.name + ' has died in act of combat');
    }
}

Viking.prototype.battleCry = function () {
    return "Odin Owns You All!";
}
var name     = "Harald";
var strength = 150;
var health   = 300;

viking = new Viking(name, health, strength);

// Saxon
function Saxon(healthArg,strengthArg) { 
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;

    if (this.health > 0 ){
        return ('A Saxon has received ' + damage + ' points of damage');
    }
    else {
        return ('A Saxon has died in combat');
    }
}
var health   = 60;
var strength = 25;

saxon = new Saxon(health,strength);
// War
function War() { }
