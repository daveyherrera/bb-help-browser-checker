# Browser checker for Learn

This browser checker was created in order to allow our clients to validate if the browser they are currently using is a browser that we support.
I will explain in this document what most of the code does since there are plenty (according to me) of notes on the code itself.

The whole idea was to enable two things that the previous version lacked:

   1. Escalability on languages
   2. Escalability on the displayed messages
   3. Readability and maintenance

### Supported versions

The object messages contains the possible messages, the attributes are always in english and the main keys are the first two letters of the ISO-639-1, if more languages need to be added, it is possible to re-use the exact same structure and update the message.key with the new language first two letters.

When started this project on May 2021, the valid browsers are (Includes mobile):

   * Safari on version 13+ on MacOS
   * Safari on version 12+ for iOS
   * Chrome 87+ for any OS
   * Firefox 78+ for any OS except iOS
   * Firefox for iOS, version 33+
   * Edge for any desktop 87+
   * Edge for android 46+
   * Edge for iOS 46+

### browserValidation

The object browserValidation contains the possible names that can be retrieved by the regular expressions, given there are several names that may change due to mobile browsers on android or iOS, each one of them has a key on the object and receives this attributes:

   * name: Is the general name of the browser
   * Version: is the BASE version of the browser that we support
   * nameAndVersionPosition: Is the name and the COMPLETE version position being returned by the regular expression (it HAS TO be an an array because of Chrome)
   * namePosition: is the position of the name of the browser returned by the regular expression
   * versionPosition: is the position of the version of the browser returned by the regular expression


For Safari:

   * Platform - Desktop - name: is the navigator.platform value that all macs return, since it is an array it can be updated with maybe the M1 value (if it changes)
   * Platform - Desktop - version: is the Safari base version on MacIntel
   * Platform - Mobile - name: is the name of the mobile platforms that can be returned
   * Platform - Mobile - version: is the base version for mobile platforms

### ReGex

I have available texts and userAgents used to get to this regular expressions
   * For Firefox: regexr.com/5sqlc
   * For Edge: regexr.com/5sqjp
   * For Safari: regexr.com/5sqjg
   * For Chrome: regexr.com/5sqja

Basically what follows is is just an evaluation that checks if the values within the array returned by the regular expression are contained within the array of validBrowserNames, if it is, it will assign a value to browser version, browser name and browser name and full version since it might be useful for support purposes.

I also set to undefined the vrowser name when there browserName is false.

### Browser Object

Will describe each attribute:

   * validBrowsers: contains the object browserValidation
   * nameAndVersion: returns the full browser name and version or not a valid browser if it is not valid
   * platform: it calls navigator.platform
   * userAgent: calls again navigator.userAgent
   * language: extracts from language.navigator the first two letters of the result and compares them to a listOfSupportedLanguages that is generated based on the messages object, if the user's language does not exist on messages, it defaults to english
   * areCookiesAllowed: returns a boolean 
   * isNameValid: returns a boolean if the browser name has a value
   * version: returns browserVersion
   * arePopUpsAllowed returns boolean if it was possible to open a new window
   * isBrowserValid returns boolean if it was possible to compare the version and name to the object validBrowsers
   * whichOS returns the name of the operating system

### MessagesToDisplay object

This is used as an object to be iterated by a function in order to send the correct messages at once

   * objectAtt is the value stored on the browser object
   * supported is the value that needs to be returned whatever we are evaluating is valud or not, it automatically calls the language given the browser language.
   * unsupported is the same as supported but negating it


#### Displaying messages

allows to return a single message or many at the same time.


