let orderCount =0;
var hi = document.querySelector(".hi");
const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06 ;
}; 
const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
  
};
console.log(getSubTotal(orderCount));
console.log(getTotal());



function saif1(){
	alert(getSubTotal(orderCount));
	hi.innerHTML= (getSubTotal(orderCount));
	
}
