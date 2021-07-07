  
const movies = []

/**
   * Função que adiciona os filmes no array vazio.
   * @param {string} name - Nome do filme.
   * @param {string} synopsis - Sinopse do filme.
   * @param {string} image - Imagem do filme.
   * @param {string} type - Tipo/categoria do filme.
   * @param {number} id- Identificação do filme no array.
   */
addMovie = (name,synopsis,image, type, id) => movies.push({name,synopsis,image, type, id})

addMovie("Episódio 4 - Uma nova esperança","O jovem Luke Skywalker sonha ir para a Academia como seus amigos, mas se vê envolvido em uma guerra intergalática. quando seu tio compra dois robôs e com eles encontra uma mensagem da princesa Leia Organa para o Jedi Obi-Wan Kenobi sobre os planos da construção da Estrela da Morte. (1977)", "https://play-lh.googleusercontent.com/urFmNCsqsU93qEKDmhrs60zl2rDki-XzdQpms01-P64kMX3VkGO0c7Sf2ira2mzbgwmM","classic", 1)
addMovie("Episódio 5 - O Império Contra-ataca","As forças imperais comandadas por Darth Vader lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso, Luke Skywalker tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a força e torná-lo um cavaleiro Jedi. (1980)", "https://i.pinimg.com/474x/f5/a5/fc/f5a5fcfdd06cc3ec9f724698d28d2831.jpg","classic", 2)
addMovie("Episódio 6 - Retorno do Jedi", "O Imperador Palpatine está supervisionando a construção de uma nova Estrela da Morte. Enquanto isso, Luke Skywalker liberta Han Solo e a Princesa Leia das mãos de Jabba. Luke só se tornará um cavaleiro Jedi quando destruir Darth Vader, que ainda pretende atraí-lo para o lado negro da Força. (1983)", "https://static.wikia.nocookie.net/filmes/images/b/ba/Star-Wars-Epis%C3%B3dio-VI-O-Retorno-do-Jedi.jpg/revision/latest?cb=20151211210145", "classic", 3)
addMovie('Episódio 1 - Ameaça Fantasma', "Quando a maquiavélica Federação Comercial planeja invadir o pacífico planeta Naboo, o guerreiro Jedi Qui-Gon Jinn e seu aprendiz Obi-Wan Kenobi embarcam em uma aventura para tentar salvar o planeta. Viajam com eles a jovem Rainha Amidala, que é visada pela Federação pois querem forçá-la a assinar um tratado político. (1999)",'https://i.pinimg.com/originals/61/1d/ba/611dba23cb1e960da85a261cfa8bb6e7.jpg','prequel', 4)
addMovie('Episódio 2 - Ataque dos clones', "Dez anos após a tentativa frustrada de invasão do planeta Naboo, Obi-Wan Kenobi, Anakin Skywalker e Padmé Amidala estão juntos novamente. Neste período de tempo Obi-Wan passou de aprendiz a professor dos ensinamentos jedi para Anakin, sendo que ambos foram destacados para proteger a agora senadora Amidala, que tem sua vida ameaçada por facções separatistas da República. (2002)",'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/12/20207108.jpg','prequel', 5)
addMovie('Episódio 3 - Vingança dos Sith', "As Guerras Clônicas estão em pleno andamento e as diferenças entre o Conselho Jedi e o Chanceler Palpatine aumentam cada vez mais. Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação. (2005)",'https://br.web.img3.acsta.net/medias/nmedia/18/92/58/33/20207204.jpg','prequel', 6)
addMovie('Episodio 7 - O Despertar da Força', "Após a queda de Darth Vader e do Império, surge uma nova ameaça: a Primeira Ordem, uma organização sombria que busca minar o poder da República e que tem Kylo Ren, o General Hux e o Líder Supremo Snoke como principais expoentes. (2015)",'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23815-cartaz.jpg','new', 7),
addMovie('Episodio 8 - Os Últimos Jedi',"A tranquila e solitária vida de Luke Skywalker sofre uma reviravolta quando ele conhece Rey, uma jovem que mostra fortes sinais da Força. O desejo dela de aprender o estilo dos Jedi força Luke a tomar uma decisão que mudará sua vida para sempre. (2017)", 'https://i.pinimg.com/originals/ca/70/81/ca7081d4a3ac2f45139d71d2204a78da.jpg','new', 8),
addMovie('Episodio 9 - A Ascensão Skywalker', "Com o retorno do Imperador Palpatine, a Resistência toma a frente da batalha. Treinando para ser uma completa Jedi, Rey se encontra em conflito com passado e futuro, e teme pelas respostas que pode conseguir com Kylo Ren. (2019)",'https://upload.wikimedia.org/wikipedia/pt/0/08/Star_Wars_The_Rise_of_Skywalker.jpg','new', 9)
addMovie('Rogue One: Uma história de Star Wars', "A Aliança Rebelde faz um movimento arriscado e rouba os planos da Estrela da Morte, a arma definitiva de destruição do Império. (2016)",'https://play-lh.googleusercontent.com/sU5ma8h0Wm2zyon4UV6H72J724y9INJkiWkiEV1YYgeNXDKX7d1dnNE53ajDssAc_e_Wrg','spin', 10)
addMovie('Solo: Uma história de Star Wars', "Em dificuldade financeira, o piloto Han Solo e sua namorada Qi'ra buscam trabalho. Eles colocam as mãos em uma substância valiosa, mas perigosa, e que acaba levando à perseguição do Império e à separação entre os dois. (2018)", 'https://upload.wikimedia.org/wikipedia/pt/5/5c/Solo_A_Star_Wars_Story.jpg','spin', 11)

module.exports = movies;
