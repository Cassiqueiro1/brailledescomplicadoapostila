// Conteúdo integral e fiel do PDF "Braille Descomplicado: Semeando Leitores e
// Escritores Competentes" — Luciane Molina (Braillu), Edição interativa 2026.
// Marcações de imagem do PDF são preservadas como placeholders.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "image"; key: string; alt: string }
  | { type: "video"; url: string; label: string }
  | { type: "callout"; text: string }
  | { type: "interactive-cell" }
  | {
      type: "static-cells";
      ariaLabel?: string;
      pairs?: boolean;
      groups: { label?: string; cells: { dots: number[]; caption?: string }[] }[];
    }
  | { type: "link"; url: string; label: string; external?: boolean };

export interface Chapter {
  id: string;
  slug: string;
  number?: number;
  title: string;
  shortTitle: string;
  blocks: Block[];
}

export const CHAPTERS: Chapter[] = [
  {
    id: "abertura",
    slug: "abertura",
    title: "Abertura",
    shortTitle: "Abertura",
    blocks: [
      {
        type: "p",
        text: "Este e-book nasce da prática. Ele foi escrito para professoras, professores, profissionais do atendimento educacional especializado, familiares e para a própria pessoa cega adulta que deseja aprender Braille com segurança e sentido.",
      },
      {
        type: "p",
        text: "Ao longo dos anos, muitos processos de ensino do Braille foram conduzidos de forma mecânica, centrados na repetição de pontos e na memorização de letras isoladas. Esse caminho costuma gerar cansaço, frustração e a sensação equivocada de que aprender Braille é difícil demais, especialmente para quem perdeu a visão na vida adulta.",
      },
      {
        type: "p",
        text: "A proposta aqui é outra. Este material organiza um percurso metodológico que respeita o modo como o aprendiz aprende, considera o corpo como parte do processo de leitura tátil e apresenta o sistema Braille a partir de sua lógica interna, de forma progressiva, sensorial e significativa.",
      },
      {
        type: "p",
        text: "Este e-book foi escrito por uma professora braillista com quase 3 décadas de atuação, sendo ela também uma pessoa cega, usuária do Sistema Braille, para ajudar a transformar a forma como o ensino do Braille é conduzido. Aqui, o ponto de partida É a preparação sensorial, a percepção tátil, a orientação espacial e a compreensão da estrutura do sistema. As letras aparecem numa etapa posterior, no momento certo, no tamanho certo e na sequência certa.",
      },
      {
        type: "p",
        text: "O que você encontrará nas próximas páginas é um caminho organizado, passo a passo, que pode ser aplicado na prática. Um percurso que favorece a leitura antes da escrita, que valoriza a escala ampliada antes do papel e que prepara o aprendiz para que o Braille deixe de ser um conjunto de pontos e passe a ser, de fato, leitura e escrita com significado.",
      },
    ],
  },
  {
    id: "cap1",
    slug: "capitulo-1",
    number: 1,
    title: "Capítulo 1: A Identidade Leitora e a Reorganização da Linguagem",
    shortTitle: "Capítulo 1 — Identidade Leitora",
    blocks: [
      {
        type: "p",
        text: "Nascer com deficiência visual ou perder a visão na vida adulta altera profundamente a relação que a pessoa estabelece com a leitura e a escrita. Quem já era leitor em tinta, quem organizava a vida por meio de agendas, bilhetes, livros, telas e anotações, de repente se vê afastado desse universo que sempre foi natural. Nesse momento, o sistema criado por Louis Braille deixa de ser percebido como um conjunto de pontos em relevo e passa a representar uma possibilidade real de reconstrução da identidade leitora, da autonomia, da tomada de decisão.",
      },
      { type: "image", key: "MONTAGEM_LEITURA", alt: "Mulher lendo revista de cabeça para baixo." },
      {
        type: "p",
        text: "O Braille atravessa mais de duzentos anos de história porque nasceu da experiência concreta de uma pessoa cega que compreendia, pelo próprio corpo, as necessidades de acesso à linguagem escrita. Ele permanece atual porque responde, com precisão, às demandas de autonomia, estudo, registro, comunicação e participação social das pessoas com deficiência visual. Trata-se de uma tecnologia assistiva completa, sólida e profundamente conectada à experiência humana da leitura.",
      },
      {
        type: "p",
        text: "O sistema Braille foi criado por Louis Braille, nascido em 1809 na França. Ainda criança, após um acidente que lhe causou a cegueira, ele ingressou no instituto fundado por Valentin Haüy em Paris, primeira escola dedicada à educação de pessoas cegas. Ali, Braille conheceu o método de escrita em relevo desenvolvido por Charles Barbier, chamado escrita noturna, criado para comunicação militar no escuro. A ideia de pontos em relevo acessíveis ao tato inspirou o jovem estudante a aperfeiçoar o sistema, reduzindo-o a uma cela de seis pontos organizada de forma lógica e eficiente para representar letras, números e sinais. O resultado foi um sistema simples, completo e perfeitamente adaptado à leitura pelos dedos. Usou para isso o mesmo instrumento pontiagudo que lhe tirara a visão, transformando em instrumento de libertação intelectual.",
      },
      {
        type: "p",
        text: "Louis Braille publicou a primeira versão do seu método ainda muito jovem, aos 15 anos de idade. Ele faleceu em 1852, aos 43 anos, sem testemunhar a ampla adoção do sistema que hoje leva seu nome. Com o tempo, o Braille se consolidou mundialmente como meio de leitura e escrita das pessoas cegas. No Brasil, essa história ganha um marco importante com José Álvares de Azevedo, considerado o patrono da educação dos cegos, responsável por trazer o sistema ao país no século XIX e inspirar a criação do Instituto Benjamin Constant, referência nacional na educação de pessoas com deficiência visual, sendo o Brasil o primeiro país da américa Latina a adotá-lo em 1854.",
      },
      {
        type: "p",
        text: "Em reconhecimento a essa trajetória, celebram-se o Dia Mundial do Braille em 4 de janeiro, data de nascimento de Louis Braille, e o Dia Nacional do Braille em 8 de abril, dia do nascimento de José Álvares de Azevedo, reafirmando o valor histórico, educacional e identitário desse sistema.",
      },
      { type: "image", key: "BUSTO_LOUIS_BRAILLE", alt: "Busto de Louis Braille." },
      { type: "image", key: "FACHADA_IBC", alt: "Fachada do prédio do Instituto Benjamin Constant (IBC)." },
      {
        type: "p",
        text: "Hoje, a presença do Braille atravessa o cotidiano de formas muitas vezes silenciosas, mas profundamente significativas. Ele está em livros de literatura e materiais didáticos, rotuladora, fitas métrica, na Urna Eletrônica brasileira, em embalagens de cosméticos, caixas de medicamentos e rótulos de produtos, em placas de sinalização de ambientes e mapas táteis, nos botões de elevador, cartão de crédito e em controles remotos com marcações nas teclas de ligar e desligar, volume, canais e até no controle de temperatura do ar condicionado. Também aparece na moda, em camisetas, joias e tatuagens, ampliando sua dimensão simbólica e cultural. No brinquedo, aparece no lego Braille Bricks, uma parceria com a Fundação Dorina Nowill. Essa presença espalhada mostra que o Braille permanece vivo, atual e integrado aos espaços sociais, reafirmando seu papel como tecnologia assistiva e comunicação..",
      },
      { type: "image", key: "BRAILLE_COTIDIANO", alt: "Uso do braille em diversas situações do cotidiano como, placa de sinalização, urna eletrônica, mãos lendo em livro braille, caixa de medicamento, elevador." },
    ],
  },
  {
    id: "cap2",
    slug: "capitulo-2",
    number: 2,
    title: "Capítulo 2: A Alfabetização na perspectiva da Preparação Sensorial e o Pré-Braille",
    shortTitle: "Capítulo 2 — Pré-Braille",
    blocks: [
      {
        type: "p",
        text: "Para entender a importância do Sistema Braille nesse processo de alfabetização, é preciso olhar primeiro para o percurso de qualquer criança em relação à escrita. Antes mesmo de aprender letras, a criança passa por um processo chamado letramento. É quando ela percebe que a escrita existe no mundo, que livros contam histórias, que rótulos informam, que placas orientam, que a escrita organiza a vida das pessoas. Ela compreende a função social da leitura antes de decodificar qualquer símbolo.",
      },
      {
        type: "p",
        text: "Somente depois desse contato significativo com a cultura escrita é que começa a alfabetização, ou seja, o aprendizado do sistema que representa graficamente os sons da fala.",
      },
      {
        type: "p",
        text: "A criança com cegueira vive esse percurso integralmente em Braille. O tato é o canal de acesso tanto ao letramento quanto à alfabetização. Ela cresce construindo repertórios e relações sobre o que toca e aprende a função de cada objeto, entendendo posteriormente para que serve a escrita e, em seguida, aprende a ler e escrever por meio dos símbolos táteis.",
      },
      {
        type: "p",
        text: "Já o adulto que perde a visão após a escolarização se encontra em um ponto muito diferente desse percurso. Ele já viveu plenamente o letramento e a alfabetização. Ele já sabe o que é ler, para que serve a escrita, como os textos se organizam, como as palavras se estruturam. Seu desafio não está na compreensão do sistema alfabético, mas na mudança do canal sensorial de acesso à leitura. Assim, ele está aprendendo uma nova forma de acessar a leitura.",
      },
      { type: "p", text: "Essa diferença transforma completamente a maneira como o ensino do Braille precisa acontecer." },
      {
        type: "p",
        text: "Enquanto a criança constrói simultaneamente a noção de linguagem escrita, a coordenação motora fina, a percepção sensorial e a relação entre símbolo e som, o adulto já possui toda a estrutura cognitiva da leitura consolidada. O que ele precisa desenvolver é outra coisa: a sensibilidade tátil refinada, a coordenação das mãos na leitura, a orientação espacial na linha Braille, a percepção de padrões em relevo, o ritmo e a resistência da leitura com os dedos.",
      },
      {
        type: "p",
        text: "Perder a visão, assim como vendar as pessoas, não torna ninguém automaticamente sensível ao tato. A leitura tátil é uma habilidade construída.",
      },
      {
        type: "p",
        text: "Por isso, antes mesmo de iniciar a alfabetização em Braille, existe uma etapa fundamental reconhecida em programas de ensino, chamada de preparação tátil ou pré-Braille. Essa fase prepara o corpo para ler.",
      },
      {
        type: "p",
        text: "Essa etapa trabalha sensibilidade tátil, coordenação bimanual, exploração orientada do espaço, percepção de formas, texturas e padrões, e construção de repertório mental sobre o que se toca.",
      },
      {
        type: "p",
        text: "Sem essa preparação, é comum que o aprendiz, seja criança ou adulto, sinta cansaço, frustração e a sensação de que não consegue aprender, quando na verdade ainda não teve a oportunidade de desenvolver as habilidades sensoriais necessárias para essa nova forma de leitura. A carga cognitiva se torna muito alta, o que explica também o fato de que para quem enxerga, o aprendizado do Sistema Braille se dá pela visualidade e não pelo tato.",
      },
      {
        type: "p",
        text: "A diferença entre a leitura visual e a leitura tátil ajuda a entender esse processo. A leitura visual acontece de forma global e simultânea. O olhar alcança várias letras ao mesmo tempo, antecipa palavras, reconhece formatos gerais. A leitura em Braille acontece de forma sequencial e progressiva. Os dedos percorrem a linha célula por célula, ponto por ponto. A informação chega em fluxo contínuo, organizada pelo movimento das mãos, parte por parte para formar o todo. Por isso, ler Braille envolve cognição e corpo ao mesmo tempo. Exige postura, ritmo, coordenação das duas mãos, memória tátil imediata e controle da pressão dos dedos. Também precisa de contato constante e contínuo. O afastamento da prática de leitura e escrita exige retomadas de tempo em tempo.",
      },
      {
        type: "p",
        text: "Mesmo com essa diferença sensorial, a lógica da alfabetização permanece a mesma. Símbolos representam sons. Sons formam sílabas. Sílabas formam palavras. Palavras formam frases e textos. O adulto reconhece rapidamente essa estrutura porque já a conhece da alfabetização em tinta. O que muda é apenas a via de entrada da informação.",
      },
      {
        type: "p",
        text: "Toda pessoa com deficiência visual tem direito ao aprendizado do Braille. Idade, tempo de perda da visão ou expectativas reduzidas de desempenho não podem servir como justificativa para negar essa possibilidade. Ao mesmo tempo, que para crianças não alfabetizadas, o sistema Braille é a única forma de alfabetização válida, o adulto tem o direito de decidir se deseja aprender. A escolha precisa ser respeitada, mas a oferta qualificada, a informação clara e as condições adequadas de aprendizagem precisam existir.",
      },
      {
        type: "p",
        text: "O ensino para crianças deve se basear no lúdico, entretanto para adultos, não pode ser infantilizado. O que ele precisa não são atividades pensadas para crianças pequenas, mas explicações claras sobre o processo que está vivendo, atividades significativas, textos que dialoguem com sua realidade e uma preparação sensorial cuidadosa antes da alfabetização propriamente dita.",
      },
      {
        type: "p",
        text: "Nesta etapa pré-Braille, atividades táteis e de manuseio como origami, tear de pregos, miçangas e bordados, colagem, pintura com os dedos, modelagem, jogos de tabuleiro, dominó e blocos de montar favorecem o desenvolvimento da sensibilidade tátil e da coordenação bimanual, ao mesmo tempo em que promovem uma exploração orientada do espaço, a percepção de formas, texturas e padrões e a construção de um repertório mental organizado a partir daquilo que é explorado pelas mãos.",
      },
      {
        type: "p",
        text: "Já no ensino do Braille para crianças em alfabetização, o lúdico integra jogos, histórias, desafios táteis e materiais concretos que dialogam com o cotidiano da criança, aproximam a aprendizagem de significado e sentido, mobilizam curiosidade e participação, e desenvolvem coordenação motora fina, orientação espacial, uso das duas mãos e consciência dos pontos na construção da leitura e da escrita.",
      },
      { type: "image", key: "LEGO_BRAILLE", alt: "3 crianças vistas de cima utilizam Lego Braille Bricks." },
    ],
  },
  {
    id: "cap3",
    slug: "capitulo-3",
    number: 3,
    title: "Capítulo 3: A Estrutura do Sistema - A Cela Braille e o Alfabraille",
    shortTitle: "Capítulo 3 — Cela Braille",
    blocks: [
      { type: "h3", text: "Por onde iniciar o aprendizado do Braille?" },
      {
        type: "p",
        text: "Quando uma pessoa cega chega para aprender Braille, o modo como esse início é conduzido faz toda a diferença no percurso que virá depois.",
      },
      { type: "p", text: "Durante muito tempo, os processos tradicionais de ensino seguiram uma lógica mecânica e repetitiva:" },
      {
        type: "p",
        text: "Apresentava-se o material, explicavam-se os pontos de cada letra e, em seguida, pedia-se que o aluno utilizasse reglete e punção para preencher folhas inteiras com a mesma cela Braille ou com letras isoladas, na tentativa de memorização.",
      },
      {
        type: "p",
        text: "Essa prática, bastante difundida no passado, desconsidera aspectos fundamentais do aprendizado tátil e do modo como a aprendizagem acontece. Letras apresentadas fora da ordem alfabética, sequências desordenadas sem relação com a estrutura do sistema, exigência de esforço motor ainda não desenvolvido e foco na repetição antes da percepção são fatores que dificultam a aprendizagem e geram frustração logo no início.",
      },
      { type: "p", text: "O ponto de partida precisa ser outro." },
      {
        type: "p",
        text: "Antes de qualquer contato com letras, o processo deve se concentrar no pré-Braille, ou seja, na estimulação tátil, sensorial e perceptiva, no uso consciente das mãos, no movimento bimanual e na construção de repertório mental para reconhecer padrões em relevo que se assemelham a uma cela Braille e até a materiais de manuseio como tear de pregos para tecer com lã, origami, peças de miçanga e bordados, colagem, pintura em espaço delimitado ou com dedos, modelagem de argila ou biscuit são alguns exemplos, além de jogos de tabuleiro, de cartas, dominó e blocos de montar.",
      },
      { type: "image", key: "JOGOS_PRE_BRAILLE", alt: "Ilustrações de jogos e materiais para a etapa pré-Braille." },
      { type: "h3", text: "Conceituação Básica sobre o Sistema Braille" },
      {
        type: "p",
        text: "Para iniciar, alguns conceitos precisam ser apresentados de forma clara e trabalhados ao longo do processo de ensino, pois estruturam a compreensão do sistema Braille e sustentam todas as etapas da aprendizagem.",
      },
      {
        type: "p",
        text: "O Sistema Braille é um processo de leitura e escrita em relevo, formado por combinações de seis pontos organizados em uma estrutura fixa. A partir dessas combinações, é possível representar letras do alfabeto, números, sinais de pontuação e diferentes códigos, como os utilizados na matemática, na música, na química e na informática. Ao todo, são 63 combinações possíveis de pontos, além da cela vazia, resultando em 64 símbolos. O sistema também pode ser chamado de código Braille.",
      },
      {
        type: "p",
        text: "Em alguns contextos, porém, o sistema Braille foi expandido para oito pontos para dar conta de outras necessidades de representação, especialmente em sistemas ideográficos, como ocorre com os caracteres do sistema utilizado em países asiáticos, e foi adaptado recentemente para a escrita do guarani no Paraguai. Esses exemplos ajudam a compreender que o Braille não é uma língua, mas um sistema de escrita capaz de representar diferentes línguas e diferentes formas de organização simbólica.",
      },
      {
        type: "p",
        text: "A cela Braille é o espaço onde cada símbolo é formado. Trata-se de uma estrutura retangular composta por seis posições possíveis de pontos. É a partir dessa unidade básica que todos os símbolos do sistema são construídos.",
      },
      {
        type: "p",
        text: "O símbolo fundamental, também conhecido como símbolo gerador, é formado pela cela completamente preenchida, ou seja, com os seis pontos marcados. Ele representa o potencial máximo de combinação dentro da cela.",
      },
      {
        type: "p",
        text: "A cela vazia, por sua vez, é aquela em que nenhum ponto está presente. Ela também tem função no sistema, sendo utilizada como espaço.",
      },
      { type: "image", key: "CELA_CHEIA_VAZIA", alt: "Uma cela Braille preenchida e uma cela vazia, lado a lado." },
      {
        type: "p",
        text: "A organização dos pontos dentro da cela segue uma lógica fixa de numeração, que orienta tanto a leitura quanto a escrita. Essa numeração é feita de cima para baixo e da esquerda para a direita.",
      },
      { type: "h3", text: "1. Para leitura" },
      { type: "p", text: "Na coluna da esquerda:" },
      {
        type: "ul",
        items: [
          "o ponto 1 está na posição superior",
          "o ponto 2 ocupa a posição central",
          "o ponto 3 fica na posição inferior",
        ],
      },
      { type: "p", text: "Na coluna da direita:" },
      {
        type: "ul",
        items: [
          "o ponto 4 está na posição superior",
          "o ponto 5 ocupa a posição central",
          "o ponto 6 fica na posição inferior",
        ],
      },
      { type: "image", key: "CELA_LEITURA", alt: "Cela Braille enumerada na posição de leitura." },
      { type: "h3", text: "2. Para escrita" },
      { type: "p", text: "Na coluna da direita:" },
      {
        type: "ul",
        items: [
          "o ponto 1 está na posição superior",
          "o ponto 2 ocupa a posição central",
          "o ponto 3 fica na posição inferior",
        ],
      },
      { type: "p", text: "Na coluna da esquerda:" },
      {
        type: "ul",
        items: [
          "o ponto 4 está na posição superior",
          "o ponto 5 ocupa a posição central",
          "o ponto 6 fica na posição inferior",
        ],
      },
      { type: "image", key: "CELA_ESCRITA", alt: "Cela Braille enumerada na posição de escrita (invertida)." },
      { type: "p", text: "Essa organização permite localizar cada ponto com precisão e compreender a estrutura dos símbolos." },
      { type: "image", key: "CELA_CORTE_SUPERIOR", alt: "Representação da cela Braille com corte na parte superior e pontos enumerados." },
      {
        type: "p",
        text: "A cela também pode ser compreendida em partes. A chamada série superior envolve os pontos 1, 2, 4 e 5. Já a série inferior envolve os pontos 2, 3, 5 e 6.",
      },
      { type: "image", key: "SERIES_SUPERIOR_INFERIOR", alt: "Cela com pontos da série superior preenchidos e outra com pontos da série inferior, com corte e enumeração." },
      {
        type: "p",
        text: "Além disso, é possível identificar claramente a coluna da esquerda, formada pelos pontos 1, 2 e 3, e a coluna da direita, formada pelos pontos 4, 5 e 6.",
      },
      { type: "image", key: "COLUNAS", alt: "Duas celas, uma com a coluna da esquerda preenchida e outra com a coluna da direita preenchida." },
      {
        type: "p",
        text: "Os símbolos produzidos no sistema podem ser classificados como simples, quando ocupam apenas uma cela, ou compostos, quando utilizam duas ou mais celas para sua representação.",
      },
      { type: "image", key: "SIMPLES_COMPOSTO", alt: "Cela com a letra A (símbolo simples) e sinal de número seguido da letra A (símbolo composto)." },
      {
        type: "p",
        text: "Para apoiar a compreensão desses conceitos, o uso de materiais em escala ampliada da cela Braille é fundamental. Recursos como alfabraille, bases com pinos e encaixes, que podem ser construídos com madeira, EVA, papelão, tampinhas de garrafa ou caixas de ovos, permitem que a pessoa explore a organização dos seis pontos com as mãos, construindo uma percepção concreta da estrutura do sistema.",
      },
      { type: "image", key: "MODELOS_ALFABRAILLE", alt: "Vários modelos de alfabraille: caixa de ovos, EVA, madeira e papelão" },
      {
        type: "p",
        text: "Nessa fase, as atividades envolvem encaixar, desencaixar, retirar e acrescentar pontos, comparar combinações e perceber padrões. O foco está na exploração orientada da cela, na compreensão de como os pontos se organizam no espaço e na construção de associações com o repertório do aprendiz.",
      },
      {
        type: "p",
        text: "Esse trabalho inicial cria as bases para que, mais adiante, os símbolos deixem de ser percebidos como pontos isolados e passem a ser reconhecidos como unidades com significado.",
      },
      { type: "h3", text: "O uso do alfabraille na compreensão da cela Braille" },
      {
        type: "p",
        text: "O alfabraille é um recurso em escala ampliada que representa, de forma concreta, a estrutura da cela Braille. Trata-se de um retângulo posicionado na vertical, com pequenos cortes na parte superior que servem como referência de posição. Alguns modelos possuem dois cortes, outros apenas um. Essa marcação ajuda o aprendiz a identificar corretamente a orientação da cela durante a exploração tátil.",
      },
      {
        type: "p",
        text: "Nesse retângulo estão distribuídos seis espaços vazados em baixo relevo, organizados exatamente como os pontos de uma cela Braille: duas colunas verticais com três posições cada, totalizando seis aberturas.",
      },
      {
        type: "p",
        text: "Para preencher esses espaços, utilizam-se peças circulares soltas, que podem ser chamadas de bolinhas ou discos, confeccionadas em materiais diversos. Cada uma dessas peças é encaixada em um dos espaços do retângulo, permitindo formar combinações diferentes de pontos.",
      },
      {
        type: "p",
        text: "Quando todos os seis espaços estão preenchidos, tem-se a representação da cela Braille completa, também conhecida como símbolo gerador. Quando nenhuma peça está encaixada, tem-se a cela vazia, ou janela vazia.",
      },
      {
        type: "p",
        text: "Esse material pode ser confeccionado em EVA, em caixas de ovos adaptadas, com bolinhas de papel amassado ou outros recursos acessíveis, desde que mantenha a organização espacial correta dos pontos.",
      },
      { type: "image", key: "ALFABRAILLE_CAIXA_OVOS", alt: "Alfabraille feito com caixa de ovos." },
      { type: "h3", text: "Primeira etapa: exercícios iniciais com o alfabraille" },
      {
        type: "ol",
        items: [
          "Posicione o alfabraille sobre a mesa, alinhando a base do retângulo à borda. Os cortes de referência devem ficar voltados para cima. Inicie com a cela vazia, sem nenhuma peça encaixada.",
          "Encaixe a primeira bolinha na posição do ponto 1, localizado na parte superior esquerda.",
          "Em seguida, encaixe as bolinhas correspondentes aos pontos 2, 3, 4, 5 e 6, sempre respeitando a ordem de numeração dos pontos até completar a cela.",
          "A cada encaixe, incentive a exploração tátil. Observe com as mãos quais pontos já estão preenchidos, quais ainda faltam, como eles se organizam no espaço quando isolados e quando combinados.",
          "Com a cela completa, retire apenas a bolinha do ponto 1 e explore a nova configuração.",
          "Refaça a cela completa e retire apenas o ponto 2. Explore novamente.",
          "Repita o procedimento retirando apenas o ponto 3.",
          "Depois, retire apenas o ponto 4.",
          "Em seguida, retire apenas o ponto 5.",
          "Por fim, retire apenas o ponto 6.",
        ],
      },
      {
        type: "static-cells",
        ariaLabel: "Seis celas Braille, cada uma com todos os pontos exceto um",
        groups: [
          { cells: [{ dots: [2, 3, 4, 5, 6], caption: "Sem ponto 1" }] },
          { cells: [{ dots: [1, 3, 4, 5, 6], caption: "Sem ponto 2" }] },
          { cells: [{ dots: [1, 2, 4, 5, 6], caption: "Sem ponto 3" }] },
          { cells: [{ dots: [1, 2, 3, 5, 6], caption: "Sem ponto 4" }] },
          { cells: [{ dots: [1, 2, 3, 4, 6], caption: "Sem ponto 5" }] },
          { cells: [{ dots: [1, 2, 3, 4, 5], caption: "Sem ponto 6" }] },
        ],
      },
      { type: "image", key: "MAOS_TATEANDO", alt: "Mãos tateando um alfabraille." },
      {
        type: "p",
        text: "Esses exercícios constroem uma noção precisa de posicionamento e localização dos pontos na cela. Essa compreensão inicial é essencial para evitar, mais adiante, a formação de letras em espelho ou a inversão da posição dos pontos durante a leitura e a escrita.",
      },
      { type: "callout", text: "Experimente agora a Cela Braille interativa: toque nos seis pontos para ativar e desativar e descubra qual sinal você está formando." },
      { type: "interactive-cell" },
    ],
  },
  {
    id: "cap4",
    slug: "capitulo-4",
    number: 4,
    title: "Capítulo 4: O Processo de Alfabetização - Séries e Matrizes",
    shortTitle: "Capítulo 4 — Séries e Matrizes",
    blocks: [
      { type: "h3", text: "Esquemas associativos e referências mentais" },
      {
        type: "p",
        text: "Nesta etapa, o objetivo deixa de ser apenas localizar pontos e passa a ser atribuir sentido aos formatos que eles formam. A proposta é criar comparações, imagens mentais e referências concretas que ajudem a memorizar como os pontos aparecem agrupados dentro da cela.",
      },
      { type: "p", text: "Partimos sempre de uma cela completa e vamos retirando alguns pontos para observar o desenho que permanece." },
      {
        type: "ol",
        items: [
          "Retire os pontos 1 e 6 da cela completa. Quais pontos restam? Observe o desenho formado. Ele lembra o quê? Uma moldura? Um retângulo aberto? Um portal? Crie a sua própria associação.",
          "Retire os pontos 3 e 6 da cela completa. Restam quatro pontos na parte superior da cela. Esse arranjo é chamado de série superior. O formato costuma lembrar um quadrado. Muitas pessoas associam a um fogão de quatro bocas visto de cima.",
          "Retire os pontos 4, 5 e 6. Restam apenas os três pontos da esquerda. Esse agrupamento forma a coluna da esquerda. Pode lembrar um semáforo na vertical, três botões alinhados ou uma coluna de tomadas.",
          "Retire os pontos 2, 4 e 6. Observe o desenho restante. Muitas pessoas associam a um meio círculo, uma seta ou uma concha.",
        ],
      },
      {
        type: "static-cells",
        ariaLabel: "Celas correspondentes aos esquemas associativos",
        groups: [
          { cells: [{ dots: [2, 3, 4, 5], caption: "Pontos 2, 3, 4, 5" }] },
          { cells: [{ dots: [1, 2, 4, 5], caption: "Pontos 1, 2, 4, 5" }] },
          { cells: [{ dots: [1, 2, 3], caption: "Pontos 1, 2, 3" }] },
          { cells: [{ dots: [1, 3, 5], caption: "Pontos 1, 3, 5" }] },
        ],
      },
      {
        type: "p",
        text: "Essas associações não são decorativas. Elas constroem um repertório mental que será usado depois, quando as letras começarem a aparecer. O aprendiz deixa de pensar em números de pontos e passa a reconhecer formatos familiares.",
      },
      {
        type: "p",
        text: "Trabalhar a cela em tamanho grande, depois médio e progressivamente menor, fortalece essa percepção. As letras passam a ser apresentadas em pequenos grupos, comparadas entre si e sempre relacionadas aos padrões das séries de sinais, na posição de leitura.",
      },
      { type: "image", key: "JOGOS_LETRAS", alt: "Jogo dupla face Braille" },
      { type: "h3", text: "Aprendendo as primeiras letras no alfabraille" },
      {
        type: "p",
        text: "Com a cela já conhecida, os pontos identificados e o tato exercitado, começa a reprodução das letras.",
      },
      {
        type: "p",
        text: "Na versão web deste material, esta seção traz uma cela Braille interativa: toque nos seis pontos para ativar e desativar e descubra na hora qual letra você está formando.",
      },
      { type: "interactive-cell" },
      { type: "p", text: "As letras a, b, c, d, e, f, g, h, i, j formam a primeira série de sinais." },
      { type: "image", key: "PRIMEIRA_SERIE_SINAIS", alt: "Representação em Braille das letras a, b, c, d, e, f, g, h, i e j — primeira série de sinais." },
      { type: "p", text: "Essas dez letras são as matrizes de todo o alfabeto Braille." },
      {
        type: "ul",
        items: [
          "a igual ponto 1",
          "b igual pontos 1 e 2",
          "c igual pontos 1 e 4",
          "d igual pontos 1, 4 e 5",
          "e igual pontos 1 e 5",
          "f igual pontos 1, 2 e 4",
          "g igual pontos 1, 2, 4 e 5",
          "h igual pontos 1, 2 e 5",
          "i igual pontos 2 e 4",
          "j igual pontos 2, 4 e 5",
        ],
      },
      { type: "p", text: "Até a letra h, todas utilizam o ponto 1." },
      { type: "p", text: "As letras i e j não utilizam o ponto 1, o que já serve como pista perceptiva importante." },
      { type: "p", text: "Observe também as letras em espelho:" },
      { type: "ul", items: ["d e f", "e e i", "h e j"] },
      {
        type: "static-cells",
        pairs: true,
        ariaLabel: "Pares de letras em espelho",
        groups: [
          {
            cells: [
              { dots: [1, 4, 5], caption: "d" },
              { dots: [1, 2, 4], caption: "f" },
            ],
          },
          {
            cells: [
              { dots: [1, 5], caption: "e" },
              { dots: [2, 4], caption: "i" },
            ],
          },
          {
            cells: [
              { dots: [1, 2, 5], caption: "h" },
              { dots: [2, 4, 5], caption: "j" },
            ],
          },
        ],
      },
      { type: "p", text: "Essas semelhanças devem ser associadas a imagens mentais para evitar inversões." },
      {
        type: "p",
        text: "Toda essa primeira série utiliza apenas os quatro pontos da série superior da cela. Os pontos 3 e 6 ainda não aparecem.",
      },
      {
        type: "p",
        text: "Nesse momento, já é possível trabalhar pequenas palavras em escala ampliada, permitindo que o aprendiz perceba que aqueles formatos conhecidos começam a formar algo que ele já reconhece.",
      },
      { type: "h3", text: "Símbolos compostos: indicadores de número e de maiúsculo" },
      {
        type: "p",
        text: "Depois de apresentar a primeira série de sinais, é possível mostrar ao aprendiz como o Braille amplia seu repertório por meio dos símbolos compostos. Ao acrescentar, antes das letras, o sinal formado pelos pontos 3 4 5 6, as letras a a j passam a representar os números 1 a 0. Assim, não surgem novos formatos para os algarismos: utiliza-se a própria base já conhecida da primeira série, antecedida pelo indicador numérico.",
      },
      { type: "image", key: "NUMEROS_BRAILLE", alt: "Sinais numéricos representados em alfabraille do 1 ao 0." },
      {
        type: "p",
        text: "Da mesma forma, ao colocar antes de uma letra o sinal formado pelos pontos 4 e 6, essa letra passa a ser lida como maiúscula. O aprendiz percebe, então, que o sistema Braille não cria novos sinais isolados para cada função da escrita, mas combina sinais já conhecidos para produzir novos sentidos, reforçando a lógica interna, econômica e organizada do sistema.",
      },
      { type: "image", key: "MAIUSCULAS_BRAILLE", alt: "Letras maiúsculas da primeira série de sinais em alfabraille." },
      { type: "h3", text: "Como surgem a segunda e a terceira séries de sinais" },
      {
        type: "p",
        text: "Quando a primeira série está bem compreendida, o avanço para as demais letras acontece de forma lógica. Conheça algumas palavras.",
      },
      { type: "h3", text: "Segunda série de sinais: do k ao t" },
      { type: "p", text: "Forma-se acrescentando o ponto 3 a cada uma das letras da primeira série." },
      {
        type: "p",
        text: "Ou seja, não são novos desenhos. São os mesmos formatos já conhecidos, com um ponto a mais na parte inferior esquerda da cela.",
      },
      { type: "image", key: "SEGUNDA_SERIE", alt: "Segunda série de sinais (k ao t)." },
      { type: "image", key: "PALAVRAS_8", alt: "Oito palavras em tinta e em Braille: abelha, amigo, pipoca, tigre, sardinha, noite, jardim, melancia." },
      { type: "h3", text: "Terceira série de sinais: do u ao ç" },
      {
        type: "p",
        text: "Forma-se acrescentando os pontos 3 e 6 às letras da primeira série. Novamente, o aprendiz reconhece o desenho original e percebe apenas o acréscimo de novos pontos na parte inferior. A terceira série de sinais é formada pelas letras finais do alfabeto simples: u v x y z ç.",
      },
      { type: "image", key: "TERCEIRA_SERIE", alt: "Terceira série de sinais até ç." },
      {
        type: "p",
        text: "Essa progressão mostra que o sistema Braille é organizado por variações sobre um mesmo padrão. As letras não são apresentadas como símbolos isolados, mas como desdobramentos de uma lógica interna que o tato já aprendeu a reconhecer.",
      },
      { type: "image", key: "PALAVRAS_TERCEIRA", alt: "Cinco palavras em tinta e em Braille: uva, nuvem, viagem, xadrez, palhaço." },
      { type: "h3", text: "Uma exceção no padrão: a letra w" },
      {
        type: "p",
        text: "A letra w não segue a mesma lógica das séries do sistema Braille. Isso acontece porque, quando Louis Braille criou o código, ele foi pensado para a língua francesa, que não utilizava a letra w naquele período.",
      },
      {
        type: "p",
        text: "Por isso, o w não entrou na organização original das três séries de sinais. Ele foi incorporado posteriormente, quando o Braille passou a ser usado em outras línguas. Assim, acabou ficando fora da progressão lógica das demais letras, sendo incluído de forma independente dentro do sistema.",
      },
      { type: "image", key: "LETRA_W", alt: "Letra w em Braille." },
      { type: "h3", text: "Vídeos complementares" },
      { type: "video", url: "https://www.youtube.com/watch?v=_Sn0y2HnlzA", label: "Vídeo 1 — Aprofundando o alfabeto Braille" },
      { type: "video", url: "https://www.youtube.com/watch?v=coRHs6a0LBA", label: "Vídeo 2 — Séries de sinais na prática" },
    ],
  },
  {
    id: "cap5",
    slug: "capitulo-5",
    number: 5,
    title: "Capítulo 5: Da Escala Ampliada ao Papel",
    shortTitle: "Capítulo 5 — Escala ao Papel",
    blocks: [
      {
        type: "p",
        text: "A partir do aprendizado das primeiras séries de sinais, em paralelo, entram atividades fundamentais com linhas. Linhas contínuas, tracejadas, pontilhadas, segmentadas, de diferentes extensões, feitas em relevo no papel, para iniciar o contexto da escala mais reduzida. O dedo começa a aprender a percorrer caminhos antes de percorrer palavras. Essa etapa prepara a orientação espacial que será necessária na leitura em papel. O professor pode fazer esse arranjo de linhas com barbante, cola quente, canudinhos, o próprio padrão Braille ou recortadas em cartões de EVA.",
      },
      { type: "image", key: "LINHAS", alt: "Ilustração das linhas contínuas, tracejadas, pontilhadas e segmentadas." },
      {
        type: "p",
        text: "Antes de levar a leitura para o papel, é importante ensinar o dedo a percorrer linhas. O professor pode propor uma prancha com linhas contínuas, tracejadas, pontilhadas e segmentadas, de diferentes comprimentos e espessuras. A orientação é simples e muito rica em percepção: passe o dedo do início ao fim da linha, descubra qual é a maior, qual é a menor, qual é lisa, qual é interrompida. Na linha tracejada, quantas interrupções você sente? Na segmentada, consegue contar os pedaços? Em qual trecho a linha é mais longa, em qual é mais curta? Esses exercícios treinam o movimento linear, a constância do toque, a percepção de continuidade e de pausa, habilidades essenciais para, depois, acompanhar com segurança as linhas de um texto em Braille.",
      },
      {
        type: "p",
        text: "Quando se inicia a transição da escala ampliada para a leitura no papel, essa passagem precisa ser cuidadosa. Recomenda-se começar com papel mais liso, como acetato em espaçamento duplo, evitando o interponto. Mantém-se espaço duplo entre palavras e entre linhas. Isso facilita a discriminação tátil enquanto a leitura ainda está se consolidando.",
      },
      { type: "image", key: "BRAILLE_ACETATO", alt: "Arte gráfica da palavra Braille em Braille com espaçamento maior." },
      {
        type: "p",
        text: "Inicia-se com palavras simples e isoladas, formadas apenas pelas letras que já foram exploradas na escala ampliada. Essas palavras aparecem organizadas em linhas bem espaçadas no papel, permitindo que o aprendiz faça a transposição entre o que sente no papel e o que já conhece no material ampliado. Nesse momento, a escala ampliada permanece presente como recurso de apoio e espelhamento. A proposta é ler no papel e reproduzir no material ampliado, ou montar no material e localizar a mesma configuração no papel. Essa correspondência constante fortalece a segurança tátil, consolida o reconhecimento dos padrões e ajuda o aprendiz a compreender que se trata do mesmo sistema apresentado em tamanhos diferentes.",
      },
      { type: "h3", text: "Vídeo com Materiais com variações para a Cela Braille" },
      { type: "video", url: "https://www.youtube.com/watch?v=JP3g3YZ1wc8", label: "Materiais com variações para a Cela Braille" },
      {
        type: "p",
        text: "A posição das mãos e dos dedos passa a ser um conteúdo ensinado explicitamente. A pressão do dedo deve ser a mais leve possível. A base da mão não apoia na mesa nem no papel, permanece suspensa. Os dedos ficam estendidos, sem se dobrar para dentro. O movimento sobre as letras acontece de forma ondulada, acompanhando o relevo, e não em linha reta rígida.",
      },
      {
        type: "p",
        text: "A mão esquerda marca o início da linha, deslizando levemente para cima e para baixo, enquanto a mão direita percorre a linha na horizontal. Se o aprendiz for canhoto, inverte-se as mãos: a direita funciona como marcador e a esquerda, leitora.",
      },
      { type: "image", key: "POSICAO_MAOS", alt: "Arte gráfica da posição das mãos para a leitura em Braille." },
      {
        type: "p",
        text: "Quando esse movimento se torna natural e linear, o espaçamento pode ser reduzido gradualmente. É importante fazer pausas regulares durante a prática, pois o tato se cansa com facilidade e, em dias frios, a sensibilidade tátil pode ficar reduzida, exigindo ainda mais cuidado com o tempo de atividade.",
      },
      { type: "image", key: "PESSOA_LENDO", alt: "Pessoa lendo Braille em um livro, placa ou urna." },
      {
        type: "p",
        text: "Nessa metodologia, a leitura vem antes da escrita. O processo de leitura em Braille é mais demorado, envolve mais habilidades sensoriais e motoras e constrói a base que permitirá escrever com segurança depois. Durante a leitura, trabalha-se também a compreensão das letras em espelho e os padrões das séries de sinais. A estrutura do alfabeto Braille é formada por 7 séries de sinais.",
      },
      { type: "image", key: "QUADRO_7_SERIES", alt: "Quadro das 7 séries de sinais do Braille." },
    ],
  },
  {
    id: "cap6",
    slug: "capitulo-6",
    number: 6,
    title: "Capítulo 6: Escrita com Reglete e Punção",
    shortTitle: "Capítulo 6 — Reglete e Punção",
    blocks: [
      {
        type: "p",
        text: "Quando a escrita é introduzida, geralmente na reglete e punção, muitas habilidades já estão desenvolvidas. O aprendiz já sabe atuar dentro do espaço delimitado da cela, já consegue controlar a pressão do punção para não perfurar excessivamente o papel, já compreende a organização espacial dos pontos e já domina a reversibilidade necessária para escrever em espelho.",
      },
      {
        type: "p",
        text: "Como a leitura já está estabelecida, a escrita acompanha de forma mais fluida. A linearidade na reglete se mantém porque a orientação espacial foi trabalhada desde as atividades com linhas. A percepção dos pontos se torna mais natural porque o tato foi preparado antes.",
      },
      { type: "h3", text: "Instrumentos usados para produzir os pontos em relevo" },
      {
        type: "p",
        text: "A escrita em Braille pode ser realizada com diferentes recursos: reglete e punção, máquina de escrever Braille e impressora Braille. Neste material, o foco é a reglete e a punção, por serem acessíveis, de baixo custo e amplamente utilizadas no processo de aprendizagem. Antes de escrever, é essencial conhecer esses instrumentos e aprender a manuseá-los com segurança e precisão.",
      },
      {
        type: "p",
        text: "Existem alguns tipos mais comuns de reglete: de mesa, de bolso e de página inteira. Existe também a reglete positiva.",
      },
      { type: "image", key: "TIPOS_REGLETE", alt: "Os 4 tipos de reglete: de mesa, de bolso, de página inteira e positiva." },
      {
        type: "p",
        text: "A reglete de mesa é composta por uma base retangular de madeira ou plástico, geralmente com cerca de 31 por 19 centímetros, com prendedor de papel na parte superior e orifícios laterais para encaixe da régua na posição de escrita. Acompanha uma régua de metal ou plástico formada por duas placas unidas por dobradiça. A placa inferior possui a configuração da cela Braille em baixo relevo. A placa superior apresenta pequenas janelas retangulares com reentrâncias por onde desliza a punção. Essa régua costuma ter 4 linhas e 27 celas por linha. Cada cela mede cerca de seis milímetros de altura por quatro milímetros de largura.",
      },
      {
        type: "p",
        text: "A reglete de bolso corresponde apenas à régua, sem a base, sendo utilizada para pequenas anotações. Pode ter a mesma quantidade de linhas e celas ou um número reduzido.",
      },
      {
        type: "p",
        text: "A reglete de página inteira permite escrever várias linhas de uma só vez, ocupando toda a extensão da folha. Também é formada por duas placas articuladas. A placa superior possui as janelas que delimitam as celas. A placa inferior apresenta os sulcos que orientam a marcação correta dos pontos.",
      },
      {
        type: "p",
        text: "A reglete positiva tem celas em auto relevo e um punção côncavo para marcar o papel e a escrita acontece da esquerda para a direita.",
      },
      {
        type: "p",
        text: "Para utilizar a reglete convencional, conhecida como negativa, a folha é posicionada entre as placas e fixada ao fechar o instrumento. A escrita é feita com a punção, pressionando o papel nos espaços correspondentes aos pontos da cela.",
      },
      { type: "video", url: "https://youtu.be/x81dED22mH0", label: "Reglete de mesa" },
      {
        type: "p",
        text: "Na reglete, os pontos são marcados pelo verso do papel. O relevo se forma do outro lado, onde a leitura acontecerá. Por isso, a escrita é realizada da direita para a esquerda. Nessa posição invertida, para quem escreve, os pontos 1, 2 e 3 ficam à direita, e os pontos 4, 5 e 6 à esquerda. Ao virar o papel para a leitura, a cela aparece corretamente orientada. O aprendiz compreende, na prática, que escreve um espelho do que será lido depois, desenvolvendo noção de reversibilidade e organização espacial.",
      },
      {
        type: "p",
        text: "A punção é um estilete de ponta arredondada com apoio anatômico para os dedos. Seu uso difere da caneta ou lápis. Deve ser segurada de modo natural, com a ponta perpendicular ao papel e sem força excessiva, para não rasgar a folha nem perfurar o ponto. Recomenda-se deslizar a punção pelas janelas da cela, sem levantá-la a cada marcação. Esse movimento contínuo reduz o cansaço do pulso, mantém a regularidade da pressão e favorece a velocidade da escrita.",
      },
      {
        type: "p",
        text: "Cada cela comporta um único símbolo. As letras de uma palavra ocupam celas seguidas. O espaço entre palavras corresponde a uma cela vazia. Os pontos devem ser marcados seguindo a composição correta de cada símbolo, para garantir legibilidade tátil.",
      },
      {
        type: "p",
        text: "Ao completar as quatro linhas da régua, é necessário deslizá-la para os orifícios laterais seguintes e continuar a escrita até o final da folha.",
      },
      {
        type: "p",
        text: "No início da aprendizagem, recomenda-se retirar o papel da reglete ao final de cada linha escrita. Isso permite que leitura, escrita e correção ocorram de forma simultânea.",
      },
      {
        type: "p",
        text: "A correção pode ser feita durante a escrita. Basta pressionar o relevo do ponto com a ponta ou o fundo da punção, ou utilizar apagador apropriado, alisando bem o papel antes de reescrever no mesmo local. Como a sensibilidade tátil é muito apurada, é importante apagar completamente o ponto para não gerar dúvidas na leitura.",
      },
      {
        type: "p",
        text: "A boa escrita em Braille apresenta pontos bem salientes, em alto relevo. Após escrever, retira-se o papel da reglete, vira-se a folha e a leitura ocorre da esquerda para a direita, no lado em que os pontos estão elevados.",
      },
      {
        type: "p",
        text: "Recomenda-se utilizar papel com gramatura em torno de 120 g/m², que preserva melhor o relevo mesmo com diferentes níveis de pressão durante a escrita.",
      },
      { type: "video", url: "https://www.youtube.com/watch?v=7lAYCvlif0M", label: "Estrutura da Cela Braille e reglete de bolso" },
      { type: "h3", text: "Erros Mais Comuns em Textos Braille" },
      {
        type: "p",
        text: "Alguns erros aparecem com frequência nos textos produzidos por quem está iniciando a escrita em Braille e quase sempre estão ligados à organização espacial da cela e ao controle da pressão da punção. É comum ocorrer inversão de pontos, especialmente por confusão entre os lados direito e esquerdo durante a escrita na reglete, formação de letras em espelho, desalinhamento das celas ao longo da linha, excesso de pressão que rasga ou marca demais o papel, ou pressão insuficiente que deixa o ponto baixo e difícil de ler. Também surgem falhas no espaçamento entre palavras e linhas, o que compromete a fluidez da leitura tátil. Reconhecer esses erros como parte do processo ajuda o aprendiz a ajustar a postura das mãos, a leveza do toque e a atenção à organização da cela, elementos fundamentais para a qualidade da leitura posterior.",
      },
      {
        type: "ol",
        items: [
          "Pontos a mais ou a menos em letras, o que não caracteriza erros ortográficos;",
          "Palavras juntas, sem intervalo de “celas” vazias;",
          "Palavras separadas por dois ou mais espaços;",
          "Espaços no meio de palavras, que ficam interrompidas;",
          "Troca de posição de letras na mesma palavra;",
          "Letras em espelho, ou seja, inversão dos pontos que compõe o símbolo;",
          "Repetição ou letras a mais em uma mesma palavra;",
          "Falta de letras em uma palavra;",
          "Existência de letras ou sinais estranhos em uma palavra;",
          "Empastelamentos de linhas (quando se escreve uma linha por cima da outra);",
          "Pontos danificados ou rasgados devido a força empregada para marcá-los no momento da escrita;",
          "Pontos mal apagados.",
        ],
      },
      { type: "h3", text: "Manuseando o instrumento de escrita: reglete e punção" },
      {
        type: "p",
        text: "Posicione a reglete em uma mesa ou carteira na mesma posição que você colocaria um caderno se fosse escrever; na posição vertical. Verifique o alinhamento da prancheta com a borda da mesa, de forma que ela não fique inclinada. A inclinação da prancha pode resultar em dificuldade para encontrar a posição exata dos pontos. Caso a régua se encontrar na posição central, retire-a e coloque-a na prancheta da reglete na posição horizontal, prendendo-a nos primeiros furos laterais. A abertura fica a sua direita e a dobradiça à esquerda.",
      },
      { type: "p", text: "Pegue uma folha de papel sulfite, de preferência com gramatura 120." },
      {
        type: "p",
        text: "É preciso pressionar o punção com jeito; se fizer muita pressão os pontos ficam furados, ou seja, rasga o papel; se não fizer pressão nenhuma os pontos não ficam salientes. Portanto, a pressão do punção no papel deve ser moderada. Fique atento para que o punção esteja posicionado perpendicular ao papel.",
      },
      { type: "p", text: "Para começar a escrever, abra a régua da reglete para prender o papel." },
      {
        type: "p",
        text: "Coloque o papel sobre a prancha da reglete, com a régua já aberta, prendendo-o na parte superior do prendedor de papel. Antes, encoste a folha de papel na parte interna da régua, rente à dobradiça. A sobra da lateral do lado direito é a margem que ficará no papel quando você for virar a folha para ler o que está escrito.",
      },
      {
        type: "p",
        text: "Após prender o papel na parte superior da reglete e alinhar o papel na lateral da dobradiça, feche a régua. O papel fica entre as duas partes da régua/grade, como um sanduíche.",
      },
      { type: "p", text: "Pegue o punção e o posicione de forma confortável perpendicular, mas nunca como se segurasse uma caneta ou lápis." },
      { type: "p", text: "Arraste o punção nas laterais da cela tentando encontrar os seis pontos e perfurá-los. Repita esta ação em todas as celas da 1ª linha da régua." },
      {
        type: "p",
        text: "Abra a régua e o prendedor de papel e retire a folha. Vire a folha e veja se você conseguiu encontrar todos os seis pontos dentro de cada cela. Certamente os pontos estarão em relevo.",
      },
      { type: "p", text: "ao concluir a atividade, verifique se você teve mais erros ou acertos." },
      {
        type: "p",
        text: "Volte a colocar o papel na reglete, tendo como referência as marcas na margem superior e margem direita, encaixando os furos nas saliências do prendedor e da régua. Não precisa baixar a régua para as próximas quatro linhas. Repita o procedimento anterior na 2ª linha, agora alternando celas. Fure os seis pontos em uma cela, deixe uma vazia, e fure na cela seguinte. Prossiga até o final da linha. Concluindo, corrija sua produção.",
      },
      {
        type: "p",
        text: "Lembre-se que não precisa fazer muita força com o punção. Pressione o punção de modo que não rasgue o papel. Você ouvirá um “toc, toc”, cada vez que o punção deslizar nas reentrâncias das celas. Repita para os sinais aprendidos, sempre uma linha contínua e a outra com espaçamento. Tente escrever palavras, as mesmas que você já tenha lido anteriormente. Siga para sentenças mais elaboradas, nunca se esquecendo de retirar a folha para fazer a leitura minuciosa.",
      },
      {
        type: "callout",
        text: "ATENÇÃO: não repita essa atividade por mais de três vezes, pois os movimentos repetitivos podem causar lesões. Descanse sempre alguns minutos para recomeçar.",
      },
      {
        type: "p",
        text: "Uma observação importante para facilitar nos processos iniciais de alfabetização é cobrir com fita dupla-face linhas alternadas da régua/grade. Por exemplo, deixando a primeira e a terceira linhas abertas, cobrindo a segunda e a quarta, o espaçamento entre linhas ficará duplo, dando maior conforto no momento de encontrar as celas, pular linhas e fazer as correções posteriores por meio da leitura visual e tátil. Esse procedimento, porém, é recomendado apenas durante o aprendizado das letras isoladamente ou de pequenas palavras, evitando que seja utilizado por um longo período. Assim que se acostumar com o movimento do punção e com o espaçamento, trate de retirar a cobertura das linhas da régua/grade.",
      },
      {
        type: "p",
        text: "A partir desse momento, leitura e escrita caminham juntas. O aprendiz amplia gradativamente o repertório de sinais, incorporando pontuação, acentuação, numerais e demais símbolos do sistema.",
      },
      {
        type: "p",
        text: "Esse percurso respeita o modo como o aprendiz aprende, valoriza o corpo como parte do processo de leitura e cria bases sólidas para que o Braille deixe de ser um conjunto de pontos a memorizar e passe a ser, de fato, um sistema de leitura e escrita significativo.",
      },
      { type: "image", key: "REGLETE_PASSO_A_PASSO", alt: "Tipos de reglete, colocação da folha, punção na janelinha, estrutura das celas das letras ao contrário." },
      { type: "h3", text: "Reversibilidade no Sistema Braille" },
      {
        type: "p",
        text: "Falamos bastante sobre reversibilidade, mas o que isso significa? Reversibilidade é o processo de inversão de lateralidade que acontece entre a leitura e a escrita no Sistema Braille. Na leitura, os pontos são percebidos a partir da coluna da esquerda, composta pelos pontos 1, 2 e 3, e da coluna da direita, composta pelos pontos 4, 5 e 6. Na escrita com reglete e punção, essa lateralidade é invertida. Os pontos 1, 2 e 3 passam a ser perfurados na coluna da direita, e os pontos 4, 5 e 6 na coluna da esquerda. Isso acontece porque a escrita é feita no verso do papel, para que o relevo correto apareça na frente quando o papel é virado. A reversibilidade também pode ser observada na semelhança espacial entre algumas letras do alfabeto Braille, que funcionam como imagens espelhadas entre si, como d/f, e/i, h/j, r/w, y/ç, entre outras. Essa percepção espacial é fundamental no processo de aprendizagem e no desenvolvimento da leitura e da escrita em Braille.",
      },
      { type: "h3", text: "O que é transcrição no contexto do Braille" },
      {
        type: "p",
        text: "No contexto do Braille, transcrição é o ato de converter o que está escrito em cada cela Braille para a escrita em tinta, registrando a palavra correspondente acima da linha em Braille. Essa escrita é feita com caneta, em letra cursiva, unindo as letras para formar a palavra completa, e não letras isoladas. A transcrição não é uma correção do que foi escrito em Braille. Ela deve respeitar exatamente o que está registrado, inclusive possíveis erros, omissões ou trocas feitas por quem escreveu. O objetivo é converter fielmente o que está no Braille para a tinta, permitindo que quem enxerga acompanhe a leitura do texto tal como ele foi produzido.",
      },
      { type: "image", key: "TRANSCRICAO", alt: "Foto da transcrição feita por mãos." },
    ],
  },
  {
    id: "fechamento",
    slug: "fechamento",
    title: "Fechamento",
    shortTitle: "Fechamento",
    blocks: [
      {
        type: "p",
        text: "Ao longo destas páginas, o Braille foi apresentado como percurso, como experiência sensorial e como prática possível. O que começa nas pontas dos dedos ganha forma, ritmo e significado até se transformar em leitura fluida e escrita segura. Um leitor fluente em Braille pode chegar a ler 125 palavras por minuto, enquanto um leitor padrão pode atingir até 104 palavras por segundo em Braille.",
      },
      {
        type: "p",
        text: "Quando esse caminho é bem conduzido, a pessoa deixa de tatear pontos isolados e passa a reconhecer palavras, ideias, textos. A relação com a linguagem escrita se reorganiza. Voltam as anotações, os registros, os estudos, a liberdade de ler sem depender de ninguém.",
      },
      {
        type: "p",
        text: "O sistema desenvolvido por Louis Braille continua cumprindo sua função porque oferece exatamente isso: acesso direto à escrita por meio do tato.",
      },
      {
        type: "p",
        text: "Que este material ajude mais pessoas a chegarem a esse momento em que os pontos deixam de ser pontos e passam a ser leitura.",
      },
      {
        type: "p",
        text: "Ao longo deste material, apresentei os fundamentos e o percurso inicial da alfabetização em Braille. Para quem deseja aprofundar e aplicar esse processo de forma completa, desenvolvi um material complementar em Braille com 28 atividades organizadas passo a passo. Nele, o trabalho começa pelas letras iniciais, avança para formação de palavras, sentenças, inclui letras acentuadas, pontuação, leitura de frases e textos, além de introdução à matemática básica. Esse material foi pensado para acompanhar todo o processo de alfabetização, oferecendo sequências práticas e progressivas que podem ser utilizadas diretamente no ensino.",
      },
    ],
  },
  {
    id: "autora",
    slug: "quem-sou-eu",
    title: "Quem sou eu?",
    shortTitle: "Quem sou eu?",
    blocks: [
      { type: "image", key: "FOTO_AUTORA", alt: "Foto da autora Luciane Molina (Braillu)." },
      {
        type: "p",
        text: "Luciane Molina é professora braillista há mais de duas décadas, reconhecida nas redes como Braillu — junção de Braille com as iniciais do seu nome. Doutora e mestre em Educação, pedagoga, especialista em Audiodescrição pela Pontifícia Universidade Católica de Minas Gerais e especialista em Atendimento Educacional Especializado com foco em tecnologias, formação de professores e tutoria na educação a distância.",
      },
      {
        type: "p",
        text: "Dedica sua trajetória à formação docente na grafia Braille, à mentoria educacional e ao desenvolvimento de metodologias para alfabetização e letramento de pessoas com deficiência visual.",
      },
      {
        type: "p",
        text: "Pessoa com deficiência visual, articula em sua atuação prática e acadêmica os temas da coautoria, identidade e justiça epistêmica, investigando o impacto da consultoria e da mediação pedagógica nos processos de construção do conhecimento.",
      },
      {
        type: "p",
        text: "Atua também como consultora em audiodescrição desde 2010, especialmente no campo audiovisual, e como analista em acessibilidade digital, contribuindo para a qualificação de práticas educacionais e culturais acessíveis.",
      },
      { type: "p", text: "e-mail: braillu@gmail.com" },
      { type: "link", url: "https://instagram.com/braillu", label: "@braillu no Instagram", external: true },
    ],
  },
];

export const getChapterBySlug = (slug: string) => CHAPTERS.find((c) => c.slug === slug);
export const getNavOrder = () => CHAPTERS.map((c) => c.slug);
