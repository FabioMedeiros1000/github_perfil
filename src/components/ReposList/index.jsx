import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok){
                throw new Error('');
            }
            return res.json()
        })
        .then(resJson => {  
            setDeuErro(false);
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            }, 3000)
        })
        .catch(erro => {
            setDeuErro(true);
        })
        
    }, [nomeUsuario]);

    if (deuErro){
        return(
            <div className="container">
                <h1>Digite um nome de usuário que seja válido!</h1>
            </div>
        )
    }

    else{
        return (
            <div className="container">
                {estaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    <ul className={styles.list}>
                        {/* {repos.map(repositorio => ( */}
                        {repos.map(({ id, name, language, html_url }) => (
                            <li className={styles.listItem} key={id}>
                                <div className={styles.itemName}>
                                    <b>Nome: </b> {name} 
                                </div>
                                <div className={styles.itemName}>
                                    <b>Linguagem: </b> {language} 
                                </div>
                                <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a> 
                            </li>
                        ))}
                    </ul>
                )}
                
            </div>
        )
    }


}

export default ReposList;