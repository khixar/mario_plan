export const createProject = (project) => {
  return (dipsatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dipsatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dipsatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
}; 