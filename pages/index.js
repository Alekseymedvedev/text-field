import MainLayot from "../components/layot/mainLayot";
import Heading from "../components/heading/heading";
import Link from "next/link";

export default function Home() {
    return (
        <MainLayot>
            <main className="container">
                <Heading>Главная страница.
                    <Link href='/cooperation'> Перейти на страницу Сотрудничество</Link>
                </Heading>
            </main>
        </MainLayot>
    )
}
