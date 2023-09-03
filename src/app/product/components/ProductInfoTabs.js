import styles from './styles/infotabs.module.css';
function ProductInfoTabs() {
    return (
        <div className={styles.tabcontainer}>
            <div className={styles.taboptions}>
                <div className={`${styles.tab} ${styles.active}`}><p> Description </p></div>
                <div className={styles.tab}><p>  Reviews (1)  </p></div>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus eos nihil ad consequatur cum adipisci. Eum, sint quae? Accusamus laborum tenetur itaque beatae, voluptas tempore molestiae corporis libero dolorum?</p>
                <br /> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus eos nihil ad consequatur cum adipisci. Eum, sint quae? Accusamus laborum tenetur itaque beatae, voluptas tempore molestiae corporis libero dolorum?</p>
                <br /> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores animi ullam vero dolor, libero nobis dolorem perferendis itaque quis possimus quam illum iusto. Aperiam commodi modi mollitia quam magni, voluptatem necessitatibus, quod, culpa numquam veniam illum aspernatur perspiciatis aut temporibus fuga! Incidunt maiores accusantium, quas impedit tempora, magni minus natus quis vitae delectus consequatur sint ullam? Commodi repudiandae magnam, quaerat ipsam itaque quasi dignissimos facere accusantium id corporis dolor possimus perferendis inventore veritatis quam soluta illo necessitatibus incidunt neque! Animi debitis sit libero aliquam saepe quo asperiores possimus repellat corrupti perspiciatis modi qui nemo repudiandae, nisi ullam id. Asperiores pariatur in eum quisquam labore doloremque ad maxime quis? Officiis possimus aut, ad quo eos modi dicta delectus tempore ut ipsa in natus at? Earum laborum molestiae maiores, soluta at blanditiis quisquam repellat natus ullam numquam magni tempora temporibus reprehenderit neque, amet minus consequatur quo quae saepe! Qui repudiandae maiores amet vero porro non optio reiciendis similique excepturi! Molestiae exercitationem quo mollitia ea necessitatibus ex similique modi, facilis inventore illum et sed expedita? Voluptatibus doloribus consectetur quo atque aspernatur facilis autem vitae dicta, cumque fuga fugiat possimus laborum optio molestias, corporis quasi ullam hic id, voluptatum commodi. Excepturi sint porro consequatur.</p>
            </div >
        </div >
    )
}
export default ProductInfoTabs