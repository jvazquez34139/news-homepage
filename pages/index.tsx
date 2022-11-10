import Main from "../components/content/Main"
import OtherNews from "../components/content/OtherNews"
import Articles from "../components/content/Articles"

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <Main />
        <OtherNews />
      </div>
      <Articles />
    </>
  )
}

//work on interactive elements next!11/10/2022