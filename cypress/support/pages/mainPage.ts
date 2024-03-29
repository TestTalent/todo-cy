import 'cypress-real-events'
import { baseUrl } from '../../config';

export class MainPage {
    visit() {
        cy.visit(baseUrl)
        this.getToDoListItems().should('not.exist')
    } 
    
    addNewToDoItem(todo: string) {
        cy.get('header .new-todo')
            .should('exist')
            .clear()
            .type(todo + '{enter}')
    }

    getToDoListItems() {
        return cy.get('.todo-list li');
    }

    markToDoItemAsCompleted() {
        return this.getToDoListItems()
            .first()
            .find('.toggle')
            .click()
            .get('.todo-list li')
            .should('have.class', 'completed')
    }

    deleteToDoItem() {
        return this.getToDoListItems()
            .realHover()
            .find('.destroy').should('be.visible')
            .click()
    }

    changeNameOfToDoItem(newName: string) {
        return this.getToDoListItems()
            .dblclick()
            .get('main .new-todo')
            .should('exist')
            .clear()
            .type(newName + '{enter}')
    }

    filterToDoItemsByStatus(status: string) {
        return cy.get('.filters li').contains(status).click()
    }

    clearCompleted() {
        return cy.get('.clear-completed').click()
    }
}