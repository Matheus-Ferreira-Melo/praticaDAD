import styles from './Content.module.css'
import x from '../Assets/x.png'
import correto from '../Assets/correto.png'


function Content(props) {
    return (
        <div className={styles.fundo}>
            <h1>{props.titulo}</h1>
            <div className={styles.container}>
                
                <div className={styles.bloco1}>
                    <h1>{props.title1}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price1}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                </div>
            
                <div className={styles.bloco1}>
                    <h1>{props.title2}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price2}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                </div>

                <div className={styles.bloco1}>
                    <h1>{props.title3}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price3}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                </div>
            </div>

            <h1>{props.titulo2}</h1>
            <div className={styles.container}>
                
                <div className={styles.bloco1}>
                    <h1>{props.title1}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price1}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                    
                </div>
            
                <div className={styles.bloco1}>
                    <h1>{props.title2}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaNPossui}>
                        <img src={x} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price3}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                </div>

                <div className={styles.bloco1}>
                    <h1>{props.title3}</h1>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt=""  className={styles.correto}/>
                        <p>{props.description}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description2}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description3}</p>
                    </div>
                    <div className={styles.linhaPossui}>
                        <img src={correto} alt="" className={styles.x} />
                        <p>{props.description4}</p>
                    </div>
                    <div className={styles.preco}>
                        <h1>${props.price4}</h1>
                        <h6>Per month</h6>
                    </div>
                    <button className={styles.botao}>{props.button}</button>
                    
                </div>
            </div>

        </div>
        
        
    );
}

export default Content;