import React from "react";
import { useFormik } from "formik";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FertilizerPredictionFormSchema } from "../../../shared/validation/FormsValidation";
import { useTranslation } from "react-i18next";
const initialValues = {
  city: "",
  moisture: "",
  soil_type: "",
  crop: "",
  nitrogen: "",
  potassium: "",
  phosphorous: "",
};

const FormSection = () => {
  const { t } = useTranslation();
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: FertilizerPredictionFormSchema,
    onSubmit: (data, actions) => {
      console.log("Form data:", data);
      actions.resetForm();
    },
  });

  return (
    <section className="bg-custom-green-gradient flex-center py-8">
      <Card color="transparent" shadow={false}>
        <Typography className="text-black font-TitilliumWeb" variant="h2">
        {t('fertilizer-prediction.title')}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            {/* City */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                {t('fertilizer-prediction.city')}
              </Typography>
              <Input
                name="city"
                size="lg"
                placeholder="Enter Your City"
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

            {/* Moisture */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
                {t('fertilizer-prediction.moisture')}
              </Typography>
              <Input
                name="moisture"
                size="lg"
                placeholder="Enter Moisture Level"
                className="InputBoxCustom"
                value={values.moisture}
                onChange={handleChange}
              />
              {touched.moisture && errors.moisture && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.moisture}
                </Typography>
              )}
            </div>

            {/* Soil Type */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
              {t('fertilizer-prediction.soil-type')}
              </Typography>
              <Input
                name="soil_type"
                size="lg"
                placeholder="Enter Soil Type"
                className="InputBoxCustom"
                value={values.soil_type}
                onChange={handleChange}
              />
              {touched.soil_type && errors.soil_type && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.soil_type}
                </Typography>
              )}
            </div>

            {/* Crop */}
            <div className="flex flex-col gap-4">
              <Typography
                variant="h5"
                className="text-black font-TitilliumWeb -mb-3"
              >
             {t('fertilizer-prediction.crop')}
              </Typography>
              <Input
                name="crop"
                size="lg"
                placeholder="Enter Crop Name"
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
                {t('fertilizer-prediction.nitrogen')}
              </Typography>
              <Input
                name="nitrogen"
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
                {t('fertilizer-prediction.potassium')}
              </Typography>
              <Input
                name="potassium"
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
                {t('fertilizer-prediction.phosphorous')}
              </Typography>
              <Input
                name="phosphorous"
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
          </div>

          <Button type="submit" className="mt-6 bg-green-900 text-xl" fullWidth>
          {t('fertilizer-prediction.button')}
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default FormSection;
