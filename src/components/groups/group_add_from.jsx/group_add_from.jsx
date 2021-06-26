import React, { useRef, useState } from 'react';
import styles from './group_add_form.module.css';
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css'; // or scss
import GroupImage from '../group_image/group_image';


const GroupAddForm = ({ FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null });

    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const group = {
            id: Date.now(), //uuid
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null })
        onAdd(group);
    };
    return (
        <form className={styles.form}>
            <h1>모임을 만들어주세요.</h1>
            <div className={styles.container}>
                <GroupImage />
                <input
                    ref={nameRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="모임 이름을 입력하세요." />
                <input
                    ref={companyRef}
                    className={styles.input}
                    type="text"
                    name="company"
                    placeholder="#내용 #추가" />
                <select
                    ref={themeRef} className={styles.select} name="theme" placeholder="모임 형식">
                    <option placeholder="온라인">온라인</option>
                    <option placeholder="오프라인">오프라인</option>
                    <option placeholder="복합">복합</option>
                </select>
                <textarea
                    ref={messageRef} className={styles.textarea} name="message" placeholder="모임 설명을 작성하세요." />
                <div className={styles.fileInput}>
                </div>
            </div>
        </form>
    )
}

export default GroupAddForm;