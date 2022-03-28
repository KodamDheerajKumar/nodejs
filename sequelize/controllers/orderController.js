const db = require('../models')


const Order = db.OrderM;



// 1. create order

const addOrder = async (req, res) => {

    let info = {
        ordernum: req.body.ordernum,
        userid: req.body.userid,
        quantity: req.body.quantity,
        total: req.body.total,
    }

    const order = await Order.create(info)
    res.status(200).send(order)
    console.log(order)

}



// 2. get all orders

const getAllOrders = async (req, res) => {

    let orders = await Order.findAll({})
    res.status(200).send(orders)

}

// 3. get single order

const getOneOrder = async (req, res) => {

    let id = req.params.id
    let order = await Order.findOne({ where: { id: id }})
    res.status(200).send(order)

}

// 4. update Order

const updateOrder= async (req, res) => {

    let id = req.params.id

    const order = await Order.update(req.body, { where: { id: id }})

    res.status(200).send(order)
   

}

// 5. delete order by id

const deleteOrder = async (req, res) => {

    let id = req.params.id
    
    await Order.destroy({ where: { id: id }} )

    res.status(200).send('Order is deleted !')

}


module.exports = {
    addOrder,
    getAllOrders,
    getOneOrder,
    updateOrder,
    deleteOrder,    
}