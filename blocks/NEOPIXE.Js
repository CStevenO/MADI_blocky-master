'use strict';

goog.provide('Blockly.Blocks.NEOPIXE');  // Deprecated
goog.provide('Blockly.Constants.NEOPIXE');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['pin_neopixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("neo_pixel"), "Variable");
    this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO4","4"],
          ["GPIO12","12"],
          ["GPIO13","13"],
          ["GPIO14","14"],
          ["GPIO15","15"],
          ["GPIO25","25"],
          ["GPIO26","26"],
          ["GPIO27","27"],
          ["GPIO32","32"],
          ["GPIO33","33"],
          ["GPIO35","35"],
          ["GPIO36","36"],
          ["GPIO37","37"],
          ["GPIO38","38"]
        ]), "Pin")
        .appendField("Cantidad")
        .appendField(new Blockly.FieldNumber(1, 1, 100, 1), "Can");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(162);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['neo_cual'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("NeoPixel");
    this.appendValueInput("numero")
        .setCheck("Number")
        .appendField("Pixel #");
    this.appendValueInput("rgb")
        .setCheck(null)
        .appendField("Color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(162);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['escribir_neo'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Encender NeoPixels");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(162);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
