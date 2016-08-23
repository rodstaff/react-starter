import React from 'react'
import {render} from 'react-dom'

      var rce = React.createElement,
          rcc = React.createClass

      var contacts = [
        {key: 1, name: "Frank Sinatra", email: "frank@franksinatra.com", description: "Front-end Honcho"},
        {key: 2, name: "Joe Dimaggio", email: "joe@joedimaggio.com", description:  "Better Batter"},
        {key: 3, name: "John McCenna", email: "john@johnmcenna.com"},
        {key: 5, name: "Ted Selena", description:  "unknown"}
      ]

      var ContactItem = rcc({
        propTypes: {
          name: React.PropTypes.string.isRequired,
          email: React.PropTypes.string.isRequired,
          description: React.PropTypes.string,
        },

        render: function() {
    // I wrap mult-line return statements in parentheses to avoid the
    // inevitable bugs caused by forgetting that JavaScript will throw away
    // the final lines when possible. The parentheses are not strictly
    // necessary.  (Comments by JamesKNelson)
          return (
            rce('li', {},
              rce('h2', {}, this.props.name),
              rce('a', {href: 'mailto:'+this.props.email}, this.props.email),
              rce('div', {}, this.props.description)
            )
          )
        }
      })

      var contactItemElements = contacts
        .filter(function(contact) { return contact.email })
        .map(function(contact) { return rce(ContactItem, contact) })

      var rootElement =
        rce('div', {}, 
          rce('h1', {}, "List of Famous Persons?"),
          rce('ul', {}, contactItemElements)
        )

      render(rootElement, document.getElementById('content'))



