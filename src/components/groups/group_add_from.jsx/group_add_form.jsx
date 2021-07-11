import React, { useRef, useState } from 'react';
import styles from './group_add_form.module.css';
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css'; // or scss
import GroupImage from '../group_image/group_image';
import Button from '../../button/button';
import SearchPlace from '../../map/search-place';


const GroupAddForm = ({ FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const tagRef = useRef();
    const descriptionRef = useRef();
    const meatingRef = useRef();
    const bookRef = useRef();
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
            tag: tagRef.current.value || '',
            description: descriptionRef.current.value || '',
            meating: meatingRef.current.value,
            book: bookRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null })
        onAdd(group);
    };

    return (
        <form ref={formRef} className={styles.form}>
            <h1>모임을 만들어주세요</h1>
            <div className={styles.container}>
                {/* <GroupImage file={file} /> */}
                <div className={styles.fileInput}>
                    <FileInput name={file.fileName} onFileChange={onFileChange} />
                </div>
                <input
                    ref={nameRef}
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="모임 이름을 입력하세요." />
                <input
                    ref={tagRef}
                    className={styles.input}
                    type="text"
                    name="tag"
                    placeholder="#내용 #추가" />
                <select
                    ref={meatingRef} className={styles.select} name="meating" placeholder="모임 형식">
                    <option placeholder="온라인">온라인</option>
                    <option placeholder="오프라인">오프라인</option>
                    <option placeholder="복합">복합</option>
                </select>
                <textarea
                    ref={descriptionRef} className={styles.textarea} name="description" placeholder="모임 설명을 작성하세요." />
            </div>
            <div className={styles.map}>
            </div>
            <SearchPlace />
            <Button name='만들기' onClick={onSubmit} />
        </form>
    )
}

export default GroupAddForm;