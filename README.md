# dataman [![](https://github.com/themes/tactile/images/octocat-icon.png)](https://github.com/nemanjan00/dataman#dataman)

![npm](https://img.shields.io/npm/dw/dataman)
[![Build Status](https://travis-ci.com/nemanjan00/dataman.svg?branch=master)](https://travis-ci.com/nemanjan00/dataman)

Library for managing data in redis-like storage engines

![](https://github.com/nemanjan00/dataman/blob/master/logo/logo-100.png?raw=true)

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Usage](#usage)
	* [Getting/setting primitive as example](#gettingsetting-primitive-as-example)
* [Backends](#backends)
* [Structures](#structures)
* [Installation](#installation)
	* [npm](#npm)
	* [yarn](#yarn)
* [Authors](#authors)

<!-- vim-markdown-toc -->

## Usage

### Getting/setting primitive as example

```javascript
const dataman = require("dataman);
const storage = dataman.storage("memory://");

storage.primitive.set("test", "testValue").then(() => {
	storage.primitive.get("test").then(data => {
		console.log(data);
	});
});

```

## Backends

* Redis

* Memory (for single instance projects, can be serialized and deserialized into)

## Structures

* Queue

* List

* Hashmap

* String/Number/Boolean

## Installation

### npm

```bash
npm install dataman --save
```

### yarn

```bash
yarn add dataman
```

## Authors

* [nemanjan00](https://github.com/nemanjan00)

