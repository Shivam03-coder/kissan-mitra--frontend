import React, { useRef } from "react";
import { useFormik } from "formik";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { DiseasePredictionFormSchema } from "../../../shared/validation/FormsValidation";

const FormSection = () => {
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
        <Typography className="text-black font-TitilliumWeb" variant="h2">
          Disease Prediction Form
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            {/* File Input */}
            <div className="flex flex-col gap-4">
              <div
                className="bg-custom-light-yellow-to-transparent-green w-[180px] h-[180px] mx-auto rounded-3xl shadow-glass-card cursor-pointer flex-center"
                onClick={handleInputFileClick}
              >
                <Typography
                  variant="h5"
                  className="text-black font-TitilliumWeb -mb-3"
                >
                  Upload Image
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
            PREDICT
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default FormSection;
