'use strict';

goog.provide('Blockly.Python.NEOPIXE');

goog.require('Blockly.Python');


Blockly.Python['pin_neopixel'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_can = block.getFieldValue('Can');
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = NeoPixel(Pin(' + dropdown_pin + ', Pin.OUT),' + number_can + ')\n';
  return code;
};

//code for HEX to RGB
Blockly.Python['neo_cual'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  var value_numero = Blockly.Python.valueToCode(block, 'numero', Blockly.Python.ORDER_ATOMIC);
  var value_rgb = Blockly.Python.valueToCode(block, 'rgb', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '[' + value_numero + '-1] = ' + value_rgb + '\n';
  return code;
};


Blockly.Python['escribir_neo'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.write()\n';
  return code;
};
