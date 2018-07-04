# ShortestWord

This program finds the shortest word on each line of a text file and display the results one word per line.

## Prerequisites

* Node.js

## Installation

Install dependencies

```
npm install
```

Then link to system path

```
npm link
```

Or install globally

```
npm install -g
```

## Usage

```
shortestword [options] <file>
```

For example `shortestword test.txt` should return:

```
mi
mi
non
f
sit
id
In

dui
in
in
id
eu
ut
vel
at
sapien
```

Run `shortestword --help` for more usage information.

## Observations

* It is assumed the file contains only whole words comprised of alphanumeric ASCII characters 
and no punctuation or other unusual characters and separated by spaces.
* Only the file extension is validated. The MIME type of the file should be validated
in a more robust system.
* Empty lines are returned as empty strings.