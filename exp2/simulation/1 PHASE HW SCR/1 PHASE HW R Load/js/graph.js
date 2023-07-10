function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R1"]["value"] != 0 &&
    values["GTP1"]["efire"] != 0
  ) {
    const wave_forms = generategraph();
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "840px";
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
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1),
            parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1,
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
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
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
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1),
            parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1,
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
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 * (parseInt(wave_forms[0][1])+(((1/10)*parseInt(wave_forms[0][1])))+1),
            parseInt(wave_forms[0][1]) + (((1/10)*parseInt(wave_forms[0][1])))+1,
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
      xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
      yaxis: {
        range: [
          -1 * (parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1),
          parseInt(wave_forms[0][0]) + (((1/10)*parseInt(wave_forms[0][0])))+1,
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
  var timep = 1 / freq;
  var timp = timep;
  var sine_wave = [],
    current = [],
    load_voltage = [],
    thyristor_voltage = [],
    gate_pluse = [];
  var sin_fun;
  var starting = (timep / 360) * sta;
  var ending = (timep / 360) * end;
  var xval = [];
  for (let x = 0; x <= 0.06; x += 0.00001) {
    sin_fun = sineamp * Math.sin(2 * Math.PI * freq * x);
    sine_wave.push(sin_fun);
    if (x > starting) {
      if (sin_fun > 0) {
        load_voltage.push(sin_fun);
        current.push(sin_fun / parseInt(resistance));
        thyristor_voltage.push(0);
      } else {
        load_voltage.push(0);
        thyristor_voltage.push(sin_fun);
        current.push(0);
      }
    } else {
      thyristor_voltage.push(sin_fun);
      load_voltage.push(0);
      current.push(0);
    }
    if (starting <= x && x <= ending) {
      gate_pluse.push(1);
    } else {
      gate_pluse.push(0);
    }
    xval.push(x);
    if (x > timep) {
      starting = starting + timp;
      ending = ending + timp;
      timep = timep + timp;
    }
  }

  var vavg=(sineamp/(2*Math.PI))*(1+(Math.cos(sta*(Math.PI/180))));
  var iavg=vavg/resistance;
  var vrms=(sineamp/(2*Math.sqrt(Math.PI)))*(Math.sqrt(Math.PI-(sta*(Math.PI/180))+(Math.sin(2*(sta*(Math.PI/180)))/2)));
  var irms=vrms/resistance;
  iavg =iavg*100;
  vavg=vavg*100;
  vrms=vrms*100;
  irms=irms*100;
  vavg=parseInt(vavg);
  iavg=parseInt(iavg);
  vrms=parseInt(vrms);
  irms=parseInt(irms);
  values['vavg']=(vavg/100);
  values['iavg']=(iavg/100);
  values['vrms']=(vrms/100);
  values['irms']=(irms/100);

  return [
    [sineamp, sineamp / resistance],
    [sine_wave, xval],
    [gate_pluse, xval],
    [load_voltage, xval],
    [thyristor_voltage, xval],
    [current, xval],
  ];
}
