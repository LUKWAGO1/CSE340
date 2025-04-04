const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  try {
    const classification_id = req.params.classificationId;
    const data = await invModel.getInventoryByClassificationId(classification_id);
    const grid = await utilities.buildClassificationGrid(data);
    let nav = await utilities.getNav();
    const className = data[0]?.classification_name || "Classification";
    res.render("./inventory/classification", {
      title: className + " vehicles",
      nav,
      grid,
    });
  } catch (err) {
    next(err);
  }
};

/** Build a single vehicle inventory */
invCont.buildByInventoryId = async function (req, res, next) {
  try {
    const inv_id = req.params.invId;
    const data = await invModel.getInventoryByInvId(inv_id);
    const vehicle = await utilities.buildVehicleGrid(data);
    let nav = await utilities.getNav();
    const VehicleMake = data[0]?.inv_make || "Make";
    const VehicleModel = data[0]?.inv_model || "Model";
    const VehicleYear = data[0]?.inv_year || "Year";

    res.render("./inventory/vehicle", {
      title: VehicleYear + " " + VehicleMake + " " + VehicleModel,
      nav,
      vehicle,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = invCont