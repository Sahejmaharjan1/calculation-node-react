import mongoose from "mongoose";

const CalculationSchema = new mongoose.Schema(
  {
    first: Number,
    second: Number,
    sum: Number,
  },
  { timestamps: true }
);

const Calculation = mongoose.model("Calculation", CalculationSchema);
export default Calculation;
