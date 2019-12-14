"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = __importDefault(require("./MatchReader"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.default("football.csv");
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
