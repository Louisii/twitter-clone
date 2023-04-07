import Tweet from "../components/Tweet"
import Menu from "../components/Menu"

const Home = (props) => {

    return (
        <>
            <div className="md:mx-10">
                <div className="grid md:grid-cols-6">
                    <div className="col-span-1 p-2 pt-0">
                        <Menu />
                    </div>
                    <div className="col-span-3 p-2 pt-0">
                        <Tweet userName="Lou" user="@louisimtd" postingTime="6h" content="estou pronto para essa semana de 3 dias úteis" />
                        <Tweet userName="Lou" user="@louisimtd" postingTime="8h" content="ha 5 minutos faltavam 9 minutos pro ônibus passar e agora, depois de esperar 5 minutos, ele está a 12 min de distância 🥰🥰 amo o floripanopinto" />
                        <Tweet userName="Lou" user="@louisimtd" postingTime="6h" content="moça não me julgue eu n consigo fazer o mov abdominal mais amplo sem me cagar 🤭" />
                        <Tweet userName="Lou" user="@louisimtd" postingTime="6h" content="dai o cara parece o brad pitt pessoalmente e quando vc entra no insta so tem foto horrivel igual de pai" />
                    </div>
                    <div className="col-span-2">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home