import "./Body.css"

import { Link } from "react-router-dom";


export function BodySobre() {
    return (
        <section>
            <div className="historia">
                <div className="text">
                    <p>Bem-vindo ao Moon Hotel, onde cada estadia é uma jornada celestial de conforto e luxo. Desde a nossa inauguração (1950), temos orgulhosamente oferecido uma experiência única de hospedagem que combina elegância, hospitalidade e serviço excepcional. <br /> <br />
                    Localizado em um cenário deslumbrante, nosso hotel é um oásis de tranquilidade e sofisticação, perfeito para os viajantes mais exigentes. Seja você um turista em busca de aventuras emocionantes ou um viajante de negócios procurando por comodidades de primeira classe, o Moon Hotel é o seu destino ideal. <br /> <br />
                    Nossas instalações foram meticulosamente projetadas para atender a todas as suas necessidades, desde quartos espaçosos e elegantemente decorados até restaurantes de renome internacional, spas relaxantes e instalações para reuniões e eventos de alto padrão. <br /><br />
                    Além disso, nossa equipe dedicada está sempre à disposição para garantir que sua estadia seja verdadeiramente memorável. Do momento do check-in ao check-out, estamos comprometidos em superar suas expectativas e tornar sua experiência conosco inesquecível. <br /><br />
                    No Moon Hotel, não apenas oferecemos acomodações de classe mundial, mas também criamos um ambiente onde você pode escapar da rotina e se reconectar consigo mesmo. Desfrute de vistas panorâmicas deslumbrantes, relaxe em nossos espaços elegantes e deixe-se envolver pela magia que permeia cada canto de nosso estabelecimento. <br /><br />
                    Se você está procurando uma escapada romântica, uma viagem em família ou uma estadia de negócios produtiva, o Moon Hotel é a escolha perfeita para você. Venha nos visitar e descubra por que somos reconhecidos como um dos destinos mais exclusivos do mundo da hospitalidade! Sua jornada celestial aguarda no Moon Hotel.</p>
                </div>

                <div>
                <Link to='/login' className="caminho">RESERVE AQUI</Link>
                </div>
            </div>
        </section>
    )
}