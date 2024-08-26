import * as Yup from "yup";

export const CropPredictionFormSchema = Yup.object({
  nitrogen: Yup.number()
    .required("Nitrogen is required")
    .min(0, "Nitrogen value cannot be less than 0")
    .max(500, "Nitrogen value cannot be more than 500"),

  phosphorous: Yup.number()
    .required("Phosphorous is required")
    .min(0, "Phosphorous value cannot be less than 0")
    .max(500, "Phosphorous value cannot be more than 500"),

  potassium: Yup.number()
    .required("Potassium is required")
    .min(0, "Potassium value cannot be less than 0")
    .max(500, "Potassium value cannot be more than 500"),

  ph: Yup.number()
    .required("pH level is required")
    .min(0, "pH level cannot be less than 0")
    .max(14, "pH level cannot be more than 14"),

  rainfall: Yup.number()
    .required("Rainfall is required")
    .min(0, "Rainfall value cannot be less than 0")
    .max(1000, "Rainfall value cannot be more than 1000"),

  city: Yup.string()
    .required("City is required")
    .min(2, "City name should be at least 2 characters long")
    .max(50, "City name should be less than 50 characters long"),
});

export const DiseasePredictionFormSchema = Yup.object({
  file: Yup.mixed()
    .required("A file is required")
    .test(
      "fileFormat",
      "Only image files are allowed (jpg, jpeg, png)",
      (value) =>
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
    )
    .test(
      "fileSize",
      "File size must be less than 5MB",
      (value) => value && value.size <= 5 * 1024 * 1024 // 5MB
    ),
});

export const FertilizerPredictionFormSchema = Yup.object({
  city: Yup.string()
    .required("City is required")
    .min(2, "City name should be at least 2 characters long")
    .max(50, "City name should be less than 50 characters long"),

  moisture: Yup.number()
    .required("Moisture level is required")
    .min(0, "Moisture value cannot be less than 0")
    .max(100, "Moisture value cannot be more than 100"),

  soil_type: Yup.string()
    .required("Soil type is required")
    .oneOf(
      ["Sandy", "Clay", "Silt", "Peat", "Loam", "Chalk"],
      "Invalid soil type"
    ),

  crop: Yup.string()
    .required("Crop is required")
    .min(2, "Crop name should be at least 2 characters long")
    .max(50, "Crop name should be less than 50 characters long"),

  nitrogen: Yup.number()
    .required("Nitrogen level is required")
    .min(0, "Nitrogen value cannot be less than 0")
    .max(100, "Nitrogen value cannot be more than 100"),

  potassium: Yup.number()
    .required("Potassium level is required")
    .min(0, "Potassium value cannot be less than 0")
    .max(100, "Potassium value cannot be more than 100"),

  phosphorous: Yup.number()
    .required("Phosphorous level is required")
    .min(0, "Phosphorous value cannot be less than 0")
    .max(100, "Phosphorous value cannot be more than 100"),
});

export const YieldPredictionFormSchema = Yup.object({
  temperature: Yup.number()
    .required("Temperature is required")
    .min(-50, "Temperature cannot be less than -50°C")
    .max(60, "Temperature cannot be more than 60°C"),

  rainfall: Yup.number()
    .required("Rainfall is required")
    .min(0, "Rainfall cannot be less than 0 mm")
    .max(5000, "Rainfall cannot be more than 5000 mm"),

  state: Yup.string()
    .required("State is required")
    .min(2, "State name should be at least 2 characters long")
    .max(50, "State name should be less than 50 characters long"),

  crop_type: Yup.string()
    .required("Crop type is required")
    .oneOf(["rabi", "kharif", "zaid"], "Invalid crop type"),

  crop: Yup.string()
    .required("Crop is required")
    .min(2, "Crop name should be at least 2 characters long")
    .max(50, "Crop name should be less than 50 characters long"),

  nitrogen: Yup.number()
    .required("Nitrogen level is required")
    .min(0, "Nitrogen value cannot be less than 0")
    .max(100, "Nitrogen value cannot be more than 100"),

  potassium: Yup.number()
    .required("Potassium level is required")
    .min(0, "Potassium value cannot be less than 0")
    .max(100, "Potassium value cannot be more than 100"),

  phosphorous: Yup.number()
    .required("Phosphorous level is required")
    .min(0, "Phosphorous value cannot be less than 0")
    .max(100, "Phosphorous value cannot be more than 100"),

  ph: Yup.number()
    .required("pH level is required")
    .min(0, "pH level cannot be less than 0")
    .max(14, "pH level cannot be more than 14"),

  area: Yup.number()
    .required("Area is required")
    .min(1, "Area cannot be less than 1 hectare")
    .max(10000, "Area cannot be more than 10000 hectares"),
});
