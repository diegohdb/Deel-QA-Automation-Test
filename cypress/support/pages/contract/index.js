const el = require('./elements').ELEMENTS

class Contract {

    isOnScreen() {
        cy.get(el.screenTitle).should('be.visible');
    }

    navigateToFixedRate() {
        cy.get(el.btnFixedRate).click()
    }
    
}
export default new Contract();