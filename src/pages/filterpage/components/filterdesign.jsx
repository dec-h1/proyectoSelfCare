import "./filterpage.css";

function FilterDesign  ()  {
    return (
      <section className="container-filter">
        
        <h2 className="text-center text-xl font-bold">Filtros</h2>
        <form className="form-filter">
         
          <h3 className="text-2xl pb-5 font-bold">Personalizado</h3>
          <div className="container-options-filter">
            <div className="flex justify-between">
            <label for="customRange1" class="form-label">
              Calorías
            </label>
            <input type="range" class="form-range" id="customRange1" />
            </div>
            <div className="flex justify-between">
            <label for="customRange1" class="form-label">
              Proteínas
            </label>
            <input type="range" class="form-range" id="customRange1" />
            </div>
            <div className="flex justify-between">
            <label for="customRange1" class="form-label">
              Carbohidratos
            </label>
            <input type="range" class="form-range" id="customRange1" />
            </div>
            <div className="flex justify-between">
            <label for="customRange1" class="form-label">
              Grasas
            </label>
            <input type="range" class="form-range" id="customRange1" />
            </div>
          </div>
  
          <div className="container-options-filter">
          <h3 className="text-2xl pb-5 font-bold">Comidas</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
              Desayuno
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
               
              />
              <label class="form-check-label" for="flexCheckChecked">
                Almuerzo
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                
              />
              <label class="form-check-label" for="flexCheckChecked">
                Cena
              </label>
            </div>
          </div>
  
          <div className="container-options-filter">
              <h3 className="text-2xl pb-5 font-bold">Tiempo</h3>
              <div className="flex justify-between">
              <label for="customRange1" class="form-label">
              Tiempo
            </label>
            <input type="range" class="form-range" id="customRange1" />
            </div>
          </div>
  
          <div className="container-options-filter">
          <h3 className="text-2xl pb-5 font-bold">Dificultad</h3>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
              Fácil
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
             
              />
              <label class="form-check-label" for="flexCheckChecked">
                Media
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
             
              />
              <label class="form-check-label" for="flexCheckChecked">
                Difícil
              </label>
            </div>
          </div>
  
          <button className="bg-primary rounded-xl border-primary text-white w-full h-12 font-bold hover:bg-primary hover:border-primary hover:text-black">
            Aplicar
            </button>
  
        </form>
      </section>
    );
  };
  
  export { FilterDesign };