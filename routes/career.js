const express = require('express')
const recruit = require('../models/recruitement')
const auth = require('../middleware/auth')

const route = new express.Router()