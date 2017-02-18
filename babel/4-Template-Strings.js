// Basic literal string creation
'This is a pretty littel template string..'

// Multiline strings
'In ES6
this is legal bro'

// Interpolate variable binding (like as String.Format on C#)
var name = "Mike", time = "today";
'Hello ${}, how are you ${time}?'

// Unescaped template string
String.raw'In ESS "\n" is a line-feed'

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET`http://foo.org/bar?a=${a}&b=${b}
    Content-Type: application/json
    X-Credentials: ${credentials}
    { "foo": ${foo},
      "bar": ${bar}}`(myOnReadyStateChangeHandler);