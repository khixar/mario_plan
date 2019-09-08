export const createProject = (project) => {
  return (dipsatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'acha',
      authorLastName: 'sorry',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dipsatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dipsatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
}; 