export class MainPage {
    visit() {
        cy.visit('https://todomvc.com/examples/react/dist/')
    } 
    
    addNewToDoItem(todo: string) {
        cy.get('.new-todo')
            .clear()
            .type(todo + '{enter}')
    }

    getToDoList() {
        return cy.get('.todo-list li');
    }

    markToDoItemAsCompleted() {
        return this.getToDoList()
            .first()
            .find('.toggle')
            .click()
            .get('.todo-list li')
            .should('have.class', 'completed')
    }

    deleteToDoItem() {
        return this.getToDoList()
            .trigger('mouseover')
            .get('.destroy')
            .click({force: true})
    }

    changeNameOfToDoItem(newName: string) {
        return this.getToDoList()
            .dblclick()
            .get('[data-testid="text-input"]').last()
            .clear()
            .type(newName + '{enter}')
    }
}