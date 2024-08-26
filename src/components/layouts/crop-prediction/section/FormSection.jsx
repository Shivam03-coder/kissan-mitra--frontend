import React from "react";
import { useFormik } from "formik";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { CropPredictionFormSchema } from "../../../shared/validation/FormsValidation";

const initialValues = {
  nitrogen: "",
  phosphorous: "",
  potassium: "", 
  ph: "",
  rainfall: "",
  city: "",
};

const FormSection = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: CropPredictionFormSchema,
    onSubmit: (data, actions) => {
      console.log("Form data:", data);
      actions.resetForm();
    },
  });

  return (
    <section className="bg-custom-green-gradient flex-center py-8">
      <Card color="transparent" shadow={false}>
        <Typography className="text-black font-TitilliumWeb" variant="h2">
          Find Out The Most Suitable Crop <br /> To Grow In Your Farm
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            {/* Nitrogen */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Nitrogen
              </Typography>
              <Input
                name="nitrogen"
                size="lg"
                placeholder="Enter The Value (example:50)"
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

            {/* Phosphorous */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Phosphorous
              </Typography>
              <Input
                name="phosphorous"
                size="lg"
                placeholder="Enter The Value (example:50)"
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

            {/* Potassium */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Potassium
              </Typography>
              <Input
                name="potassium"
                size="lg"
                placeholder="Enter The Value (example:50)"
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

            {/* PH Level */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                PH Level
              </Typography>
              <Input
                name="ph"
                size="lg"
                placeholder="Enter The Value between 0-14"
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

            {/* Rainfall */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Rainfall
              </Typography>
              <Input
                name="rainfall"
                size="lg"
                placeholder="Enter The Value (example:200)"
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

            {/* Your City */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                Your City
              </Typography>
              <Input
                name="city"
                size="lg"
                placeholder="Select Your City"
                className="InputBoxCustom"
                value={values.city}
                onChange={handleChange}
              />
              {touched.city && errors.city && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.city}
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