const name1 = [
    "Spartan ",
    "Captain ",
    "Major ",
    "Colonel ",
    "General ",
    "Marshall ",
    "Bubbly ",
    "Silly ",
    "Spunky ",
    "Zane ",
    "Cheeky ",
    "Quirky ",
    "Giggle ",
    "Whimsical ",
    "Bouncy ",
    "Mischievous ",
    "Witty ",
    "Snappy ",
    "Jazzy ",
    "Vibey ",
    "Hype ",
    "Sassy ",
    "Sparkly ",
    "Juice ",
    "Senior ",
    "Cloud ",
    "Dark ",
    "Master ",
    "Guardian ",
    "Genius ",
    "Veteran "]
const name2 = [
    "Tent ",
    "Bag ",
    "Backpack ",
    "Lantern ",
    "Campfire ",
    "Flashlight ",
    "Canteen ",
    "Cooler ",
    "Marshmallow Stick ",
    "Camp ",
    "Hammock ",
    "Compass ",
    "Map ",
    "Blanket ",
    "Match ",
    "Truffle ",
    "Duck ",
    "Foie Gras ",
    "Caviar ",
    "Prosciutto ",
    "Burrata ",
    "Saffron ",
    "Miso ",
    "Tank ",
    "Heirloom",
    "Black",
    "Fresh",
    "Crème",
    "Aioli ",
    "Lavender ",
    "Clover "]

document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    function getRandomNum1() {
        num1 = Math.floor(Math.random() * 31)
        document.querySelector('#firstName').innerText = name1[num1]
    }
    getRandomNum1()

    function getRandomNum2() {
        num2 = Math.floor(Math.random() * 31)
        document.querySelector('#lastName').innerText = name2[num2]
    }
    getRandomNum2()
};
