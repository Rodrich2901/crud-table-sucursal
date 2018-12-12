const express = require("express");
const router = express.Router();

const sucursalController = require("../controllers/sucursal.controler");

router.get("/", sucursalController.getSucursal);
router.post("/", sucursalController.postSucursal);
router.put("/:id", sucursalController.putSucursal);
router.delete("/:id", sucursalController.deleteSucursal);

module.exports = router;