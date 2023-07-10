function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["GTP1"]["efire"] != 0 &&
    values["I1"]["value"] != 0 &&
    values["DC1"]["value"] != 0
  ) {
    const wave_forms = generategraph();
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "845px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "V<sub>INP</sub>  ",
          marker: {
            color: "Orange",
          },
        },
        {
          x: wave_forms[6][1],
          y: wave_forms[6][0],
          mode: "lines",
          name: "E",
          marker: {
            color: "Green",
          },
        },
      ],
      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.06], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                (1 / 10) * parseInt(wave_forms[0][0]) +
                1),
            parseInt(wave_forms[0][0]) +
              (1 / 10) * parseInt(wave_forms[0][0]) +
              1,
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "V<sub>GP</sub>  ",
          marker: {
            color: "Red",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.06], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "V<sub>L</sub>   ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.06], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                (1 / 10) * parseInt(wave_forms[0][0]) +
                1),
            parseInt(wave_forms[0][0]) +
              (1 / 10) * parseInt(wave_forms[0][0]) +
              1,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "I<sub>L</sub>   ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["AM1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.06], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][1]) +
                (1 / 10) * parseInt(wave_forms[0][1]) +
                1),
            parseInt(wave_forms[0][1]) +
              (1 / 10) * parseInt(wave_forms[0][1]) +
              1,
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "thy_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thy_voltage",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "V<sub>T</sub>   ",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.06], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                (1 / 10) * parseInt(wave_forms[0][0]) +
                1),
            parseInt(wave_forms[0][0]) +
              (1 / 10) * parseInt(wave_forms[0][0]) +
              1,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}
function generategraph() {
  var sineamp = values["AC1"]["volt"];
  const freq = values["AC1"]["freq"];
  const sta = values["GTP1"]["sfire"];
  const end = values["GTP1"]["efire"];
  var resistance = values["R1"]["value"];
  var E = parseInt(values["DC1"]["value"]);

  var inductance = values["I1"]["value"] * 0.001;
  var timep = 1 / freq;
  var timp = timep;
  var sine_wave = [],
    current = [],
    load_voltage = [],
    thyristor_voltage = [],
    gate_pluse = [];
  var sin_fun,
    tim = 0;
  var starting = (timep / 360) * sta;
  var ending = (timep / 360) * end;
  var xval = [],
    yval = [];
  var voltage_flag = false;
  var phi = Math.atan((2 * Math.PI * freq * inductance) / resistance);
  var z = Math.sqrt(
    resistance * resistance +
      2 * Math.PI * freq * inductance * (2 * Math.PI * freq * inductance)
  );
  var max_current = 0,
    beta = 0,
    beta_flag = true,voltage_rms=0;
  for (let x = 0; x <= 0.1; x += 0.00001) {
    sin_fun = sineamp * Math.sin(2 * Math.PI * freq * x);
    sine_wave.push(sin_fun);
    if (sin_fun > E) {
      voltage_flag = true;
    }

    if (x > starting) {
      if (voltage_flag) {
        var i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
          (sineamp / z) *
            Math.sin(sta * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - tim) - sta * (Math.PI / 180))
            ) -
          (E / resistance) *
            (1 -
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta * (Math.PI / 180))
              ));

        if (i >= 0) {
          load_voltage.push(sin_fun);
          voltage_rms=voltage_rms+sin_fun*sin_fun;
          current.push(i);
          thyristor_voltage.push(0);
          if (i > max_current) {
            max_current = i;
          }
        } else {
          load_voltage.push(E);
          voltage_rms=voltage_rms+E*E;
          thyristor_voltage.push(sin_fun - E);
          current.push(0);
        }

        if (beta_flag) {
          if (sin_fun < 0 && i < 0) {
            beta = x * (360 / timp);
            console.log(beta);
            beta_flag = false;
          }
        }
      } else {
        thyristor_voltage.push(0);
          voltage_rms=voltage_rms+E*E;
          load_voltage.push(E);
        current.push(0);
      }
    } else {
      thyristor_voltage.push(sin_fun - E);
      load_voltage.push(E);
      voltage_rms=voltage_rms+E*E;

      current.push(0);
    }
    if (starting <= x && x <= ending) {
      gate_pluse.push(1);
    } else {
      gate_pluse.push(0);
    }
    xval.push(x);
    yval.push(E);
    if (x > timep) {
      starting = starting + timp;
      ending = ending + timp;
      timep = timep + timp;
      tim = tim + timp;
      voltage_flag = false;
    }
  }
  var vavg;
  var iavg =
    (1 / (2 * Math.PI * resistance)) *
    (sineamp *
      (Math.cos(sta * (Math.PI / 180)) - Math.cos(beta * (Math.PI / 180))) -
      E * (beta * (Math.PI / 180) - sta * (Math.PI / 180)));
  vavg = E + iavg * resistance;
  var vrms=Math.sqrt((voltage_rms/load_voltage.length));
  iavg = iavg * 100;
  vavg = vavg * 100;
  vrms = vrms * 100;
  vavg = parseInt(vavg);
  iavg = parseInt(iavg);
  vrms = parseInt(vrms);
  values["vavg"] = vavg / 100;
  values["iavg"] = iavg / 100;
  values["vrms"] = vrms / 100;

  return [
    [parseInt(sineamp) + parseInt(E), max_current],
    [sine_wave, xval],
    [gate_pluse, xval],
    [load_voltage, xval],
    [thyristor_voltage, xval],
    [current, xval],
    [yval, xval],
  ];
}
