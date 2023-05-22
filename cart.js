function calculateTotal() {

  var productAQuantity = parseInt(document.getElementById("productA").value) || 0;
  var productBQuantity = parseInt(document.getElementById("productB").value) || 0;
  var productCQuantity = parseInt(document.getElementById("productC").value) || 0;

  //  checkbx values
  var giftWrapA = document.getElementById("giftWrapA").checked;
  var giftWrapB = document.getElementById("giftWrapB").checked;
  var giftWrapC = document.getElementById("giftWrapC").checked;

  // Calculate totals
  var productATotal = 20 * productAQuantity;
  var productBTotal = 40 * productBQuantity;
  var productCTotal = 50 * productCQuantity;

  var subtotal = productATotal + productBTotal + productCTotal;
  var discount = 0;
  var discountName = "";

  // Discounts
  if (subtotal > 200) 
  {
    discount = subtotal * 0.1;
    discountName = "flat_10_discount";
  }
  if (productAQuantity > 10 || productBQuantity > 10 || productCQuantity > 10)
    {
    discount = (productATotal * 0.05) + (productBTotal * 0.05) + (productCTotal * 0.05);

    discountName = "bulk_5_discount";
  }
   else if (productAQuantity + productBQuantity + productCQuantity > 20) {
    discount = subtotal * 0.1;
    discountName = "bulk_10_discount";
  }
   if (
  productAQuantity + productBQuantity + productCQuantity > 30 &&
  (productAQuantity > 15 || productBQuantity > 15 || productCQuantity > 15)
) {

  var productADiscount = 0;
  var productBDiscount = 0;
  var productCDiscount = 0;

  if (productAQuantity > 15)
   {
    var productAExcess = productAQuantity - 15;
    productADiscount = productAExcess * (20 * 0.5);
  }
  if (productBQuantity > 15)
   {
    var productBExcess = productBQuantity - 15;
    productBDiscount = productBExcess * (40 * 0.5);
  }
  if (productCQuantity > 15) 
  {
    var productCExcess = productCQuantity - 15;
    productCDiscount = productCExcess * (50 * 0.5);
  }
  var tieredDiscount = productADiscount + productBDiscount + productCDiscount;

  if (tieredDiscount > discount) 
  {
    discount = tieredDiscount;
    discountName = "tiered_50_discount";
  }
}
//fees

  var shippingFee = Math.ceil((productAQuantity + productBQuantity + productCQuantity) / 10) * 5;
  var giftWrapFee = (giftWrapA ? productAQuantity : 0) + (giftWrapB ? productBQuantity : 0) + (giftWrapC ? productCQuantity : 0);

  var total = subtotal - discount + shippingFee + giftWrapFee;

  // summary 
  document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal.toFixed(2);
  document.getElementById("discount").innerHTML = "Discount (" + discountName + "): $" + discount.toFixed(2);
  document.getElementById("shippingFee").innerHTML = "Shipping Fee: $" + shippingFee.toFixed(2);
  document.getElementById("giftWrapFee").innerHTML = "Gift Wrap Fee: $" + giftWrapFee.toFixed(2);
  document.getElementById("totalAmount").innerHTML = "$" + total.toFixed(2);
}
