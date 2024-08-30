import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./Routes/dashboardRoutes"
import productRoutes from "./Routes/productRoutes";
import userRoutes from "./Routes/userRoutes"
import expenseRoutes from "./Routes/expenseRoutes"

/* Route imports */


/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/dashboard", dashboardRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);
/* Server */
const port = Number(process.env.PORT) || 3001;
app.listen(port,"0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
