
function Image_component(props){
    const images = ["Images/img1.png","Images/img2.png","Images/img3.png","Images/img4.png","Images/img5.png","Images/img6.png","Images/img7.png","Images/img8.png","Images/img9.png","Images/img10.png"]
    const value = props.val;
    
    return( 
        <>
        <img src={images[Math.floor((Math.random() * 10))]} style={{width:70,height:70,border:"2px solid black"}} onClick={() => count(img)}></img>
        </>
        
    )
}



ReactDOM.render(
     <div className="mt-3 col-md-8 container-fluid">
     {Array(70).fill(<Image_component val={Math.floor((Math.random() * 10))} />) }
     </div>
,document.querySelector("#root"));
