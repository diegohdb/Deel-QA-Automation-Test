const el = require('./elements').ELEMENTS

class Login {

    open() {
        cy.visit('/'); 
    }

    loginDeel(email, password) {
        cy.get(el.inputEmail).type(email);
        cy.get(el.inputPassword).type(password);
        cy.get(el.btnSubmit).click();
    }
    
}
export default new Login();