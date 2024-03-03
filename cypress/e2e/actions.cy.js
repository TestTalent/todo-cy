import { MainPage } from "../support/pages/mainPage";
import { faker } from '@faker-js/faker';

describe('Actions', () => {
  const mainPage = new MainPage();
  const toDoItemName = faker.lorem.word();
  

  beforeEach(() => {
    mainPage.visit();
    mainPage.addNewToDoItem(toDoItemName);
  });

  it('should add a new todo item to the list', () => {
    mainPage.getToDoListItems().should('have.text', toDoItemName);
  });

  it('should mark a todo item as completed', () => {
    mainPage.markToDoItemAsCompleted();
    mainPage.getToDoListItems().get('[data-testid="todo-item-label"]').should('have.css', 'text-decoration', 'line-through solid rgb(148, 148, 148)');
  });

  it('should delete a todo item', () => {
    mainPage.deleteToDoItem();
    mainPage.getToDoListItems().should('not.exist');
  });

  it('should change the name of a todo item', () => {
    let newToDoItemName = faker.lorem.word();
    mainPage.changeNameOfToDoItem(newToDoItemName)
    mainPage.getToDoListItems().should('have.text', newToDoItemName);
  });

})