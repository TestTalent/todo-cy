import 'cypress-real-events'

export class MainPage {
    visit() {
        cy.visit('https://todomvc.com/examples/react/dist/')
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
}