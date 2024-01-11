const publicRouts={
    "POST /user/signup":"UserController.signup",
    "POST /user/login":"UserController.login",
    "GET /product/list":"productController.list"
}

const privateRouts={
    "POST /cart/add":"CartContoller.add",
}



const routes={
    publicRouts,
    privateRouts
}
module.exports =routes