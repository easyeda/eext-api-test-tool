"use strict";
var edaEsbuildExportName = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    about: () => about,
    activate: () => activate,
    iframeApiTest: () => iframeApiTest
  });

  // extension.json
  var version = "1.0.3";

  // src/index.ts
  function activate(status, arg) {
  }
  function about() {
    eda.sys_MessageBox.showInformationMessage(
      eda.sys_I18n.text("EasyEDA extension SDK v", void 0, void 0, version),
      eda.sys_I18n.text("About")
    );
  }
  function iframeApiTest() {
    eda.sys_IFrame.openIFrame("/iframe/index.html", 320, 320);
  }
  return __toCommonJS(src_exports);
})();
