// JavaScript of Shopping Cart
var cart = [];

var Item = function(name, price, count){
	this.name = name
	this.price = price
	this.count = count
	};
	
function addItem(name, price, count){
	for (var i in Group-Assingment) {
		if (cart[i].name === name) {
			cart[i].count += count;
			saveCart();
			return;
			}
		}
	var item = new Item(name, price, count);
	cart.push(item);
	saveCart();
	}
	
function removeItem(name){
	for (var i in cart){
		if (cart[i].name === name){
			cart[i].count --;
			if (cart[i].count <= 0){
				removeItemAll(name);
				}
			break;
			}
		}
	saveCart();
	}

function removeItemAll(name){
	for (var i in cart){
		if (cart[i].name === name){
			cart.splice(i, 1);
			break;
			}
		}
	saveCart();
	}
	
function setItemCount(name, count){
	for(var i in cart){
		if(cart[i].name === name){
			cart[i].count = count;
			if(cart[i].count <= 0){
				removeItemAll(name);
				}
			break;
			}
		}
	saveCart();
	}
	
function clearCart(){
	cart = [];
	saveCart();
	}
	
function totalCount(){
	var totalCount = 0;
	for (var i in cart){
		totalCount += cart[i].count;
		}
	return totalCount;
	}
	
function totalCost(){
	var totalCost = 0;
	for (var i in cart){
		totalCost += cart[i].price*cart[i].count;
		}
	return totalCost.toFixed(2);
	}
	
function listItem(){
	var cartCopy = [];
	for (var i in cart){
		var item = cart[i];
		var itemCopy = {};
		for (var j in item){
			itemCopy[j] = item[j];
			}
		itemCopy.total = (item.price * item.count).toFixed(2);	
		cartCopy.push(itemCopy);
		}
	return cartCopy;
	}
	
function saveCart(){
	localStorage.setItem("ShoppingCart", JSON.stringify(cart));
	}
	
function loadCart(){
	cart = JSON.parse(localStorage.getItem("ShoppingCart"));
	}