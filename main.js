"use strict";

const stateSelect = document.getElementById("stateSelect");
const countrySelect = document.getElementById("countrySelect");

const labelStateOrCounty = document.getElementById("labelStateOrCounty");

let states = [
  "Choose...",
  "AK - Alaska",
  "AL - Alabama",
  "AR - Arkansas",
  "AS - American Samoa",
  "AZ - Arizona",
  "CA - California",
  "CO - Colorado",
  "CT - Connecticut",
  "DC - District of Columbia",
  "DE - Delaware",
  "FL - Florida",
  "GA - Georgia",
  "GU - Guam",
  "HI - Hawaii",
  "IA - Iowa",
  "ID - Idaho",
  "IL - Illinois",
  "IN - Indiana",
  "KS - Kansas",
  "KY - Kentucky",
  "LA - Louisiana",
  "MA - Massachusetts",
  "MD - Maryland",
  "ME - Maine",
  "MI - Michigan",
  "MN - Minnesota",
  "MO - Missouri",
  "MS - Mississippi",
  "MT - Montana",
  "NC - North Carolina",
  "ND - North Dakota",
  "NE - Nebraska",
  "NH - New Hampshire",
  "NJ - New Jersey",
  "NM - New Mexico",
  "NV - Nevada",
  "NY - New York",
  "OH - Ohio",
  "OK - Oklahoma",
  "OR - Oregon",
  "PA - Pennsylvania",
  "PR - Puerto Rico",
  "RI - Rhode Island",
  "SC - South Carolina",
  "SD - South Dakota",
  "TN - Tennessee",
  "TX - Texas",
  "UT - Utah",
  "VA - Virginia",
  "VI - Virgin Islands",
  "VT - Vermont",
  "WA - Washington",
  "WI - Wisconsin",
  "WV - West Virginia",
  "WY - Wyoming",
];

let counties = [
  "Megye válaszása...",
  "Budapest",
  "Bács-Kiskun",
  "Baranya",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Csongrád-Csanád",
  "Fejér",
  "Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
];

const generateStateList = () => {
  states.forEach((state) => {
    const stateOption = document.createElement("option");
    stateSelect.appendChild(stateOption);

    stateOption.innerHTML = state;
  });
};

const generateCountyList = () => {
  counties.forEach((county) => {
    const countyOption = document.createElement("option");
    stateSelect.appendChild(countyOption);

    countyOption.innerHTML = county;
  });
};

countrySelect.addEventListener("change", () => {
  if (countrySelect.value === "United States") {
    stateSelect.innerHTML = "";
    labelStateOrCounty.innerHTML = "State";
    generateStateList();
  } else if (countrySelect.value === "Magyarország") {
    stateSelect.innerHTML = "";
    labelStateOrCounty.innerHTML = "Megye";
    generateCountyList();
  } else {
    labelStateOrCounty.innerHTML = "State";
    stateSelect.innerHTML = "";
    const chooseOption = document.createElement("option");
    chooseOption.innerHTML = "Choose...";
    stateSelect.appendChild(chooseOption);
  }
});
