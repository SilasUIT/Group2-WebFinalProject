const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/admin/product.controller");
router.use(express.json());

router.get("/form", productController.getForm);
router.post(
  "/form",
  productController.addOrUpdateItem
);
router.get("/form/:id", productController.getForm);
router.get("/delete/:id", productController.deleteItem);
router.get('/changeStatus/:id/:status', productController.updateStatus);

router.get("(/:status)?", productController.getAll);  

router.get('(/:status)?',productController.statusCount);

router.post("/changeStatusTool", productController.statusTool);
router.post("/upload/:id", productController.imageUpload);
module.exports = router;
