const express = require("express");
const router = express.Router();
const productcategoryController = require("../../../controllers/admin/productcategory.controller");
router.use(express.json());
router.get("/form", productcategoryController.getForm);
router.post(
  "/form",
  productcategoryController.addOrUpdateItem
);
router.get("/form/:id", productcategoryController.getForm);
router.get("/delete/:id", productcategoryController.deleteItem);
router.get('/changeStatus/:id/:status', productcategoryController.updateStatus);

router.get("(/:status)?", productcategoryController.getAll);  

router.get('(:/status)?',productcategoryController.statusCount);

router.post("/changeStatusTool", productcategoryController.statusTool);
module.exports = router;
