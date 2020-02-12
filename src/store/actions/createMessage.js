const createMessage = (message) => (dispatch, getState, { getFirestore }) => {
  // make async call to database
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection('messages')
    .add({
      ...message,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: 'CREATE_MESSAGE', message });
    })
    .catch((err) => {
      dispatch({ type: 'CREATE_MESSAGE_ERROR' }, err);
    });
};


export default createMessage;
