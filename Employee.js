'use strict'
import { resolve } from 'path'
import { readFile, readFileSync, writeFile, writeFileSync } from 'fs'

const fs = require('fs')

const buffer2json =
  (buffer) =>
  JSON.parse(buffer.toString())

class Employee {
  constructor (n, t, s) {
    this.n = n
    this.t = t
    this.s = s
  }

  get name () {
    return this.n
  }

  set name (n) {
    return this.n = n
  }

  get title () {
    return this.t
  }

  set title (t) {
    return this.t = t
  }

  get salary () {
    return this.s
  }

  set salary (s) {
    return this.s = s
  }

  promote (t, s) {
    this.t = t
    this.s = s
  }

  static parseFromFilePath (path) {
    const readFile = buffer2json(fs.readFileSync(path))
    return new this(readFile.n, readFile.t, readFile.s)
  }
}

module.exports = {
  Employee
}
