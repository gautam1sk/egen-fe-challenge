angular.module('myApp', ['filters']);
angular.module('filters', []).
filter('ccLogo', [function () {
    return function (ccnumber) {
      if (!ccnumber) { return ''; }
      ccnumber = ccnumber.toString().replace(/\s+/g, '');
      var len = ccnumber.length;
      var valid;
      var img_type = "background: url(img/default_card.jpeg) no-repeat scroll 7px 7px";
      mul = 0,
      prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
      sum = 0;
      while (len--) {
          sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
          mul ^= 1;
      }
      
      if (sum % 10 === 0 && sum > 0) {
        valid = "valid"
      } else {
        valid = "not valid"
      }
      if(valid =="valid"){
      if(/^(34)|^(37)/.test(ccnumber)) {
        // "American Express";
        img_type = "background: url(img/american_express_logo_3.gif) no-repeat scroll 7px 7px";

      }
      if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
        // "Discover Card";
        img_type = "background: url(img/discover_logo_3.gif) no-repeat scroll 7px 7px";

      }
      if(/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
        cardType = "JCB";
      }
      if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(ccnumber)) {
        //"Maestro";
        img_type = "background: url(img/maestro.gif) no-repeat scroll 7px 7px";
      }
      if(/^5[1-5]/.test(ccnumber)) {
        //"MasterCard";
        img_type = "background: url(img/mastercard_logo_3.gif) no-repeat scroll 7px 7px";

      }
      if (/^4/.test(ccnumber)) {
        // "Visa";
        img_type = "background: url(img/visa_logo_3.gif) no-repeat scroll 7px 7px";

      }
    }
       return img_type;
      //return ccnumber + " is a(n) " + cardType + " and it's " + valid;
    };
}]);