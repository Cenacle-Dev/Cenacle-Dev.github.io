import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({ name, onClick }) => (
    // type="button"을 하지 않으면 이 버튼을 누를 때마다 
    // Form submission canceled because the form is not connected라고 뜬다.
    // 해석하자면, 폼 연결이 없어서 폼 제출이 안 됐다는 건데, 타입을 지정해주지 않았으니 제출이 안 될만 하다. 
    <button type="button" className={styles.button} onClick={onClick}>
        {name}
    </button>

));

export default Button;