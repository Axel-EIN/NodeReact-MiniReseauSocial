// import React, { useState } from 'react';

// const UserProfile = ({ user }) => {
//   const [message, setMessage] = useState('');
//   const [isMessageSent, setIsMessageSent] = useState(false);

//   const handleSendMessage = () => {
//     // Логика для отправки сообщения
//     console.log(`Message sent to ${user.name}: ${message}`);
//     setIsMessageSent(true);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.profile}>
//         <img src={user.avatar} alt={`${user.name}'s avatar`} style={styles.avatar} />
//         <h1>{user.name}</h1>
//         <p>{user.bio}</p>
//       </div>
//       <div style={styles.messageSection}>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Напишите сообщение"
//           style={styles.textarea}
//         />
//         <button onClick={handleSendMessage} style={styles.button}>
//           Отправить сообщение
//         </button>
//         {isMessageSent && <p style={styles.confirmation}>Сообщение отправлено!</p>}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//   },
//   profile: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   avatar: {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     marginBottom: '10px',
//   },
//   messageSection: {
//     textAlign: 'center',
//   },
//   textarea: {
//     width: '100%',
//     height: '100px',
//     padding: '10px',
//     marginBottom: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   button: {
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     cursor: 'pointer',
//   },
//   buttonDisabled: {
//     backgroundColor: '#ccc',
//     cursor: 'not-allowed',
//   },
//   confirmation: {
//     marginTop: '10px',
//     color: 'green',
//   },
// };

// export default UserProfile;
