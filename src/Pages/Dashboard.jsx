import { DashboardBanner } from "../Components/DashboardBanner/Banner";
import { DashboardPage } from "../Components/DashboardPage/Dashboard";
import { Footer } from "../Components/Footer/Footer";
import { Quartos } from "../Components/QuartosHome/Quartos";

export function Dashboard(){
    return ( 
           
        <main>
           <DashboardPage />
           <Quartos />
           <DashboardBanner />
           <Footer />
        </main>
    )
}