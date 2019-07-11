let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    // return {newCart: JSON.stringify(cart, null, 4), name: find.product_name};
    return JSON.stringify(cart, null, 4);
};
let clearAll = (cart, req) => {
    let emptyCart = {
        contents: []
    };
    return JSON.stringify(emptyCart, null, 4);
};

module.exports = {
    add,
    change,
    remove,
    clearAll
};