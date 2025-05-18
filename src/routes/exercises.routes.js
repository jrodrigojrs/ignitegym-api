const { Router } = require("express");

const ExercisesController = require("../controllers/ExercisesController");

const exercisesRoutes = Router();

const exercisesController = new ExercisesController();

exercisesRoutes.get("/", exercisesController.all);
exercisesRoutes.get("/:id", exercisesController.show);
exercisesRoutes.get("/bygroup/:group", exercisesController.index);

module.exports = exercisesRoutes;
