// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a sphere.
 */
function calculateVolumeOfSphere() {
  // input
  const radiusOfSphere = parseFloat(
    document.getElementById("radius-of-sphere").value
  )

  // process
  const volumeOfSphere = (4 / 3) * Math.PI * radiusOfSphere ** 3

  // output
  document.getElementById("answer").innerHTML =
    "Volume of a Sphere is: " + volumeOfSphere.toFixed(2) + " mm³"
}
