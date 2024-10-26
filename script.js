

const images = ["Images/img1.png","Images/img2.png","Images/img3.png","Images/img4.png","Images/img5.png","Images/img6.png","Images/img7.png","Images/img8.png","Images/img9.png","Images/img10.png"];
const clicked_images = {};
function count(e){
    e.target.style.opacity = "0.3";
    const arr = [];
    let key = images.indexOf(e.target.getAttribute('src'));
    if(key in clicked_images){
        clicked_images[key].push(e.target.id);
        if(clicked_images[key].length == 3){
            let del = clicked_images[key];
            for(let i=0;i<=del.length-1;i++){
               document.getElementById(del[i]).remove();
            }
            clicked_images[key] = [];
        }
        
    }
    else{
        clicked_images[key] = arr;
        arr.push(e.target.id);
    }
}

function makeid() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function Image_component(props){
    return( 
        <>
        <img src={images[Math.floor((Math.random() * 9))]} className="p-2" style={{width:70,height:70,border:"3px solid black"}} onClick={count} id={makeid()} ></img>
        </>
        
    )
}



ReactDOM.render(
    <>
    <h1 className="text-center text-white font-weight-bold text-shadow p-3" style={{backgroundColor:"orangered"}}>Halloween Puzzle</h1>
    <p className="text-center text-uppercase fs-3 mt-5"><span className="bg-warning p-3" style={{border:"4px solid black"}}>Select 3 same images to solve the puzzle!!</span></p>
    <div className="row" style={{margin:"4.5% auto"}}>
     <div className="col-md-5 container-fluid col-md-offset-3">
     {Array(56).fill(<Image_component  />) }
     </div>
     </div>  
     </>

,document.querySelector("#root"));
