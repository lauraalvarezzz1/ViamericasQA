/**
 * Created by lauraalvarez on 12/11/17.
 */


'use strict';

var howitworks = function() {
    //USA AGENT
    this.usaAgent = element(by.id('agents'));
    this.allowButton = element (by.xpath('/html/body/div[4]/div[2]/button[1]'));
    this.dontallowButton = element (by.xpath('/html/body/div[4]/div[2]/button[2]'));
    this.okButton = element (by.xpath('/html/body/div[4]/div[2]/button[1]'));
    this.popup = element (by.xpath('/html/body/div[4]/div[2]'));

    //International Pickup
    this.internationalPickup = element(by.id('payers'));
    this.icountryLI = element.all(by.css('dropdown-viamericas#countries ul.dropdown-viam-list li'));
    this.icountryI = element(by.css('dropdown-viamericas#countries'));


};
module.exports = new howitworks();