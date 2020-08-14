const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
  //Inserir dados, tabela proffy
  proffyValue = {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "6799892121", 
    bio: 'Entusiasta das melhores tecnologias de química avançada...', 
  }

  //Inserir dados, tabela classes
  classValue = {
    subject: 1, 
    cost: "20", 
    //aqui o proffy_id virá pelo banco de dados
  }

  //Inserir dados, tabela class_schedule
  classScheduleValues = [
    //class_id virá pelo banco após cadastrarmos a class
    {
      weekday: 1, 
      time_from: 720, 
      time_to: 1220
    },
    {
      weekday: 0, 
      time_from: 520, 
      time_to: 1220
    },  

  ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})
  // Consultar os dados inseridos

  //arquiv ou executar todos os db.runs() da class_schedules
  //await Promise.all(insertedAllClassScheduleValues)

  //consultar os dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  //consultar as classes de um determinado professor
  //e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  //console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, ex: é das 8h - 18h
  //horário time_from (8) precisa ser antes ou igual ao horário solicitado
  //o time_to precisa ser acima

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  //console.log(selectClassesSchedules)
})