import Main from "../components/content/Main"
import OtherNews from "../components/content/OtherNews"
import Articles from "../components/content/Articles"

export default function Home() {
  return (
    <>
      <div className="flex">
        <Main />
        <OtherNews />
      </div>
      <Articles />
    </>
  )
}
