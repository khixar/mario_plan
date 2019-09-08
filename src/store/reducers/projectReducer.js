const initState = {
  projects: [
    {id: "1", title: 'dummy project 1', contetn: "abc def ghi"},
    {id: "2", title: 'dummy project 2', contetn: "abc def ghi"},
    {id: "3", title: 'dummy project 3', contetn: "abc def ghi"}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": 
      console.log("created project", action.project)
      return state;
    case "CREATE_PROJECT_ERROR": 
      console.log('create project error', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;