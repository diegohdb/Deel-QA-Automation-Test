/// <reference types="cypress" />

import login from '../support/pages/login';
import home from '../support/pages/home';
import contract from '../support/pages/contract';
import fixed from '../support/pages/fixedRate';

const faker = require('faker');
const specialClause = faker.lorem.sentence();

describe('Create a fixed rate contract', () => {
    before(() => {
        login.open();
        login.loginDeel(Cypress.env('email'), Cypress.env('password'));
        home.isPopupOnScreen()
    });

    it('should be on home screen', () => {
        home.isOnScreen();
    });

    it('should launch the contract page', () => {
        home.navigateToCreateContract();
        contract.isOnScreen();
    });

    it('should launch the fixed rate contract page', () => {
        contract.navigateToFixedRate();
        fixed.isOnScreen();
    });

    it('should fill the contract info', () => {
        fixed.fillGeneralInfo(Cypress.env('contractName'), Cypress.env('jobTitle'));        
        fixed.fillPaymentDetails(Cypress.env('rate'), Cypress.env('currency'), Cypress.env('period'));
        fixed.navigateToNext();
        fixed.fillExtras(specialClause);
        fixed.fillCompliance(Cypress.env('country'), Cypress.env('state'));
        fixed.validateContract(Cypress.env('rate'), Cypress.env('period'), Cypress.env('country'), Cypress.env('state'), specialClause); 
    });    
})
