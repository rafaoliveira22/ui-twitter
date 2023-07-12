import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

/**
 * COMO O REACT RENDERIZA O CÓDIGO
 * o método createRoot é executado apenas uma vez na aplicação, e o seu parametro
 * é qual elemento vai receber a aplicação react (ou seja, o código gerado pelo react => html, css e js)
 * render => renderizar => mostrar em tela


 * PROGRAMAÇÃO IMPERATIVA
 * const editUser = true;
 * if(editUser === true) document.getElementById('button')!.innerText = 'Editar usuário';


 * PROGRAMAÇÃO DECLARATIVA
 * const editUser = true;
 * <button>{editUser : 'Editar usuário' : 'Criar usuário'}</button>


 * COMPONENTES
 * Pequenas partes de interface reutilizáveis. se algo na interface se repete em vários locais da aplicação
 * com nenhuma ou poucas mudanças, provavelmente isso será um componente.
 * Os componentes se comportam como tags no HTML, se comportando de maneira diferente de acordo com os atributos
 * O nome deve começar com caixa alta, por é a única maneira de diferenciar de uma tag html
 * div => html
 * Div => component
 * O export na declaração do componente o torna vísivel para outros arquivos importa-lo.


 * PROPRIEDADES
 * Um atributo enviado ao componente é chamado de propriedade, é o que muda visualmente ou comportalmente o componente.
 * ex: <Tweet user=""/>


 * CHILDREN (principal prop nativa do react)
 * Tudo que é passado como filho do componente
 * <Tweet>
 *  Testeeee => children
 * </Tweet>
 * props.children => Testeeee


 * TYPESCRIPT NO REACT
 * ferramenta de tipagem estática para o javascript
 * tipagem estática: mecanismo para EVTIAR erros ENQUANTO a aplicação está sendo desenvolvida 
 * por exemplo, uma informação que era obrigatória e não foi enviada
 * ou uma informação que era pra ser string e foi enviada como int ou outro tipo


 * CSS
 * Os arquivos css funcionam da mesma forma em um projeto com html
 * Algumas coisas mudam dentro do arquivo react
 * class => className
 * Para utilizar estilos inline, uma variável é criada e os estilos são escritos em formato de objeto javascript
 * tweetStyles={borderRadius: 8} => <..style={tweetStyles}>
 * não é obrigatório criar uma variável, mas para manter o código organizado, é o mais recomendado, para não confundir as chaves.
 * style={{borderRadius: 8}}


 * EXEMPLO DO VÍDEO ANTES DE COMEÇAR A APLICAÇÃO
 * <div>
      <Tweet user="Rafael" likes={10}>meu 1°tweet</Tweet>
      <Tweet user="Maria">SPFC 1 x 0 PAL</Tweet>
    </div>

  * FOREACH VS MAP
  * forEach => não tem retorno, ele executa e não é possível retornar nada
  * map => tem retorno, ou seja, é possível utilizar o return para renderizar o 
  * componente em tela. Sempre que se realiza um map, o primeiro elemento deve 
  * receber a propriedade key={} e essa prop recebe uma informação única que
  *  identifique aquela informação, no caso da renderização do componente 
  * <Tweet />, a key é o próprio tweet key={tweet}, pois cada tweet é único.


  * ROTEAMENTO NO REACT ()
  * Link entre as páginas, poder navegar entre elas
  * A biblioteca mais utilizada para trabalhar com rotas é a React Router
  * npm install react-router-dom localforage match-sorter sort-by


  *  * <a> vs <Link>
  * O <a> faz com que ocorra um redirecionamento e a
  * aplicação toda seja carregada novamente
  * O <Link> identifica quais mudanças precisam acontencer
  * entre as rotas e mudar apenas o conteúdo necessário
  * É possível identificar essas mudanças na aba Network do console do chrome
  * Além disso, o componente NavLink adiciona uma classe
  * chamada active automaticamente ao componente
  * 
  
  * CONTEXTO
  * Todas ás paginas dentro do RouterProvider
  * podem utilizar os recursos do react router dom
  * A <Sidebar /> está fora do contexto do <RouterProvider>, ou seja, a sidebar ainda não connhece o routerprovider, está fora do contexto. 
  * Então não é possível reaproveitaer a Sidebar entre duas páginas.
  * Para resolver esse problema, utiliza-se de um conceito do react router dom, chamado de layout.
  * NESTED ROUTES (rotas em cascata, encadeadas), aplicando
  * esse conceito, todas as páginas e componentes estarão
  * dentro do contexto de rotas.
  * <Outlet /> => renderizar o conteúdo das rotas aninhadas


  * ESTADOS NO REACT
  * e.preventDefault(); => previne o comportamento padrão do
  * componente que está sendo utilizado, nesse caso, o form
  * Controlled Components => anotar o valor que o usuário está 
  * digitando antes do submit, enquanto ele digita.
  * Imutabilidade => as informações não são alteradas no react, são criadas novas versões a partir das informações
  * No caso dos tweets, as informações de tweets são copiadas
  * para um novo array junto ao novo tweet criado, utilizando
  * o Spread Operator => ...
  * setTweets([...tweets, newTweet])


  * FLUXO DE RENDERIZAÇÃO
  * 1. Toda vez que se altera o estado de um componente, TODO o componente é recalculado.
  * Tudo antes do return será criado do zero, mas o que está dentro do return não.
  * 2. Toda vez que o componente pai renderizar
  * 3. Toda vez que alguma das suas propriedades mudar
  * 
  * Algoritmo de reconciliação => identifica o que react precisa criar do zero dentro do html, dentro do return
  * 1. cria a nova versão do html do componente em memória
  * 2. compara a nova versão com a anterior (Diff)
  * 3. aplicar as alterações js para alterar apenas o necessário no HTML

 * */

