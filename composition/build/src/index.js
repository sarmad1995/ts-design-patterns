"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.default("football.csv");
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
