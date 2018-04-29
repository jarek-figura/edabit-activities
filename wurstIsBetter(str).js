function wurstIsBetter(str) {
  return str.replace(/(Kielbasa|Chorizo|Moronga|Salami|Sausage|Andouille|Naem|Merguez|Gurka|Snorkers|Pepperoni)/ig, 'Wurst');
}

console.log(wurstIsBetter("Sausage fests are like salami fests"));  //, "Wurst fests are like Wurst fests")
console.log(wurstIsBetter("Add the kielbasa and the reserved potatoes and stir through"));  //, "Add the Wurst and the reserved potatoes and stir through")
console.log(wurstIsBetter("Salami sandwiches, salami and cheese, salami on crackers— I couldn't get enough of the salty, spicy sausage"));  //, "Wurst sandwiches, Wurst and cheese, Wurst on crackers— I couldn't get enough of the salty, spicy Wurst")
console.log(wurstIsBetter("sich die Wurst vom Brot nehmen lassen"));  //, "sich die Wurst vom Brot nehmen lassen")
console.log(wurstIsBetter("Bratwurst and Rostbratwurst is a sausage made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce."));  //, "Bratwurst and Rostbratwurst is a Wurst made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.")
console.log(wurstIsBetter("Il n’arrête pas de faire l’andouille")); //, "Il n’arrête pas de faire l’Wurst")
console.log(wurstIsBetter("Naem is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam"));  //, "Wurst is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam")
console.log(wurstIsBetter("The chipper group over at Orangatang recently dropped another wheel sensation; the Moronga")); //, "The chipper group over at Orangatang recently dropped another wheel sensation; the Wurst")