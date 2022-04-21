// Object created to make localization easier
// DO NOT translate the text behind the :, only the text within double quotes "".
// Using ISO 639-1 first two characters for language
// In order to test IE had to change all variables from const or let to var
// due to Internet explorer, cannot use includes, instead using indexOf

// Getting the data from useragent
var userAgent = navigator.userAgent;
var language = window.drupalSettings.path.currentLanguage;
language = language.slice(0, 2);

// green check for supported
var greenCheck =
  "<img CLASS='check' src='https://help-blackboard-com.s3.amazonaws.com/img/browser_checker-green_check.png' /> <span style='font-weight: bold;'>";
// red check for unsupported
var redCheck =
  "<img CLASS='check' src='https://help-blackboard-com.s3.amazonaws.com/img/browser_checker-red_check.png' /> <span style='font-weight: bold;'>";

var warningCheck =
  "<img CLASS='check' src='https://help-blackboard-com.s3.amazonaws.com/img/browser_checker-warning_check.png' /> <span style='font-weight: bold;'>";

var noCheck = "<span style='font-weight: bold;'>";

// Closing the tags opened
var closeCheck = "</span>";

// validating the browser is internet explorer, if it is, the complete execution is stopped.

var messages = {
  en: {
    browserNameUnsupported: " Your browser is not supported",
    browserSupported: "SUPPORTED",
    browserUnsupported: "NOT SUPPORTED",
    browserPopUpsAllowed: "Pop-up blocker is disabled",
    browserPopUpsBlocked: "Pop-up blocker is blocking new windows",
    browserCookiesAllowed: "Enabled",
    browserCookiesBlocked: "Disabled",
  },
  es: {
    browserNameUnsupported: " Su navegador no está soportado",
    browserSupported: "SOPORTADO",
    browserUnsupported: "NO SOPORTADO",
    browserPopUpsAllowed:
      "El bloqueo de ventanas emergentes está deshabilitado",
    browserPopUpsBlocked:
      "El bloqueo de nuevas ventanas emergentes está activo",
    browserCookiesAllowed: "Activo",
    browserCookiesBlocked: "Deshabilitado",
  },
  ar: {
    browserNameUnsupported: " المستعرض الخاص بك غير مدعوم",
    browserSupported: "يتم دعمه",
    browserUnsupported: "غير مدعوم",
    browserPopUpsAllowed: "يتم تعطيل أداة منع الإطارات المنبثقة",
    browserPopUpsBlocked: "منع الإطارات المنبثقة يمنع النوافذ الجديدة",
    browserCookiesAllowed: "ممكَّن",
    browserCookiesBlocked: "معطَّل",
  },
  ca: {
    browserNameUnsupported: " El navegador no és compatible",
    browserSupported: "COMPATIBLE",
    browserUnsupported: "NO COMPATIBLE",
    browserPopUpsAllowed:
      "El bloquejador de finestres emergents està desactivat",
    browserPopUpsBlocked:
      "El bloquejador de finestres emergents està bloquejant finestres noves",
    browserCookiesAllowed: "Activat",
    browserCookiesBlocked: "Desactivat",
  },
  zh: {
    browserNameUnsupported: "您的浏览器不受支持",
    browserSupported: "受支持",
    browserUnsupported: "不受支持",
    browserPopUpsAllowed: "已禁用弹出窗口阻止程序",
    browserPopUpsBlocked: "弹出窗口阻止程序正在阻止打开新窗口",
    browserCookiesAllowed: "已启用",
    browserCookiesBlocked: "已禁用",
  },
  cy: {
    browserNameUnsupported: " Ni chefnogir eich porwr",
    browserSupported: "CEFNOGIR",
    browserUnsupported: "NIS CEFNOGIR",
    browserPopUpsAllowed: "Rhwystrydd ffenestr naid wedi'i analluogi",
    browserPopUpsBlocked:
      "Mae rhwystrydd ffenestr naid yn rhwystro ffenestri newydd",
    browserCookiesAllowed: "Galluogwyd",
    browserCookiesBlocked: "Analluogwyd",
  },
  de: {
    browserNameUnsupported: " Ihr Browser wird nicht unterstützt",
    browserSupported: "UNTERSTÜTZT",
    browserUnsupported: "NICHT UNTERSTÜTZT",
    browserPopUpsAllowed: "Popupblocker ist deaktiviert",
    browserPopUpsBlocked: "Pop-up-Blocker blockiert neue Fenster",
    browserCookiesAllowed: "Aktiviert",
    browserCookiesBlocked: "Deaktiviert",
  },
  fi: {
    browserNameUnsupported: " Selaintasi ei tueta",
    browserSupported: "TUETAAN",
    browserUnsupported: "EI TUETA",
    browserPopUpsAllowed: "Ponnahdusikkunoiden esto ei ole käytössä",
    browserPopUpsBlocked: "Ponnahdusikkunoiden esto estää uudet ikkunat",
    browserCookiesAllowed: "Käytössä",
    browserCookiesBlocked: "Ei käytössä",
  },
  fr: {
    browserNameUnsupported: " Votre navigateur n'est pas pris en charge",
    browserSupported: "PRIS EN CHARGE",
    browserUnsupported: "NON PRIS EN CHARGE",
    browserPopUpsAllowed: "Le bloqueur de fenêtres pop-up est désactivé",
    browserPopUpsBlocked:
      "Le bloqueur de fenêtres pop-up bloque de nouvelles fenêtres",
    browserCookiesAllowed: "Activé",
    browserCookiesBlocked: "Désactivé",
  },
  he: {
    browserNameUnsupported: " הדפדפן שלך לא נתמך",
    browserSupported: "נתמך",
    browserUnsupported: "לא נתמך",
    browserPopUpsAllowed: "חוסם חלונות קופצים מושבת",
    browserPopUpsBlocked: "חוסם חלונות קופצים מושבת חוסם חלונות חדשים",
    browserCookiesAllowed: "מופעל",
    browserCookiesBlocked: "מושבת",
  },
  it: {
    browserNameUnsupported: " Il browser non è supportato",
    browserSupported: "SUPPORTATO",
    browserUnsupported: "NON SUPPORTATO",
    browserPopUpsAllowed: "Blocco pop-up disabilitato",
    browserPopUpsBlocked:
      "Il blocco pop-up impedisce l'apertura di nuove finestre",
    browserCookiesAllowed: "Abilitato",
    browserCookiesBlocked: "Disabilitato",
  },
  ja: {
    browserNameUnsupported: "お使いのブラウザはサポートされていません",
    browserSupported: "サポート",
    browserUnsupported: "サポートされていません",
    browserPopUpsAllowed: "ポップアップブロッカーが無効",
    browserPopUpsBlocked:
      "ポップアップブロッカーが新規ウィンドウをブロックしています",
    browserCookiesAllowed: "有効",
    browserCookiesBlocked: "無効",
  },
  ko: {
    browserNameUnsupported: " 브라우저가 지원되지 않습니다.",
    browserSupported: "지원됨",
    browserUnsupported: "지원되지 않음",
    browserPopUpsAllowed: "팝업 차단이 비활성화됨",
    browserPopUpsBlocked: "팝업 차단 기능이 새 창을 차단하고 있습니다.",
    browserCookiesAllowed: "활성화됨",
    browserCookiesBlocked: "비활성화됨",
  },
  nb: {
    browserNameUnsupported: " Nettleseren din støttes ikke",
    browserSupported: "STØTTES",
    browserUnsupported: "IKKE STØTTET",
    browserPopUpsAllowed: "Popup-blokkering er deaktivert",
    browserPopUpsBlocked: "Popup-blokkering blokkerer nye vinduer",
    browserCookiesAllowed: "Aktivert",
    browserCookiesBlocked: "Deaktivert",
  },
  nl: {
    browserNameUnsupported: " Je browser wordt niet ondersteund",
    browserSupported: "ONDERSTEUND",
    browserUnsupported: "NIET ONDERSTEUND",
    browserPopUpsAllowed: "Pop-upblokkering is uitgeschakeld",
    browserPopUpsBlocked: "Pop-upblokkering blokkeert nieuwe vensters",
    browserCookiesAllowed: "Ingeschakeld",
    browserCookiesBlocked: "Uitgeschakeld",
  },
  pt: {
    browserNameUnsupported: " Seu navegador não é compatível",
    browserSupported: "COMPATÍVEL",
    browserUnsupported: "NÃO COMPATÍVEL",
    browserPopUpsAllowed: "O bloqueador de pop-ups está desativado",
    browserPopUpsBlocked:
      "O bloqueador de pop-ups está bloqueando novas janelas",
    browserCookiesAllowed: "Ativado",
    browserCookiesBlocked: "Desativado",
  },
  ru: {
    browserNameUnsupported: " Ваш браузер не поддерживается",
    browserSupported: "ПОДДЕРЖИВАЕТСЯ",
    browserUnsupported: "НЕ ПОДДЕРЖИВАЕТСЯ",
    browserPopUpsAllowed: "Блокировка всплывающих окон отключена",
    browserPopUpsBlocked:
      "Блокировка всплывающих окон включена. Открытие новых окон блокируется.",
    browserCookiesAllowed: "Включено",
    browserCookiesBlocked: "Отключено",
  },
  sv: {
    browserNameUnsupported: " Din webbläsare stöds inte",
    browserSupported: "STÖDS",
    browserUnsupported: "STÖDS INTE",
    browserPopUpsAllowed: "Popup-blockeraren är inte aktiverad",
    browserPopUpsBlocked: "Popup-blockeraren blockerar nya fönster",
    browserCookiesAllowed: "Aktiverad",
    browserCookiesBlocked: "Inaktiverad",
  },
  tr: {
    browserNameUnsupported: " Tarayıcınız desteklenmiyor",
    browserSupported: "DESTEKLENİYOR",
    browserUnsupported: "DESTEKLENMİYOR",
    browserPopUpsAllowed: "Açılır pencere engelleyici devre dışı",
    browserPopUpsBlocked:
      "Açılır pencere engelleyici yeni pencereleri engelliyor",
    browserCookiesAllowed: "Etkin",
    browserCookiesBlocked: "Devre dışı",
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

// Updated on April 21st 2022
/* Valid browsers:
    -- Safari 15 + on macOS
    -- Safari 15+ on iOS
    -- Chrome 100+ on any OS
    -- Edge 100+ on any OS
    -- Firefox 99+ on any OS
*/

// At the moment of this implementation, the object navigator.userAgentData is not available on Safari and Firefox, opera supports it but the position is different than edge and chrome...

// As of may 2021, this object defines the validation values that a browser may receive
// Updated on April 21st 2022
var browserValidation = {
  Edg: {
    name: "Microsoft Edge",
    version: 100,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  EdgA: {
    name: "Microsoft Edge for Android",
    // Mobile version on Android has a different version than in PC
    // as of april 21st 2022, they have merged the versions
    version: 100,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  EdgiOS: {
    name: "Microsoft Edge for iOS",
    // Mobile version on iOS has a different version than in PC
    // as of april 21st 2022, they have merged the versions
    version: 100,
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 6,
  },
  Chrome: {
    name: "Google Chrome",
    version: 100,
    nameAndVersionPosition: [1],
    namePosition: 2,
    versionPosition: 3,
  },
  // Google chrome on iOS is called CriOS
  // as of april 21st 2022, they have merged the versions
  CriOS: {
    name: "Google Chrome for iOS",
    version: 100,
    // This is the position of the values based on the regex
    nameAndVersionPosition: [1],
    namePosition: 2,
    versionPosition: 3,
  },
  Firefox: {
    name: "Firefox",
    version: 99,
    // This is the position of the values based on the regex
    nameAndVersionPosition: [3],
    namePosition: 4,
    versionPosition: 5,
  },
  FxiOS: {
    name: "Firefox for iOS",
    version: 99,
    // This is the position of the values based on the regex
    // as of april 21st 2022, they have merged the versions
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
        version: 15,
      },
      // as of april 21st 2022, they have merged the versions
      mobile: {
        name: ["iPhone", "iPad", "iPod"],
        version: 15,
      },
    },
  },
};

// Firefox for iOS is painfully hard to detect with only one regex, that is why it is on a different place
var regex = [
  /(Mobile)? (\bSafari\/\d+\.\d+\b)? ?\b((Edg(A|iOS|e)?)\/(\d+)(.\d+\.){0,2}(\d+)?)\b ?((\bMobile)\/\w+)?/,
  /\b(Version)\/(\d+)(\.\d+){0,2}\b (Mobile\/\w+)? ?\b(Safari)\/(\d+)(\.\d+){0,3}$/,
  /[^Brave] \b((Chrome|CriOS)\/(\d+)(\.\d+){0,4})\b (Mobile(\/\w+\b)?)? ?\bSafari\/(\d+)(\.\d+){0,3}$/,
  /\bGecko\/(\w+)(\.\d+){0,4}\b \b((Firefox)\/(\d+)(\.\d+){0,3})$/,
  /(\b(FxiOS)\/(\d+)\.\d+\b)/,
];

// declaring empty variables
var browserName;
var browserVersion;
var fullBrowserName;
var browserNameAndVersion;
var fullBrowserNameAndVersion = [];
var validBrowserNames = Object.keys(browserValidation);
var regexResultArr = [];

for (var i = 0; i < regex.length; i++) {
  if ((regexResultArr = userAgent.match(regex[i]))) {
    regexResultArr = userAgent.match(regex[i]);
    break;
  }
}

// Evaluates if the result received by the regex is null, if it is, then browser is not valid.
if (!regexResultArr) {
  browserName = "";
  browserVersion = "";
  fullBrowserName = "";
  browserNameAndVersion = "";
} else {
  for (var i = 0; i < regexResultArr.length; i++) {
    if (validBrowserNames.indexOf(regexResultArr[i]) >= 0) {
      browserName = validBrowserNames.indexOf(regexResultArr[i]);
      browserName = validBrowserNames[browserName];
    }
  }

  browserVersion = browserValidation[browserName].versionPosition;
  browserVersion = Number(regexResultArr[browserVersion]);

  browserNameAndVersion = browserValidation[browserName].nameAndVersionPosition;

  // This happens because of Safari, safari does not return only one value and they are stored in an array, we need to iterate on each one.
  if (browserNameAndVersion.length >= 2) {
    for (var i = 0; i < browserNameAndVersion.length; i++) {
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
  fullBrowserName = browserValidation[browserName].name;
}

// defining an object that returns the required values
var browser = {
  validBrowsers: browserValidation,
  nameAndVersion: function () {
    if (fullBrowserNameAndVersion) {
      return fullBrowserNameAndVersion;
    } else {
      return false;
    }
  },
  // The object navigator returns most of the data
  platform: navigator.platform,
  userAgent: navigator.userAgent,
  // Need to extract the first two characters of the full language since we do not change language based on location but rather on main language.
  language: function () {
    const availableLanguages = Object.keys(messages);
    const arrPos = availableLanguages.indexOf(language);
    if (arrPos >= 0) {
      return language;
    } else {
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
    if (!browserVersion) {
      return false;
    } else {
      if (browserName == "Safari") {
        if (
          this.validBrowsers.Safari.platform.desktop.name.indexOf(
            this.platform
          ) >= 0
        ) {
          if (
            browserVersion >= this.validBrowsers.Safari.platform.desktop.version
          ) {
            return true;
          }
        }
        if (
          this.validBrowsers[browserName].platform.mobile.name.indexOf(
            this.platform
          ) >= 0
        ) {
          if (
            browserVersion >=
            this.validBrowsers[browserName].platform.mobile.version
          ) {
            return true;
          }
        }
      } else if (browserVersion >= this.validBrowsers[browserName].version) {
        return true;
      }
    }
  },
  // checks if the popups are allowed
  arePopUpsAllowed: function () {
    var newWindow = window.open(
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
    if (userAgent.indexOf("Macintosh") > 1) {
      return "Mac OS";
    } else if (userAgent.indexOf("Windows Mobile") > 1) {
      return "Windows Mobile";
    } else if (
      userAgent.indexOf("Windows NT") > 1 &&
      userAgent.indexOf("Xbox") < 0
    ) {
      return "Windows";
    } else if (
      userAgent.indexOf("Windows NT") > 1 &&
      userAgent.indexOf("Xbox") > 1
    ) {
      return "Windows for Xbox";
    } else if (userAgent.indexOf("Android") > 1) {
      return "Android";
    } else if (userAgent.indexOf("X11") > 1 || userAgent.indexOf("Linux") > 1) {
      return "Linux";
    } else if (
      userAgent.indexOf(browserValidation.Safari.platform.mobile.name[0]) > 1 ||
      userAgent.indexOf(browserValidation.Safari.platform.mobile.name[1]) > 1 ||
      userAgent.indexOf(browserValidation.Safari.platform.mobile.name[2]) > 1
    ) {
      return "iOS";
    } else if (userAgent.indexOf("CrOS") > 1) {
      return "Chrome OS / ChromeBook";
    } else {
      return "Unknown OS";
    }
  },
};

// VALIDATING IF THE BROWSER IS INTERNET EXPLORER
// Ie Does not support includes.

// Using old validation function names to facilitate the whole transition.
var get_withBb = function () {
  if (browser.isBrowserValid()) {
    return document.writeln(
      greenCheck + messages[browser.language()].browserSupported + closeCheck
    );
  } else {
    return document.writeln(
      redCheck + messages[browser.language()].browserUnsupported + closeCheck
    );
  }
};

// Using old validation function names to facilitate the whole transition.
var get_os = function () {
  if (browser.whichOS() != "Unknown OS") {
    return document.writeln(noCheck + browser.whichOS() + closeCheck);
  } else {
    return document.write(noCheck + browser.whichOS() + closeCheck);
  }
};

// Using old validation function names to facilitate the whole transition.
var get_browser_language = function () {
  return document.writeln(browser.language());
};

// Using old validation function names to facilitate the whole transition.

var get_browser = function () {
  if (browser.isNameValid()) {
    return document.writeln(greenCheck + browser.nameAndVersion() + closeCheck);
  } else {
    return document.writeln(
      redCheck +
        messages[browser.language()].browserNameUnsupported +
        closeCheck
    );
  }
};

var get_cookies = function () {
  if (browser.areCookiesAllowed) {
    return document.writeln(
      greenCheck +
        messages[browser.language()].browserCookiesAllowed +
        closeCheck
    );
  } else {
    return document.writeln(
      redCheck + messages[browser.language()].browserCookiesBlocked + closeCheck
    );
  }
};

var get_popup = function () {
  if (browser.arePopUpsAllowed()) {
    return document.writeln(
      greenCheck +
        messages[browser.language()].browserPopUpsAllowed +
        closeCheck
    );
  } else {
    return document.writeln(
      warningCheck +
        messages[browser.language()].browserPopUpsBlocked +
        closeCheck
    );
  }
};
