const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    //Inserir dados

    proffyValue = {
        name:'Mayk Brito',
        avatar:'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp:'4334243324',
        bio: 'Instrutor de educação fisica',
    }

    classValue = {
        subject:1,
        cost:'20',
        // o proffy_id virá do banco de dados
    }

    classScheduleValues = [
        //classe_id virá pelo banco de dados apos cadastrarmos a classe
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]
        
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consular os dados inseridos 

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor e 
    //trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por exemplo das 8h ~18h
    // o horario do time_from é 8h) precisar ser antes ou igual ao horario solicidade 
    //o time_from precisa ser acima
    const selectClassesSchedules = await db.all(`
        
    `)
    //console.log(selectClassesSchedules)

})