import React from "react";
import { promociones } from "../data";

import {
  PDFViewer,
  Page,
  Text,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = ({ cost }) => {
  const datos = localStorage.getItem("datos")
    ? JSON.parse(localStorage.getItem("datos"))
    : "";

  const {
    alquiler,
    expensas,
    años,
    tipo_alquiler,
    tipoAjuste,
    porcentajeAjuste,
    promo,
    // asesor,
    iva,
  } = datos;

  const promocion = promociones.filter((elem) => elem.nombre === promo);

  return (

    <>
      <button
        onClick={() => volver()}
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 0, 0, 0.278)",
          border: "none",
          borderRadius: "5px",
          padding: "10px",
          letterSpacing: "2px",
          cursor: "pointer",
          color: "white",
        }}
      >
        Nueva cotización
      </button>
      <PDFViewer style={styles.pdfViewer}>
        <Document title="Cotización de garantía">
          <Page style={styles.body} size="A4">
            <View>
              <Image
                src="https://i.imgur.com/Z0w4GsW.png"
                style={styles.image}
              />
            </View>
            <View style={styles.containerDate}>
              <Text style={styles.date}>{hora} </Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Cotización</Text>
            </View>
            <View style={styles.montos}>
              <Text style={styles.text}>
                Alquiler: ${alquiler.toLocaleString("es-AR")}
              </Text>
              <Text style={styles.text}>
                Expensas: ${expensas.toLocaleString("es-AR")}
              </Text>
              <Text style={styles.text}>
                Tiempo: {años > 1 ? años + " años" : años + " año"}
              </Text>

              {tipo_alquiler === "comercial" && (
                <>
                  <Text style={styles.text}>Ajuste: {porcentajeAjuste}%</Text>
                  <Text style={styles.text}>Tipo de ajuste: {tipoAjuste}</Text>
                </>
              )}
              {iva === true && <Text style={styles.text}>IVA: 21% </Text>}
            </View>

            <Text style={styles.costo}>
              Costo: $
              {tipo_alquiler === "vivienda"
                ? cost.toLocaleString("es-AR")
                : comercialCost.toLocaleString("es-AR")}
            </Text>

            <Text style={styles.opciones}>Opciones de pago</Text>
            {React.Children.toArray(
              promocion.map((elem) => {
                return (
                  <>
                    {/* 1 pago */}
                    {uno && (
                      <View style={styles.boxPrice}>
                        <Text style={styles.pagos}>
                          1 pago {elem.unPago * 100}% off: $
                          {tipo_alquiler === "vivienda"
                            ? Math.ceil(
                                cost * (1 - elem.unPago)
                              ).toLocaleString("es-AR")
                            : Math.ceil(
                                comercialCost * (1 - elem.unPago)
                              ).toLocaleString("es-AR")}
                        </Text>
                        {/* 1 pago Ahorro */}
                        <View style={styles.ahorroContainer}>
                          <Image
                            src="https://i.imgur.com/TCcXrha.png"
                            style={styles.ahorroImage}
                          />
                          <Text style={styles.ahorroAmount}>
                            {" "}
                            $
                            {tipo_alquiler === "vivienda"
                              ? (
                                  cost - Math.ceil(cost * (1 - elem.unPago))
                                ).toLocaleString("es-AR")
                              : (
                                  cost -
                                  Math.ceil(
                                    comercialCost -
                                      comercialCost * (1 - elem.unPago)
                                  )
                                ).toLocaleString("es-AR")}
                          </Text>
                        </View>
                      </View>
                    )}
                    {/* 3 pagos */}
                    {tres && (
                      <View style={styles.boxPrice}>
                        <View>
                          <Text style={styles.pagos}>
                            3 cuotas sin interés + {elem.tresPagos * 100}% off:
                            $
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  cost * (1 - elem.tresPagos)
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  comercialCost * (1 - elem.tresPagos)
                                ).toLocaleString("es-AR")}
                          </Text>
                          <Text style={styles.cuotas}>
                            3 cuotas de:$
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  (cost * (1 - elem.tresPagos)) / 3
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  (comercialCost * (1 - elem.tresPagos)) / 3
                                ).toLocaleString("es-AR")}
                          </Text>
                        </View>
                        {/* 3 pagos ahorro*/}
                        <View style={styles.ahorroContainer}>
                          {elem.tresPagos > 0 && (
                            <>
                              <Image
                                src="https://i.imgur.com/TCcXrha.png"
                                style={styles.ahorroImage}
                              />

                              <Text style={styles.ahorroAmount}>
                                $
                                {tipo_alquiler === "vivienda"
                                  ? (
                                      cost -
                                      Math.ceil(cost * (1 - elem.tresPagos))
                                    ).toLocaleString("es-AR")
                                  : (
                                      cost -
                                      Math.ceil(
                                        comercialCost -
                                          comercialCost * (1 - elem.tresPagos)
                                      )
                                    ).toLocaleString("es-AR")}
                              </Text>
                            </>
                          )}
                        </View>
                      </View>
                    )}
                    {/* 6 cuotas */}
                    {seis && (
                      <View style={styles.boxPrice}>
                        <View>
                          <Text style={styles.pagos}>
                            6 cuotas sin interés + {elem.seisPagos * 100}% off:
                            $
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  cost * (1 - elem.seisPagos)
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  comercialCost * (1 - elem.seisPagos)
                                ).toLocaleString("es-AR")}
                          </Text>
                          <Text style={styles.cuotas}>
                            25% primera cuota: $
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  cost * (1 - elem.seisPagos) * 0.25
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  comercialCost * (1 - elem.seisPagos) * 0.25
                                ).toLocaleString("es-AR")}
                          </Text>
                          <Text style={styles.cuotas}>
                            4 cuotas sin interés: $
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  (cost * (1 - elem.seisPagos) * 0.75) / 4
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  (comercialCost *
                                    (1 - elem.seisPagos) *
                                    0.75) /
                                    4
                                ).toLocaleString("es-AR")}
                          </Text>
                          <Text style={styles.cuotas}>
                            5 cuotas sin interés: $
                            {tipo_alquiler === "vivienda"
                              ? Math.ceil(
                                  (cost * (1 - elem.seisPagos) * 0.75) / 5
                                ).toLocaleString("es-AR")
                              : Math.ceil(
                                  (comercialCost *
                                    (1 - elem.seisPagos) *
                                    0.75) /
                                    5
                                ).toLocaleString("es-AR")}
                          </Text>
                        </View>
                        {/* 6 cuotas ahorro*/}
                        <View style={styles.ahorroContainer}>
                          {elem.seisPagos > 0 && (
                            <>
                              <Image
                                src="https://i.imgur.com/TCcXrha.png"
                                style={styles.ahorroImage}
                              />

                              <Text style={styles.ahorroAmount}>
                                $
                                {tipo_alquiler === "vivienda"
                                  ? (
                                      cost -
                                      Math.ceil(cost * (1 - elem.seisPagos))
                                    ).toLocaleString("es-AR")
                                  : (
                                      cost -
                                      Math.ceil(
                                        comercialCost -
                                          comercialCost * (1 - elem.seisPagos)
                                      )
                                    ).toLocaleString("es-AR")}
                              </Text>
                            </>
                          )}
                        </View>
                      </View>
                    )}
                    <View>
                      <Text style={styles.nota}>
                        El costo de la garantía varía de acuerdo al monto de
                        alquiler, expensas, ajustes en el alquiler e IVA. En
                        caso de que exista alguna variación en los costos de tu
                        propiedad, por favor informa a tu asesor comercial para
                        que se realicen los respectivos ajustes.
                      </Text>
                    </View>
                    <View>
                      {React.Children.toArray(
                        asesor_res.map((elem) => {
                          return (
                            <>
                              <View style={styles.asesor}>
                                <Text>{elem.nombre} </Text>
                                <Text>{elem.cargo} </Text>
                                <Text>{elem.email} </Text>
                                <Text>+54 9 1130350918 </Text>
                              </View>
                            </>
                          );
                        })
                      )}
                    </View>
                  </>
                );
              })
            )}
          </Page>
        </Document>
      </PDFViewer>
    </>

  );
};

export default PDFFile;
