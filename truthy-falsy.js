const products = [{ name: 'Computer mouse'}]
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy Values - false, 0, empty string, null, undefinded, NaN



if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}
