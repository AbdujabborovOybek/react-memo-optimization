import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./navbar";

function App() {
  console.log("App rendered");
  const [open, setOpen] = useState(false);
  const [lan, setLan] = useState("Uz");
  const closeRef = useRef(null);

  console.log();

  useEffect(() => {
    const closeModal = (e) => {
      if (!closeRef?.current?.contains(e.target)) return setOpen(false);
    };

    // Add event listeners
    document.addEventListener("mousedown", closeModal);

    // Remove event listeners
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return (
    <div className="App">
      <Navbar lan={lan} />

      <select onChange={(e) => setLan(e.target.value)}>
        <option value="Uz">Uz</option>
        <option value="Ru">Ru</option>
        <option value="En">En</option>
      </select>

      <button className="btn" onClick={() => setOpen(true)}>
        Login
      </button>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        molestiae repellat iure aut recusandae. Voluptatibus dolores quibusdam
        nihil voluptates. Optio aliquam doloremque, accusantium in perspiciatis
        dolores soluta! Distinctio laudantium esse nemo illum officiis ipsa ab
        perferendis soluta, provident fugit est laboriosam maxime. Praesentium
        dolores ea quibusdam porro numquam id, sint expedita debitis autem?
        Adipisci, nemo! Veritatis maxime aperiam accusantium eius itaque? Ut,
        nihil aliquam odio soluta error cum. Omnis repellat porro vel ipsam
        officiis natus cumque! Delectus officiis nam consequatur deserunt, aut
        architecto. Animi enim laborum ut eos ad temporibus illum, commodi quod
        voluptatem illo cumque. Quidem blanditiis, rerum libero odio harum cum
        maxime, facere sapiente ex suscipit neque, eius excepturi nam deserunt
        facilis! Sint exercitationem deleniti asperiores dolor reiciendis
        sapiente, saepe facilis et recusandae necessitatibus dolore eveniet ea
        similique quaerat, ullam sunt modi provident! Sit, velit atque facere
        dolore nesciunt magnam libero? Quas fuga dolorum saepe rerum dignissimos
        voluptatibus mollitia minima optio! Ullam, rem! Itaque sint eaque,
        corrupti, repellat nihil voluptates ea consectetur, fugit excepturi sit
        exercitationem expedita? Laborum harum nihil, quaerat non illum libero
        sapiente. Porro ullam libero repudiandae magnam enim aperiam quo alias
        corrupti in, a tempora distinctio maxime, repellat eos. Enim, esse
        maiores culpa laboriosam sapiente, amet dolorem est qui, blanditiis
        magni labore quae assumenda? Necessitatibus optio ut neque repellendus
        quo veniam vel doloribus, beatae, molestias, impedit ullam sequi
        perferendis consequatur aut. Quis necessitatibus dignissimos commodi quo
        accusantium illum vel fugit quae cumque totam, nobis architecto libero
        sequi odit saepe soluta voluptatem perferendis unde consectetur earum,
        nihil laudantium quisquam? Sunt voluptate quam quidem facere ea
        architecto cupiditate quis deleniti consectetur quos sequi natus
        blanditiis vitae culpa alias asperiores similique doloribus nemo,
        maiores tenetur ab, inventore mollitia, eveniet nulla! Culpa
        voluptatibus magni debitis voluptates aspernatur et a sunt nemo
        dignissimos sed qui blanditiis nihil, mollitia deserunt facere velit
        reiciendis id placeat incidunt ratione? Quisquam quam similique placeat
        deserunt omnis quos dolorum, nam sunt ex accusantium, voluptates
        reiciendis eligendi repudiandae saepe dignissimos quidem ab, totam cum
        enim est id magni consequuntur earum. Eaque optio fugiat beatae rem
        illum sed deleniti quasi itaque vel numquam nesciunt, officia, debitis,
        tenetur architecto aspernatur possimus expedita facere necessitatibus
        eveniet corrupti! Quas quia blanditiis itaque dolores rerum, omnis atque
        maiores quam? Provident modi beatae, ab id cum nam dicta sint voluptatum
        ex explicabo. Facilis earum ab itaque rerum. Officia eius voluptate
        saepe sed explicabo aliquid aspernatur. Earum dignissimos molestias
        voluptate tenetur corporis aut beatae neque voluptatum ex! Illo, quos
        iure. Delectus id eum ut deleniti placeat est, quas minima mollitia
        nostrum quasi ullam blanditiis, qui iure enim ipsum non adipisci
        assumenda. Cupiditate ipsum nihil ut consequatur quod. Repudiandae
        incidunt facere ratione? Accusamus laborum, quas repellendus eum dicta
        error odio tempore! Modi ducimus, suscipit veritatis dolores officia
        labore, porro iusto voluptate fuga eum voluptatibus deserunt possimus
        unde nesciunt officiis esse. Molestiae autem consequatur corporis quos
        quam ducimus, sed recusandae? Repellendus sint doloribus doloremque ea,
        omnis provident pariatur animi hic qui odit neque saepe non aliquam
        voluptate excepturi? Eveniet, nostrum. Beatae vitae cupiditate esse eos
        nisi id culpa sapiente, sit dicta. Perspiciatis quod accusamus provident
        cupiditate rem, blanditiis dolorem voluptatum animi voluptates doloribus
        omnis nisi non tenetur ipsum dicta eos, architecto ab! Sit magnam error
        eaque delectus rem eius numquam, vitae ut, amet quas possimus
        accusantium necessitatibus nulla voluptatibus! Quibusdam atque
        voluptates corrupti minima nam, libero earum corporis dolorum maiores
        debitis id cumque dolorem tempora illo nostrum totam fugiat? Recusandae
        magni earum possimus non obcaecati autem ut libero. Nisi laboriosam
        ipsum fuga ea deserunt quos blanditiis saepe, esse libero architecto
        voluptatem, incidunt pariatur magnam. Ipsum, iste. Consectetur nesciunt
        sequi minima odit. In, doloremque! Illo quis laborum recusandae ab quasi
        corporis qui unde ipsum culpa sapiente explicabo porro dolore
        voluptatem, magnam consectetur asperiores esse adipisci quae iusto
        voluptate totam in deserunt ullam quo. Culpa, velit unde nulla maxime
        ullam expedita. Ea consequuntur, labore autem quisquam voluptas dolorem
        quaerat unde maiores libero illo impedit placeat deleniti a fugiat
        numquam? A accusamus, laboriosam tempora commodi perspiciatis repellat
        quod doloribus, delectus velit harum officiis? Cum sapiente ratione qui
        aut, eveniet asperiores voluptates beatae unde repellendus quod vitae
        dolorem reprehenderit. Quo quas magni reprehenderit, vitae, nulla ad
        harum adipisci rerum odio cum id fugiat, tempora officiis soluta
        perferendis ducimus! Minima recusandae aut incidunt reprehenderit
        officia ipsam cumque fuga, iste accusantium dolorum. At animi
        consequuntur exercitationem. In incidunt nesciunt corrupti aliquid modi
        enim. Beatae nulla facere, iste minima nam a doloremque optio
        consequuntur reprehenderit velit vero maiores dolor laborum quam illo
        corrupti vitae debitis. Illo corrupti, aut enim quibusdam doloremque
        nemo sit aperiam minima eius dicta deserunt accusamus fugit laboriosam
        maxime, ratione atque eum nostrum aliquam sapiente in quasi earum natus?
        Possimus repudiandae inventore reprehenderit, quasi nesciunt repellendus
        provident, harum deleniti temporibus sit minus, qui est suscipit porro
        ipsa cupiditate voluptates rem vel expedita magnam praesentium
        quibusdam! Expedita neque voluptas labore assumenda commodi quia
        officiis a aliquam inventore iure quas cumque debitis voluptate error
        ducimus consequuntur facilis laborum minima ipsa reprehenderit, maxime
        adipisci totam modi voluptates! Vero explicabo dolore veritatis sunt,
        alias, deserunt dignissimos inventore dolorum doloribus soluta
        voluptatum obcaecati dolores aut nisi, ipsa aliquam sint! Quidem quis
        repellendus aliquam cumque minima natus maiores numquam. Accusantium
        pariatur modi sed beatae ipsum, optio, repudiandae perferendis aperiam,
        amet ab sequi enim! Sed unde nostrum perspiciatis cum, quis fuga eum.
        Veniam, omnis, nihil quis, nisi ipsum odit eaque quae iste sint ipsam
        consectetur nemo facere? Sint laborum voluptates ex excepturi harum
        dolor odio aliquid aperiam, sit facere reprehenderit quas quisquam
        accusantium ratione eum. Perspiciatis amet eligendi rem nobis ut impedit
        ratione id magnam laborum deleniti architecto odit sed sunt, ipsam
        officiis, in deserunt vitae. Ullam aliquam voluptas ex! Quos odit
        architecto aperiam. Iusto, repudiandae fuga. Tenetur est dolorem
        distinctio eos pariatur deserunt repudiandae adipisci? Libero, autem
        nihil veritatis deleniti iusto eveniet, aut culpa fugiat odio ex illum
        esse similique impedit repudiandae! Sunt vitae ullam dolore quibusdam.
        Minus, nesciunt. Dolores voluptatum architecto mollitia assumenda
        asperiores atque, corrupti, fuga molestias vero id repellat eos a odio
        aut voluptate consequatur cumque adipisci temporibus ipsam tempora.
        Officiis beatae recusandae quasi ex quos, alias unde nostrum accusantium
        doloremque velit iusto illum quaerat sunt, repudiandae eum eos cum omnis
        architecto laudantium, non temporibus? Nam, pariatur animi? Dolore, nisi
        a. Aut voluptatibus, ea cumque dignissimos nostrum atque vel eum, nulla
        mollitia fugit dolore asperiores sint, inventore libero quisquam
        debitis. Odit eaque voluptatum animi quas veritatis corporis autem
        aliquam amet voluptates libero rerum sunt debitis, in vel reiciendis sed
        adipisci? Vel magnam inventore eos delectus! Quae eum molestiae debitis,
        eligendi accusamus ut. Ab, officia. Inventore asperiores eius fugit at
        est quasi ab suscipit vitae numquam ad, mollitia, nulla eligendi
        excepturi veritatis hic dolorum pariatur. Ea illo laborum possimus ipsa
        maiores. Obcaecati asperiores provident, dignissimos corporis sint qui
        ad consequuntur omnis aliquam, expedita, harum quia ducimus dolore
        temporibus commodi hic voluptate in iusto! Ratione a harum, fugit illo
        explicabo obcaecati alias ullam deleniti dolorem autem reiciendis
        laboriosam maiores sapiente odio, ad est nostrum, dolorum sed natus vel
        ipsam. Obcaecati blanditiis quia id enim, impedit vel necessitatibus
        aperiam nam minus eligendi. Fugit, voluptatum. Sapiente repellendus
        ipsam voluptas sunt quos consequatur architecto esse at, non, sint,
        cupiditate perspiciatis! Libero labore commodi qui, velit provident
        autem illo, nesciunt cupiditate magni distinctio rem incidunt
        accusantium fugiat odit!
      </p>

      <div className={"modal " + (open ? "active" : "")}>
        <form className={"login " + (open ? "active" : "")} ref={closeRef}>
          <div className="login_header">
            <h3>Login</h3>
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <input type="text" name="" id="" />
        </form>
      </div>
    </div>
  );
}

export default App;
