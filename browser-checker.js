"use strict";
// Object created to make localization easier
// DO NOT translate the text behind the :, only the text within double quotes "".
// Using ISO 639-1 first two characters for language

const messages = {
  en: {
    browserNameSupported: " is supported",
    browserNameUnsupported: " Your browser is not supported",
    browserVersionSupported: " version is supported",
    browserVersionUnsupported: "The browser version is not supported",
    browserSupported: "Your browser is SUPPORTED",
    browserUnsupported: "Your browser is NOT SUPPORTED",
    browserPopUpsAllowed: "Pop-up blocker is DISABLED",
    browserPopUpsBlocked: "Pop-up blocker is ENABLED",
    browserCookiesAllowed: "Cookies are enabled",
    browserCookiesBlocked: "Cookies are blocked",
  },
  es: {
    browserNameSupported: "El nombre del navegador es soportado",
    browserNameUnsupported: "El nombre del navegador no es soportado",
    browserVersionSupported: "La versión del navegador es soportada",
    browserVersionUnsupported: "La versión del navegador no es soportada",
    browserSupported: "Su navegador es Soportado",
    browserUnsupported: "Su navegador no es soportado",
    browserPopUpsAllowed: "No se están bloqueando ventanas emergentes",
    browserPopUpsBlocked: "Se están bloqueando ventanas emergentes",
    browserCookiesAllowed: "Las cookies están permitidas",
    browserCookiesBlocked: "Las cookies están siendo bloqueadas",
  },
};

// As of may 2021
/* Valid browsers:
   
    -- Safari 13 + on macOS
    -- Safari 12+ on iOS
    -- Chrome 87+ on any OS
    -- Edge 87+ on any OS
    -- Firefox 78+ on any OS
*/

// Getting the data from useragent
let userAgent = navigator.userAgent;
// At the moment of this implementation, the object navigator.userAgentData is not available on Safari and Firefox, opera supports it but the position is different than edge and chrome...

