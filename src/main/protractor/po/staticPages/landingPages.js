/**
 * Created by lauraalvarez on 1/18/18.
 */
'use strict';

var landingPages = function() {
    //Colombian page
    this.signUpBannerCol = element(by.id('sign-up-banner-home-col'));
    this.sendmoneyBannerCol = element(by.id('send-money-banner-home-col'));

    this.sendmoneysecondsectionCol = element(by.id('send-money-bottom-home-col'));
    this.comparepriceButtonCol = element(by.id('compare-home-col'));

    this.amountColLI = element.all(by.css('dropdown-viamericas#amount-compare-select-home-col ul.dropdown-viam-list li'));
    this.amountCol = element(by.css('dropdown-viamericas#amount-compare-select-home-col'));

    //Mexican page
    this.signUpBannerMex = element(by.id('sign-up-banner-home-mex'));
    this.sendmoneyBannerMex = element(by.id('send-money-banner-home-mex'));

    this.sendmoneysecondsectionMex = element(by.id('send-money-bottom-home-mex'));
    this.comparepriceButtonMex = element(by.id('compare-home-mex'));

    this.amountMexLI = element.all(by.css('dropdown-viamericas#amount-compare-select-home-mex ul.dropdown-viam-list li'));
    this.amountMex = element(by.css('dropdown-viamericas#amount-compare-select-home-mex'));

    //Guatemalan page
    this.signUpBannerGua = element(by.id('sign-up-banner-home-gua'));
    this.sendmoneyBannerGua = element(by.id('send-money-banner-home-gua'));

    this.sendmoneysecondsectionGua = element(by.id('send-money-bottom-home-gua'));
    this.comparepriceButtonGua = element(by.id('compare-home-gua'));

    this.amountGuaLI = element.all(by.css('dropdown-viamericas#amount-compare-select-home-gua ul.dropdown-viam-list li'));
    this.amountGua = element(by.css('dropdown-viamericas#amount-compare-select-home-gua'));

    //El Salvador page
    this.signUpBannerEls = element(by.id('sign-up-banner-home-els'));
    this.sendmoneyBannerEls = element(by.id('send-money-banner-home-els'));

    this.sendmoneysecondsectionEls = element(by.id('send-money-bottom-home-els'));

    //Honduras page
    this.signUpBannerHon = element(by.id('sign-up-banner-home-hon'));
    this.sendmoneyBannerHon = element(by.id('send-money-banner-home-hon'));

    this.sendmoneysecondsectionHon = element(by.id('send-money-bottom-home-hon'));

    //Philippines page
    this.signUpBannerPhp = element(by.id('sign-up-banner-home-phl'));
    this.sendmoneyBannerPhp = element(by.id('send-money-banner-home-phl'));

    this.sendmoneysecondsectionPhp = element(by.id('send-money-home-phl'));
    this.comparepriceButtonPhp = element(by.id('compare-home-phl'));

    this.amountPhpLI = element.all(by.css('dropdown-viamericas#amount-compare-select-home-phl ul.dropdown-viam-list li'));
    this.amountPhp = element(by.css('dropdown-viamericas#amount-compare-select-home-phl'));


};
module.exports = new landingPages();

