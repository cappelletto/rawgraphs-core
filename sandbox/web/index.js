import { chart } from "../../src";
import testChart from "../../src/testChart";

const div = document.querySelector("#root");

const testData = [
  { x: 10, y: 20 },
  { x: 30, y: 50 },
  { x: 100, y: 20 },
  { x: 50, y: 70 },
];

const dispersionMapping = {
  x: {
    value: "x",
  },
  y: {
    value: "y",
  },
};

const viz = chart(testChart, {
  data: testData,
  mapping: dispersionMapping,
  dataTypes: {},
  visualOptions: {},
});

viz.renderToDOM(div);
