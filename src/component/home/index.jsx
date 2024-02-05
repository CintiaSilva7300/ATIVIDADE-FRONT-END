import imgMysql from "../../assets/img/mysql.png";
import imgJava from "../../assets/img/java.png";
import imgGitHub from "../../assets/img/github.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contato">Fale conosco</Link>
          </li>
        </ul>
      </div>

      <div>
        <h1>Cintia Silva</h1>
        <h2>Sobre mim</h2>

        <p>
          Oooo! dangly balls! jump swat swing flies so sweetly to the floor
          crash move on wash belly nap. Cat fur is the new black . Chase mice.
          Paw your face to wake you up in the morning hunt anything that moves,
          so push your water glass on the floor yowling nonstop the whole night
          eat all the power cords yet whenever a door is opened, rush in before
          the human sit in a box for hours. Scratch the postman wake up lick paw
          wake up owner meow meow slap owners face at 5am until human fills food
          dish for snob you for another person, slap the dog because cats rule
          chew masters slippers.
        </p>

        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anyFFFFFFthing embarrassing hidden in the middle of text.
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>

        <hr />
      </div>

      <div>
        <h2>Tecnologias que conheço</h2>
        <a href="https://docs.github.com/pt" target="_blank" rel="noreferrer">
          <img
            src={imgGitHub}
            alt="logo github"
            width="50"
            height="50"
            title="github"
          />
        </a>
        <a
          href="https://docs.oracle.com/en/java/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imgJava}
            alt="logo java"
            width="50"
            height="50"
            title="java"
          />
        </a>
        <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">
          <img
            src={imgMysql}
            alt="logo mysql"
            width="50"
            height="50"
            title="mysql"
          />
        </a>
      </div>
    </>
  );
}

export default Home;
