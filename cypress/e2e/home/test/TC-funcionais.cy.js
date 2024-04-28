const el = require('../page/elements').ELEMENTS
describe('Teste de Navegação e Funcionalidade do Site', () => {
  beforeEach(() => {
    cy.visit('');
  })
  it('TC - 01 - Deveria realizar uma pesquisa bem-sucedida', () => {
    const termoPesquisa = 'segurança da informação'; // Termo de pesquisa válido
    // Insere o termo de pesquisa no campo de pesquisa e clica no botão de pesquisa
    cy.get(el.divHeaderSearch, { force: true }).click() // Torna o campo de busca visível ajustando temporariamente as propriedades CSS do elemento pai    
    cy.get(el.labelSearchField).type(termoPesquisa + '{enter}');

        // Verifica se os resultados são exibidos corretamente para o termo de pesquisa
      cy.get(el.sectionNoResuls).should('not.exist');
      cy.get(el.h1PageTittle)
        .should('be.visible')
        .should('contain', termoPesquisa);
  });
  it('TC - 02 - Deveria mostrar mensagem de nenhum resultado para pesquisa inexistente', () => {
    const termoPesquisa = 'termoqueNaoExiste'; // Termo de pesquisa inexistente

    // Insere o termo de pesquisa inexistente no campo de pesquisa e clica no botão de pesquisa
    cy.get(el.divHeaderSearch, { force: true }).click()
    cy.get(el.labelSearchField).type(termoPesquisa + '{enter}');

    // Verifica se a mensagem de nenhum resultado é exibida corretamente
    cy.get(el.sectionNoResuls).should('be.visible');
    cy.get(el.sectionNoResuls).should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');
  });
  it('TC - 03 Deveria exibir mensagem de pesquisa obrigatória para pesquisa vazia', () => {
    // Clica no botão de pesquisa sem inserir um termo de pesquisa
    cy.get(el.divHeaderSearch, { force: true }).click()
    cy.get(el.labelSearchField).type('{enter}');

    // Verifica se a mensagem de pesquisa obrigatória é exibida corretamente
    cy.get(el.sectionNoResuls).should('contain', 'Por favor, insira um termo de pesquisa');
     //Cenario falhando propositalmente O comportamento atual eh que ao pesquisar sem informar nenhuma palavra para pesquisa, ele realiza a pesquisa e retorna as ultimas noticias do Blog
    // Aqui estou simulando um cenario com sugestao de impedir essa busca vazia.
  });
});

