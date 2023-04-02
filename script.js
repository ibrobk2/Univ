let univ = {
        getUniv : function(country){
        fetch("http://universities.hipolabs.com/search?country="+country)
        .then((response) => response.json())
        .then((result) => console.log(result));
    },
    displayUniv : function(result){

    },
}

document.querySelector('.search-btn button').addEventListener('click', function(){
    var x = document.querySelector('.search-input').value;
    univ.getUniv(x);
});