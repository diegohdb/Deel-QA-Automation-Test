
const el = require('./elements').ELEMENTS
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var currentDay = parseInt(dd);
var previousDay = currentDay - 1;

class FixedRate {


    isOnScreen() {
        cy.get(el.screenTitle).should('be.visible');
    }

    fillGeneralInfo(contractName, jobTitle) {
        cy.get(el.etContractName).type(contractName);
        cy.get(el.etContractName).should('have.value', contractName);
        cy.get(el.etJobTitle).type(jobTitle);
        cy.get(el.etContractName).click();
        cy.get(el.etJobTitle).should('have.value', jobTitle);
        cy.get(el.selectElement).type('Senior');
        cy.get(el.seniorSeniority).click();
        cy.get(el.selectedOption).should('have.text', 'Senior (Individual Contributor Level 3)');
        cy.get(el.ddArrow).click();
        cy.contains(jobTitle).click();
        cy.get(el.datePicker).click();
        this.setPreviousDay();
        cy.get(el.datePicker).click();
        cy.get(el.currentDay).should('have.text', previousDay);
        cy.get(el.etContractName).click();
        cy.get(el.btnSubmit).click();
    }

    fillPaymentDetails(rate, currency, period) {
        cy.get(el.etRate).type(rate);
        cy.contains('USD - US Dollar').click();
        cy.contains(currency).click();
        cy.contains('Month').click();
        cy.contains(period).click();
        cy.get(el.btnSubmit).click();
    }

    fillExtras(specialClause) {
        cy.get(el.btnSpecialClause).click();
        cy.get(el.textBoxSpecialClause).type(specialClause);
        cy.get(el.nextBtn).click();
    }

    fillCompliance(country, state) {
        cy.get(el.selectCountry).click();
        cy.contains(country).click();
        cy.get(el.selectState).click();
        cy.contains(state).click();
        cy.get(el.nextBtn).click()
    }

    validateContract(rate, period, country, state, clause) {
        cy.get(el.contractType).should('have.text', 'Fixed rate');
        this.validateContractDate()
        this.validateRate(rate, period)
        cy.get(el.contractCountry).should('have.text', `${state} (${country})`);
        cy.get(el.contractSpecialClause).should('have.text', clause);
    }

    navigateToNext() {
        cy.get(el.btnSubmit).click();
    }

    setPreviousDay() {
        if (currentDay > 1) {
            cy.contains(previousDay).click();
        } else {
            try {
                cy.contains('31').click();
            } catch (error) {
                cy.contains('30').click();
            }
        }
    }

    validateContractDate() {
        const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec"]
        const monthName = monthNames[today.getMonth()]
        var yyyy = today.getFullYear();
        var expectedDate = `${monthName} ${currentDay-1}th, ${yyyy}`;
        cy.get(el.contractStartDate).should('have.text', expectedDate)        
    }

    validateRate(rate, period) {
        const periodRate = period.toLowerCase();
        const expectedRate = `£${rate} Per ${periodRate}`
        cy.get(el.contractRate).should('have.text', expectedRate);
    }

}
export default new FixedRate();