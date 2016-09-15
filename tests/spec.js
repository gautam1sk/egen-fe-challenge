describe('Filters', function(){ //describe your object type
    beforeEach(module('myApp')); //load module
    describe('ccLogo',function(){ //describe your app name
        var ccLogo;
        beforeEach(inject(function($filter){ //initialize your filter
            ccLogo = $filter('ccLogo',{});
        }));
        it('Should Detect a Visa Card', function(){  //write tests
            expect(ccLogo('4111111111111111')).toBe('background: url(img/visa_logo_3.gif) no-repeat scroll 7px 7px'); //pass
        });
        it('Should Detect a American Express Card', function(){  //write tests
            expect(ccLogo('371449635398431')).toBe("background: url(img/american_express_logo_3.gif) no-repeat scroll 7px 7px"); //pass           
        });
        it('Should Detect a Discover Card', function(){  //write tests
            expect(ccLogo('6011111111111117')).toBe('background: url(img/discover_logo_3.gif) no-repeat scroll 7px 7px'); //pass            
        });
        it('Should Detect a MasterCard', function(){  //write tests
            expect(ccLogo('5555555555554444')).toBe('background: url(img/mastercard_logo_3.gif) no-repeat scroll 7px 7px'); //pass           
        });
        it('Should Detect a Maestro Card', function(){  //write tests
            expect(ccLogo('6759649826438453')).toBe('background: url(img/maestro.gif) no-repeat scroll 7px 7px'); //pass
        });
        it('Should show DefaultCard if it is Misclenaeous CreditCard', function(){  //write tests
            expect(ccLogo('30569309025904')).toBe('background: url(img/default_card.jpeg) no-repeat scroll 7px 7px'); //pass
            expect(ccLogo('411111')).toBe('background: url(img/default_card.jpeg) no-repeat scroll 7px 7px'); //pass
        });        
    });
});