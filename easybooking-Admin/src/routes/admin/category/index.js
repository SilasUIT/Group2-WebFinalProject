const express = require("express");
const router = express.Router();
const categoryController = require("../../../controllers/admin/category.controller");
router.use(express.json());
router.get("/form", categoryController.getForm);
router.post(
  "/form",
  categoryController.addOrUpdateItem
);
router.get("/form/:id", categoryController.getForm);
router.get("/delete/:id", categoryController.deleteItem);
router.get('/changeStatus/:id/:status', categoryController.updateStatus);

router.get("(/:status)?", categoryController.getAll);  

router.get('(:/status)?',categoryController.statusCount);

router.post("/changeStatusTool", categoryController.statusTool);
module.exports = router;
