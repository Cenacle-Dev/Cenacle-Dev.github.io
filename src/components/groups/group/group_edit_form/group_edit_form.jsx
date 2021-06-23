// import React, {useRef} from 'react';
// import styles from './group_edit_form.module.css';

// // const defaultImage = "/images/default_logo.png";

// const GroupEditForm = ({ FileInput, group, updategroup, deletegroup }) => {
//     const nameRef = useRef();
//     const companyRef = useRef();
//     const emailRef = useRef();
//     const titleRef = useRef();
//     const messageRef = useRef();
//     const themeRef = useRef();

//     const {
//         name, 
//         company, 
//         title, 
//         email, 
//         message, 
//         theme, 
//         fileName, 
//     } = group;

//     const onFileChange = file => {
//         updategroup({
//             ...group,
//             fileName: file.name,
//             fileURL: file.url,
//         });
//     };

//     const onChange = (event) => {
//         if (event.currentTarget == null){
//             return;
//         }
//         event.preventDefault();
//         updategroup({
//             ...group,
//             [event.currentTarget.name]: event.currentTarget.value,
//         });
//     };
//     const onSubmit = () => {
//         deletegroup(group);
//     };
//     return (
//         <form 
//         className={styles.form}>
//             <input className={styles.input} 
//             type="text" 
//             name="name"
//             ref={nameRef}
//             onChange={onChange} 
//             value={name}/>
//             <input 
//             className={styles.input} 
//             type="text" name="company"
//             ref={companyRef}
//             onChange={onChange} 
//             value={company}/>
//             <select 
//             className={styles.select} 
//             name="theme"
//             ref={themeRef}
//             onChange={onChange} 
//             value={theme}>
//                 <option value="light">light</option>
//                 <option value="dark">dark</option>
//                 <option value="colorful">colorful</option>
//             </select>
//             <input 
//             className={styles.input} 
//             type="text" 
//             name="title"
//             ref={titleRef}
//             onChange={onChange} 
//             value={title}/>
//             <input 
//             className={styles.input} 
//             type="text" 
//             name="email"
//             ref={emailRef}
//             onChange={onChange} 
//             value={email}/>
//             <textarea 
//             className={styles.textarea} 
//             name="message"
//             ref={messageRef}
//             onChange={onChange} 
//             value={message} />
//             <div className={styles.fileInput}>
//             </div>
//         </form>
//     )
// }

// export default GroupEditForm;