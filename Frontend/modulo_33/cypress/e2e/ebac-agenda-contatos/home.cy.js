describe("Teste da Agenda de Contatos", () => {
  it("Deve rederizar os contatos", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/")

    cy.get(".contato").should('have.length', 3)
    cy.get("input").should('have.length', 3)
    cy.get(".adicionar").should('have.length',1)
  })

  it("Deve preencher os inputs e adicionar", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/")
    
    cy.get("input[type=text]").type('Leonardo')
    cy.get("input[type=email]").type('leonardo@email.com')
    cy.get("input[type=tel]").type('27 996969053')
    
    cy.get("input[type=text]").should('have.value', 'Leonardo')
    cy.get("input[type=email]").should('have.value', 'leonardo@email.com')
    cy.get("input[type=tel]").should('have.value', '27 996969053')
    
    cy.get(".adicionar").click()
    cy.get(".contato").should('have.length', 4)
  })
})