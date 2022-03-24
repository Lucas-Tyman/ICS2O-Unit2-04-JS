// Created by: Lucas Tyman
// Created on: Mar 2220
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trianlge.
 */
function calculate () {
  // input
  const height = parseInt(document.getElementById('height-of-triangle').value)
  const base = parseInt(document.getElementById('base-of-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
