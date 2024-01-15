import { tourData } from "../../data/tour-data";

const Tours = () => {
    return <section className="section" id="tours">
        <div class="section-title">
            <h2>featured <span>tours</span></h2>
        </div>
        <div class="section-center featured-center">
            {tourData?.map((ob =>
                <article class="tour-card">
                    <div class="tour-img-container">
                        <img src={ob?.img} class="tour-img" alt="" />
                        <p class="tour-date">{ob?.date}</p>
                    </div>
                    <div class="tour-info">
                        <div class="tour-title">
                            <h4>{ob?.tourTitle}</h4>
                        </div>
                        <p>
                            {ob?.tourText}
                        </p>
                        <div class="tour-footer">
                            <p>
                                <span><i class="fas fa-map"></i></span> china
                            </p>
                            <p>{ob?.tourDuration}</p>
                            <p>{ob?.tourCharges}</p>
                        </div>
                    </div>
                </article>))}
        </div>
    </section>
}
export default Tours;