describe("Teste da Agenda de Contatos", () => {
  beforeEach(() => {
    cy.reload(true)
    cy.visit("https://agenda-contatos-react.vercel.app/")
  })
  it("Deve rederizar os contatos", () => {

    cy.get(".contato").should('have.length', 3)
    cy.get("input").should('have.length', 3)
    cy.get(".adicionar").should('have.length',1)
  })

  it("Deve preencher os inputs e adicionar", () => {
    
    cy.get("input[type=text]").type('Leonardo')
    cy.get("input[type=email]").type('leonardo@email.com')
    cy.get("input[type=tel]").type('27 996969053')
    
    cy.get("input[type=text]").should('have.value', 'Leonardo')
    cy.get("input[type=email]").should('have.value', 'leonardo@email.com')
    cy.get("input[type=tel]").should('have.value', '27 996969053')
    
    cy.get(".adicionar").click()
    cy.get(".contato").should('have.length', 4)
  })

  it("Deve editar um contato", () => {
    
    cy.get(".edit").first().click()
    cy.get("input[type=text]").clear().type('Leonardo Zappi')
    cy.get(".alterar").click()
    cy.get(".contato").first().get('li').first().should('have.text', 'Leonardo Zappi')
  })

  it("Deve deletar um contato", () => {
    
    cy.get(".delete").first().click()
    cy.get(".contato").should('have.length', 3)
  })
})