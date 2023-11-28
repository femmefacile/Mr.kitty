it('Переходим на сайт', () => {
  cy.visit('https://nordclan.com/', { timeout: 30000, log: false });
  cy.get('button:contains("Оставить заявку")')
});

it('Проверяем поле ввода', () => {
  cy.visit('https://nordclan.com/')
  cy.get('input[type="text"][name="clientName"]')
})

// it.only('Using get with find', () => {
//   cy.viewport(1200, 800)
//   cy.visit('https://minifreemarket.com/catalog/games-with-miniatures')
//   // cy.get('div.inner').find('div a.btn').eq(0)
//   cy.get('div.inner').find('a.btn').eq(5)
// })

it.only('Пример с использованием content', () => {
  cy.visit('https://demoqa.com/automation-practice-form')
})