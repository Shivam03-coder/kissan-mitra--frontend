import React from "react";
import { useFormik } from "formik";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { YieldPredictionFormSchema } from "../../../shared/validation/FormsValidation";

const initialValues = {
  temperature: "",
  rainfall: "",
  state: "",
  crop_type: "",
  crop: "",
  nitrogen: "",
  potassium: "",
  phosphorous: "",
  ph: "",
  area: "",
};

const FormSection = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: YieldPredictionFormSchema,
    onSubmit: (data, actions) => {
      console.log("Form data:", data);
      actions.resetForm();
    },
  });

  return (
    <section className="bg-custom-green-gradient flex-center py-8">
      <Card color="transparent" shadow={false}>
        <Typography className="text-black font-TitilliumWeb" variant="h2">
          Yield Prediction Form
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            {/* Temperature */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Temperature (°C)
              </Typography>
              <Input
                name="temperature"
                type="number"
                size="lg"
                placeholder="Enter Temperature (example: 25)"
                className="InputBoxCustom"
                value={values.temperature}
                onChange={handleChange}
              />
              {touched.temperature && errors.temperature && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.temperature}
                </Typography>
              )}
            </div>

            {/* Rainfall */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Rainfall (mm)
              </Typography>
              <Input
                name="rainfall"
                type="number"
                size="lg"
                placeholder="Enter Rainfall (example: 200)"
                className="InputBoxCustom"
                value={values.rainfall}
                onChange={handleChange}
              />
              {touched.rainfall && errors.rainfall && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.rainfall}
                </Typography>
              )}
            </div>

            {/* State */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                State
              </Typography>
              <Input
                name="state"
                size="lg"
                placeholder="Enter State"
                className="InputBoxCustom"
                value={values.state}
                onChange={handleChange}
              />
              {touched.state && errors.state && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.state}
                </Typography>
              )}
            </div>

            {/* Crop Type */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Crop Type
              </Typography>
              <Input
                name="crop_type"
                size="lg"
                placeholder="Enter Crop Type (e.g., rabi, kharif, zaid)"
                className="InputBoxCustom"
                value={values.crop_type}
                onChange={handleChange}
              />
              {touched.crop_type && errors.crop_type && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.crop_type}
                </Typography>
              )}
            </div>

            {/* Crop */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Crop
              </Typography>
              <Input
                name="crop"
                size="lg"
                placeholder="Enter Crop"
                className="InputBoxCustom"
                value={values.crop}
                onChange={handleChange}
              />
              {touched.crop && errors.crop && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.crop}
                </Typography>
              )}
            </div>

            {/* Nitrogen */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Nitrogen Level
              </Typography>
              <Input
                name="nitrogen"
                type="number"
                size="lg"
                placeholder="Enter Nitrogen Level"
                className="InputBoxCustom"
                value={values.nitrogen}
                onChange={handleChange}
              />
              {touched.nitrogen && errors.nitrogen && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.nitrogen}
                </Typography>
              )}
            </div>

            {/* Potassium */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Potassium Level
              </Typography>
              <Input
                name="potassium"
                type="number"
                size="lg"
                placeholder="Enter Potassium Level"
                className="InputBoxCustom"
                value={values.potassium}
                onChange={handleChange}
              />
              {touched.potassium && errors.potassium && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.potassium}
                </Typography>
              )}
            </div>

            {/* Phosphorous */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Phosphorous Level
              </Typography>
              <Input
                name="phosphorous"
                type="number"
                size="lg"
                placeholder="Enter Phosphorous Level"
                className="InputBoxCustom"
                value={values.phosphorous}
                onChange={handleChange}
              />
              {touched.phosphorous && errors.phosphorous && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.phosphorous}
                </Typography>
              )}
            </div>

            {/* PH Level */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                pH Level
              </Typography>
              <Input
                name="ph"
                type="number"
                size="lg"
                placeholder="Enter pH Level (0-14)"
                className="InputBoxCustom"
                value={values.ph}
                onChange={handleChange}
              />
              {touched.ph && errors.ph && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.ph}
                </Typography>
              )}
            </div>

            {/* Area */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Area (hectares)
              </Typography>
              <Input
                name="area"
                type="number"
                size="lg"
                placeholder="Enter Area (hectares)"
                className="InputBoxCustom"
                value={values.area}
                onChange={handleChange}
              />
              {touched.area && errors.area && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.area}
                </Typography>
              )}
            </div>
          </div>

          <Button type="submit" className="mt-6 bg-green-900 text-xl" fullWidth>
            PREDICT
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default FormSection;
