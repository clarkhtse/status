require('HTMLDocument')
defineClass('UDHtmlParser', {}, {
  contentNode: function(htmlString) {
    var document = HTMLDocument.documentWithString(htmlString)	
    var containerNode = document.firstNodeMatchingSelector('#outer .row .small-12.large-8.columns')
    var contentNode = containerNode.firstNodeMatchingSelector('#content .jscroll-inner')
    return contentNode
  }
})