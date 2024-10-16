import SingleRecipe from "../../components/SingleRecipe/SingleRecipe"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <nav> <div className="nav-left"><h1>CodeWithMudi"Recipes</h1></div>

                <div className="nav-right">
                    <button>Login</button>
                    <button>Register</button>
                </div>

            </nav>
            <main>
                <div className="main-first">

                    <button className="btn">Add new Recipe</button>
                </div>
                <div className="main-content">
                    <div className="content-left">
                        <div className="content-left-one">
                            <h1>Filters</h1>
                            <label htmlFor="search">Seach</label>
                            <input type="text" id="search" />

                        </div>
                        <div className="content-left-two">
                            <h1>Category</h1>
                            <select>
                                <option value={"All"}>All</option>
                                <option value={"Technology"}>Technology</option>
                                <option value={"Travel"}>Travel</option>
                            </select>

                        </div>
                        <div className="content-left-three">
                            <h1>Choose Dificulfty</h1>
                            <div>
                               <input type="checkbox" id="easy" />
                               <label htmlFor="easy" >easy</label >
                            </div>
                            <div>
                               <input type="checkbox"  id="medium" />
                               <label htmlFor="medium" >medium</label >
                            </div>
                            <div>
                               <input type="checkbox" id="hard" />
                               <label  htmlFor="hard">hard</label >
                            </div>

                        </div>
                    </div>
                    <div className="content-right">
                        <SingleRecipe/>
                        <SingleRecipe/>
                        <SingleRecipe/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home