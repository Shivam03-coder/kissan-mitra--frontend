import React, { useRef } from "react";
import { useFormik } from "formik";
import { Card, Button, Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { DiseasePredictionFormSchema } from "../../../shared/validation/FormsValidation";

const FormSection = () => {
  const { t } = useTranslation();
  const fileRef = useRef();

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        file: null,
      },
      validationSchema: DiseasePredictionFormSchema,
      onSubmit: (data, actions) => {
        console.log("Form data:", data);
        actions.resetForm();
      },
    });

  const handleInputFileClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  return (
    <section className="bg-custom-green-gradient flex-center py-8">
      <Card color="transparent" shadow={false}>
        <Typography className="text-black text-center font-TitilliumWeb" variant="h2">
          {t('disease-prediction.title')}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2  mx-auto w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            <div className=" flex-col flex-center gap-4">
              <div
                className="bg-custom-light-yellow-to-transparent-green w-[180px] h-[180px] mx-auto rounded-3xl shadow-glass-card cursor-pointer text-center flex-center"
                onClick={handleInputFileClick}
              >
                <Typography
                  variant="h5"
                  className="text-black  font-TitilliumWeb -mb-3"
                >
                  {t('disease-prediction.label')}
                </Typography>
                <input
                  type="file"
                  name="file"
                  ref={fileRef}
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  className="InputBoxCustom hidden"
                />
              </div>
              {touched.file && errors.file && (
                <Typography
                  variant="small"
                  className="text-red-700 font-normal -mt-3 text-base"
                >
                  *{errors.file}
                </Typography>
              )}
            </div>
          </div>

          <Button type="submit" className="mt-6 bg-green-900 text-xl" fullWidth>
            {t('disease-prediction.button')}
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default FormSection;
