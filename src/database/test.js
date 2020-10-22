const Database = require ('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //Inserindo dados na tabela
  /*await saveOrphanage(db, {
        lat: "-27.2114330",
        lng: "-49.6544795",
        name: "Lar das meninas",
        about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "88888888",
        images: [
          "https://diariodegoias.com.br/wp-content/uploads/2018/12/criancas.jpg",
          "https://jornalcorreiodopovo.com/wp-content/uploads/2019/10/DIA-DAS.jpg",
        ].toString(),
        instructions:
          "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0",
      });*/
    //Consultar tabela de dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);
/*
    //Consulta de um único orfanato por ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage);

    //Deletando dados da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))*/
})

