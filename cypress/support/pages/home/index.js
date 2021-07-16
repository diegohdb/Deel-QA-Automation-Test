const el = require('./elements').ELEMENTS

class Home {

    isOnScreen() {
        cy.get(el.headingGreeting).should('be.visible');
    }

    navigateToCreateContract() {
        cy.get(el.btnCreate).click();
    }

    isPopupOnScreen() {
        cy.get(el.modalPopup);
        cy.get(el.btnClose).click();
    }
}
export default new Home();