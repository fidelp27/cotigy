import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";
import { tipoAlquiler, tipoAjuste, asesores, promociones } from "../../data";
import { FormControlLabel, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FormCalculate = ({ setDatos }) => {
  const navigate = useNavigate();
  const errores = {
    required: "Este campo es requerido",
    tipoAlquiler: "Debes seleccionar el tipo de alquiler",

    años: "El tiempo mínimo es un año",
    uno: "",
    alquiler: "El mínimo es 1",
    positivo: "Si no hay expensas, por favor coloque cero",

  };
  const validationSchema = Yup.object().shape({
    alquiler: Yup.number().required(errores.required).min(1, errores.alquiler),
    expensas: Yup.number().required(errores.required).min(0, errores.positivo),
    años: Yup.number().required(errores.required).min(0, errores.positivo),
    tipo_alquiler: Yup.string().required(errores.required),
    tipoAjuste: Yup.string(),
    porcentajeAjuste: Yup.number().min(0, errores.positivo),
    promo: Yup.string().required(errores.required),
    asesor: Yup.string().required(errores.required),
    uno: Yup.bool().isTrue(true),
  });
  return (
    <>
      <Header />
      <Formik
        initialValues={{
          alquiler: "",
          expensas: "",
          años: "",
          tipo_alquiler: "",
          tipoAjuste: "",
          porcentajeAjuste: "",
          promo: "",
          asesor: "",
          iva: false,
          uno: false,
          tres: false,
          seis: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          localStorage.clear();
          localStorage.setItem("datos", JSON.stringify(values));
          setDatos(values);
          navigate("/template");
          resetForm();
        }}
      >
        {({ errors, values, handleChange }) => {
          return (
            <div className="container-form">
              <Form className="form">
                <h1>Cotizador</h1>

                <div className="input-group">
                  <label htmlFor="tipoAjuste" className="label">
                    Tipo de Ajuste
                  </label>
                  <Field as="select" name="tipoAjuste" className="input-ajuste">
                    <option value="">Escoge un tipo de ajuste</option>
                    {React.Children.toArray(
                      tipoAjuste.map((ajuste) => {
                        return (
                          <option value={ajuste.nombre}>
                            {ajuste.nombre.toUpperCase()}
                          </option>
                        );
                      })
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="tipoAjuste"
                  component={() => (
                    <div className="error">{errors.tipoAjuste} </div>
                  )}
                />
                <div className="porcentaje-switch">
                  <div className="input-group">
                    <label htmlFor="porcentajeAjuste" className="label">
                      Ajuste
                    </label>
                    <Field
                      type="number"
                      name="porcentajeAjuste"
                      className="input-ajuste-porcentaje"
                      min="0"
                    />
                  </div>

                  <FormControlLabel
                    control={
                      <Switch
                        value={values.switch}
                        name="iva"
                        onChange={handleChange}
                        color="secondary"
                        size="small"
                      />
                    }
                    className="switch"
                    label="IVA"
                  />
                </div>
                <ErrorMessage
                  name="porcentajeAjuste"
                  component={() => (
                    <div className="error">{errors.porcentajeAjuste} </div>
                  )}
                />
              </div>
            )}
            <div className="input-group">
              <label htmlFor="alquiler" className="label">
                Alquiler
              </label>
              <Field type="number" name="alquiler" className="input" min="0" />
            </div>
            <ErrorMessage
              name="alquiler"
              component={() => <div className="error">{errors.alquiler} </div>}
            />
            <div className="input-group">
              <label htmlFor="expensas" className="label">
                Expensas
              </label>
              <Field type="number" name="expensas" className="input" min="0" />
            </div>
            <ErrorMessage
              name="expensas"
              component={() => <div className="error">{errors.expensas} </div>}
            />

            <div className="input-group">
              <label htmlFor="años" className="label">
                Años
              </label>
              <Field type="number" name="años" className="input" min="0" />
            </div>
            <ErrorMessage
              name="expensas"
              component={() => <div className="error">{errors.años} </div>}
            />

            <div className="input-group">
              <label htmlFor="promo" className="label">
                Promoción
              </label>
              <Field as="select" name="promo" className="input">
                <option value="">Escoge la promoción</option>
                {React.Children.toArray(
                  promociones.map((promo) => {
                    return (
                      <option value={promo.nombre}>
                        {promo.nombre.toUpperCase()}
                      </option>
                    );
                  })
                )}
              </Field>
            </div>
            <ErrorMessage
              name="promo"
              component={() => <div className="error">{errors.promo} </div>}
            />


                <div className="input-group">
                  <label htmlFor="asesor" className="label">
                    Asesor
                  </label>
                  <Field as="select" name="asesor" className="input">
                    <option value="">Escoge tu nombre</option>
                    {React.Children.toArray(
                      asesores.sort().map((asesores) => {
                        return (
                          <option value={asesores.nombre}>
                            {asesores.nombre.toUpperCase()}
                          </option>
                        );
                      })
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="asesor"
                  component={() => (
                    <div className="error">{errors.asesor} </div>
                  )}
                />
                {values.asesor && (
                  <div className="show-cuotas">
                    <fieldset className="fieldset">
                      <legend className="legend">Cuotas a mostrar</legend>
                      <FormControlLabel
                        control={
                          <Switch
                            value={values.uno}
                            name="uno"
                            onChange={handleChange}
                            color="secondary"
                            size="small"
                          />
                        }
                        className={errors.uno && "switch-cuotas error-uno"}
                        label="1 cuota"
                      />

                      <FormControlLabel
                        control={
                          <Switch
                            value={values.tres}
                            name="tres"
                            onChange={handleChange}
                            color="secondary"
                            size="small"
                          />
                        }
                        className="switch-cuotas"
                        label="3 cuotas"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            value={values.seis}
                            name="seis"
                            onChange={handleChange}
                            color="secondary"
                            size="small"
                          />
                        }
                        className="switch-cuotas"
                        label="6 cuotas"
                      />
                    </fieldset>
                  </div>
                )}

                <button type="submit" className="btn">
                  Calcular
                </button>
              </Form>

            </div>
            <ErrorMessage
              name="asesor"
              component={() => <div className="error">{errors.asesor} </div>}
            />

            <button type="submit" className="btn">
              Calcular
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormCalculate;
