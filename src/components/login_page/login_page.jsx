import React, { useEffect } from 'react';
import styles from './login_page.module.css';
import { useHistory } from 'react-router';

const LoginPage = ({ authService }) => {
    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: '/maker',
            state: {id: userId},
        });
    };

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    };

    // useEffect(() => {
    //     authService.onAuthChange(user => {
    //         user && goToMaker(user.uid);
    //     });
    // });

    return (
        <section className={styles.login}>
            <h1 className={styles.title} >로그인</h1>
                <div className={styles.login_form}>
                    <div className={styles.field}>
                        <input className={styles.input} type="email" id="userName" name="userName" placeholder="이메일 아이디"/>
                    </div>
                    <div className={styles.field}>
                        <input className={styles.input} type="password" id="password" name="password" maxLength="17" placeholder="비밀번호(영문, 숫자, 특수 문자 포함 8자 이상)"/>
                    </div>
                <div className={styles.login_help}>
                    <label className={styles.save_id_label}>
                        <input className={styles.save_id_checkbox} type="checkbox" title="아이디 저장" />
                            <span className={styles.save_id_text} tabIndex="0">아이디 저장</span>
                    </label>
                    <div className={styles.forgot_pass}>
                        <a className={styles.save_id_text} href="/find/pwd">아이디·비밀번호 찾기</a>
                    </div>
                </div>
                <button className={styles.login_btn}>로그인</button>
                </div>
                <div className={styles.separator}>
                    <div className={styles.separator_line}></div>
                    <span className={styles.separator_text}>또는</span>
                </div>
                <ul className={styles.list}>
                        <button className={styles.button} onClick={onLogin}>
                        <img className={styles.logo_naver} src="/images/naver.png" alt="logo"/>
                            </button>
                        <button className={styles.button} onClick={onLogin}>
                        <img className={styles.logo_kakao} src="/images/kakao.png" alt="logo"/>
                            </button>
                        <button className={styles.button} onClick={onLogin}>
                        <img className={styles.logo} src="/images/google.png" alt="logo"/>
                            </button>
                </ul>
            </section>
    )
    };

export default LoginPage;