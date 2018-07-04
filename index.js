#!/usr/bin/env node
'use strict';

/**
 * Module dependencies.
 */
const program = require('commander'),
    fs = require('fs'),
    path = require('path'),
    readLine = require('readline');

/**
 * Parse the text file and process each line in turn
 * @param file Path to text file
 */
const parseFile = function (file) {
    if (path.extname(file) !== '.txt') {
        console.error('Error: Invalid file type');
        process.exit();
    }
    readLine.createInterface({
        input: fs.createReadStream(file)
            .on('error', function (error) {
                console.error('%s', error);
            }),
        terminal: false
    })
        .on('line', function (line) {
            parseLine(line);
        })
        .on('error', function (error) {
            console.error('%s', error);
        });
};

/**
 * Parse each line and output the shortest word. Empty lines are output as empty strings.
 * @param line
 */
const parseLine = function (line) {
    let words = line.split(' '),
        short_word = "";
    words.forEach(function (word) {
        if (short_word.length === 0) short_word = word; // First time around or empty line
        else if (word.length < short_word.length) short_word = word;
    });
    console.log(short_word);
};

/**
 * Command config
 */
program
    .version(require('./package').version)
    .arguments('<file>')
    .action(function (file) {
        parseFile(file);
    })
    .parse(process.argv);

