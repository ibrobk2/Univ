let univ = {
    getData :function (country) {fetch("http://universities.hipolabs.com/search?country="+country)
    .then((resp)=>resp.json())
    .then((data)=>this.displayUniv(data))
},

    displayUniv : function (data) {
       
         for(let i=0; i<data.length; i++){
            let x = data[i];
            document.querySelector('.result').innerHTML = x.name;
            document.querySelector('p').innerText = x.web_pages;
            
            } 



    
        

}



}