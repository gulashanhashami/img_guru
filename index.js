var contain=document.getElementById("contain1");
    // contain.setAttribute("id","contain");
    // document.querySelector("body").append(contain);
    async function dishes(){
        try{
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let data=await response.json();
        // console.log(data)
        displaydish(data.meals)
        }
        catch(err){
            console.log("err",err);
        }
    }
    dishes()

    async function sdishes(){
        var Sname=document.getElementById("search").value;
        // console.log(Sname)
        try{
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Sname}`)
        let data=await response.json();
        // console.log(data)
        displaydish(data.meals)
        }
        catch(err){
            console.log("err",err);
        }
    }

    function displaydish(data){
        contain.innerHTML="";
        data.map(function(elem){
            let div=document.createElement("div");
        div.setAttribute("id","divg");
        let p=document.createElement("p");
        let img=document.createElement("img");
        img.setAttribute("id","img1");
        img.src=elem.strMealThumb;
        p.innerText=elem.strMeal;
        div.append(img,p); 
        contain.append(div); 
        })
    }