import Heading from "../components/heading/heading";
import MainLayot from "../components/layot/mainLayot";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <MainLayot>
            <main className="container">
                <Heading>Страница не найдена.
                    <Link href='/cooperation'> Перейти на страницу Сотрудничество</Link>
                </Heading>
            </main>
        </MainLayot>
    );
};

export default ErrorPage;