//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Run this code when a form is submitted to 'questions-answer'
router.post('/questions-answer', function (req, res) {

    // Make a variable and give it the value from 'other'
    var whichDestination= req.session.data['which-destination']
  
    // Check whether the variable matches a condition
    if (whichDestination == "other"){
      // Send user to next page
      res.redirect('/ineligible')
    } else {
      // Send user to ineligible page
      res.redirect('/name')
    }
  
  })