// As of may 2021, this object defines the validation values that a browser may receive
const browserValidation = {
  Edg: {
    name: "Microsoft Edge",
    version: 87,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  EdgA: {
    name: "Microsoft Edge for Android",
    // Mobile version on Android has a different version than in PC
    version: 46,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  EdgiOS: {
    name: "Microsoft Edge for iOS",
    // Mobile version on iOS has a different version than in PC
    version: 46,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  Chrome: {
    name: "Google Chrome",
    version: 87,
    nameAndVersionPosition: [1],
    namePosition: 2,
    versionPosition: 3,
  },
  // Google chrome on iOS is called CriOS
  CriOS: {
    name: "Google Chrome for iOS",
    version: 33,
    // This is the position of the values based on the regex
    nameAndVersionPosition: [1],
    namePosition: 2,
    versionPosition: 3,
  },
  Firefox: {
    name: "Firefox",
    version: 78,
    // This is the position of the values based on the regex
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 5,
  },
  FxiOS: {
    name: "Firefox for iOS",
    version: 33,
    // This is the position of the values based on the regex
    nameAndVersionPosition: [1],
    namePosition: 2,
    versionPosition: 3,
  },
  Safari: {
    name: "Safari",
    nameAndVersionPosition: [5, 2],
    namePosition: 5,
    versionPosition: 2,
    platform: {
      desktop: {
        name: ["MacIntel"],
        version: 13,
      },
      mobile: {
        name: ["iPhone", "iPad", "iPod"],
        version: 12,
      },
    },
  },
};

const regex = [
  /(Mobile)? (\bSafari\/\d+\.\d+\b)? ?\b((Edg(A|iOS|e)?)\/(\d+)(.\d+\.){0,2}(\d+)?)\b ?((\bMobile)\/\w+)?/,
  /\b(Version)\/(\d+)(\.\d+){0,2}\b (Mobile\/\w+)? ?\b(Safari)\/(\d+)(\.\d+){0,3}$/,
  /[^Brave] \b((Chrome|CriOS)\/(\d+)(\.\d+){0,4})\b (Mobile(\/\w+\b)?)? ?\bSafari\/(\d+)(\.\d+){0,3}$/,
  /\bGecko\/(\w+)(\.\d+){0,4}\b \b((Firefox)\/(\d+)(\.\d+){0,3})$/,
  /(\b(FxiOS)\/(\d+)\.\d+\b) \b(Gecko|Mobile)\/(\w+)(\.\d+){0,4}\b/,
];

// declaring empty variables
let browserName;
let browserVersion;
let fullBrowserNameAndVersion = [];
const validBrowserNames = Object.keys(browserValidation);

let regexResultArr = [];

for (let i = 0; i < regex.length; i++) {
  if ((regexResultArr = userAgent.match(regex[i]))) {
    regexResultArr = userAgent.match(regex[i]);
    break;
  }
}

// Evaluates if the result received by the regex is null, if it is, then browser is not valid.
if (regexResultArr == null) {
  // literally do nothing
} else {
  for (let i = 0; i < regexResultArr.length; i++) {
    if (validBrowserNames.indexOf(regexResultArr[i]) >= 0) {
      browserName = validBrowserNames.indexOf(regexResultArr[i]);
      browserName = validBrowserNames[browserName];
    }
  }

  browserVersion = browserValidation[browserName].versionPosition;
  browserVersion = Number(regexResultArr[browserVersion]);

  let browserNameAndVersion =
    browserValidation[browserName].nameAndVersionPosition;

  // This happens because of Safari, safari does not return only one value and they are stored in an array, we need to iterate on each one.
  if (browserNameAndVersion.length >= 2) {
    for (let i = 0; i < browserNameAndVersion.length; i++) {
      fullBrowserNameAndVersion.push(regexResultArr[browserNameAndVersion[i]]);
    }
    fullBrowserNameAndVersion =
      fullBrowserNameAndVersion[0] + " " + fullBrowserNameAndVersion[1];
  } else {
    fullBrowserNameAndVersion =
      browserValidation[browserName].nameAndVersionPosition;
    fullBrowserNameAndVersion = regexResultArr[fullBrowserNameAndVersion];
    fullBrowserNameAndVersion = fullBrowserNameAndVersion.replace("/", " ");
  }
}

let fullBrowserName;

if (!browserName) {
  browserName = undefined;
} else {
  fullBrowserName = browserValidation[browserName].name;
}

console.log(
  browserVersion,
  browserName,
  fullBrowserName,
  fullBrowserNameAndVersion
);

document.writeln(userAgent);

// defining an object that returns the required values
let browser = {
  validBrowsers: browserValidation,
  nameAndVersion: function () {
    if (fullBrowserNameAndVersion) {
      return fullBrowserNameAndVersion;
    } else {
      return "Not a valid browser";
    }
  },
  // The object navigator returns most of the data
  platform: navigator.platform,
  userAgent: navigator.userAgent,
  // Need to extract the first two characters of the full language since we do not change language based on location but rather on main language.
  language: function () {
    let language = navigator.language.substring(0, 2);
    let listOfSupportedLanguages = Object.keys(messages);
    if (language in listOfSupportedLanguages) {
      return navigator.language.substring(0, 2);
    } else {
      // If the language does not exist on our supported list of languages, will always return english by default
      return "en";
    }
  },
  areCookiesAllowed: navigator.cookieEnabled,
  // storing the values of name and version within the object
  isNameValid: function () {
    if (browserName) {
      return true;
    } else {
      return false;
    }
  },
  version: function () {
    if (browserVersion >= this.validBrowsers[browserName].version) {
      return true;
    }

    if (browserName == "Safari") {
      if (
        this.validBrowsers.Safari.platform.desktop.name.includes(this.platform)
      ) {
        if (
          browserVersion >= this.validBrowsers.Safari.platform.desktop.version
        ) {
          return true;
        }
      }
      if (
        this.validBrowsers[browserName].platform.mobile.name.includes(
          this.platform
        )
      ) {
        if (
          browserVersion >=
          this.validBrowsers[browserName].platform.mobile.version
        ) {
          return true;
        }
      }
    } else {
      return false;
    }
  },
  // checks if the popups are allowed
  arePopUpsAllowed: function () {
    let newWindow = window.open(
      "",
      "_media",
      "width=0,height=0,left=0,top=0,location=0, scrollbar=0"
    );
    if (!newWindow || newWindow.closed || typeof newWindow === "undefined") {
      return false;
    } else {
      newWindow.close();
      return true;
    }
  },
  isBrowserValid: function () {
    if (this.version() && this.isNameValid()) {
      return true;
    } else {
      return false;
    }
  },
  whichOS: function () {
    if (userAgent.includes("Macintosh")) {
      return "MacOS";
    } else if (userAgent.includes("Windows Mobile")) {
      return "Windows Mobile";
    } else if (
      userAgent.includes("Windows NT") &&
      !userAgent.includes("Xbox")
    ) {
      return "Windows";
    } else if (userAgent.includes("Windows NT") && userAgent.includes("Xbox")) {
      return "Windows for Xbox";
    } else if (userAgent.includes("Android")) {
      return "Android";
    } else if (userAgent.includes("X11") || userAgent.includes("Linux")) {
      return "Linux";
    } else if (
      userAgent.includes(
        browserValidation.Safari.platform.mobile.name[0] ||
          browserValidation.Safari.platform.mobile.name[1] ||
          browserValidation.Safari.platform.mobile.name[2]
      )
    ) {
      return "iOS";
    } else if (userAgent.includes("CrOS")) {
      return "Chrome OS / ChromeBook";
    } else {
      return "Unknown OS";
    }
  },
};

const greenCheck =
  "<img CLASS='check' src='green_check.png' /> <span style='font-weight: bold;'>";
const redCheck =
  "<img CLASS='check' src='red_x.png' /> <span style='font-weight: bold;'>";

const alertCheck = "";

const closeCheck = "</span></br>";

const messagesToDisplay = {
  browserValidation: {
    objectAtt: browser.isBrowserValid(),
    supported:
      greenCheck + messages[browser.language()].browserSupported + closeCheck,
    unsupported:
      redCheck + messages[browser.language()].browserUnsupported + closeCheck,
  },
  browserName: {
    objectAtt: browser.isNameValid(),
    supported:
      greenCheck +
      fullBrowserName +
      messages[browser.language()].browserNameSupported +
      closeCheck,
    unsupported:
      redCheck +
      messages[browser.language()].browserNameUnsupported +
      closeCheck,
  },
  browserVersion: {
    objectAtt: browser.version,
    supported:
      greenCheck +
      browser.nameAndVersion() +
      messages[browser.language()].browserVersionSupported +
      closeCheck,
    unsupported:
      redCheck +
      messages[browser.language()].browserVersionUnsupported +
      closeCheck,
  },
  cookiesValidation: {
    objectAtt: browser.areCookiesAllowed,
    supported:
      greenCheck +
      messages[browser.language()].browserCookiesAllowed +
      closeCheck,
    unsupported:
      redCheck +
      messages[browser.language()].browserCookiesBlocked +
      closeCheck,
  },
  popUpsValidation: {
    objectAtt: browser.arePopUpsAllowed(),
    supported:
      greenCheck +
      messages[browser.language()].browserPopUpsAllowed +
      closeCheck,
    unsupported:
      redCheck + messages[browser.language()].browserPopUpsBlocked + closeCheck,
  },
};

const messagesToDisplayKeys = Object.keys(messagesToDisplay);

const displayingMessages = function (arrayOfMessages) {
  // added os and language to show that this can also display 1 message at a time or all of them
  document.writeln(
    ` <span style='font-weight: bold;'> The operating system is ${browser.whichOS()} </br></span>`
  );
  document.writeln(
    `<span style='font-weight: bold;'> The language is ${browser.language()} </br> </span>`
  );
  for (let i = 0; i < arrayOfMessages.length; i++) {
    messagesToDisplay[arrayOfMessages[i]].objectAtt
      ? document.writeln(messagesToDisplay[arrayOfMessages[i]].supported)
      : document.writeln(messagesToDisplay[arrayOfMessages[i]].unsupported);
  }
};

// To display all messages, please call the function displayingMessages and pass the messagesToDisplayKeys as parameters
displayingMessages(messagesToDisplayKeys);
