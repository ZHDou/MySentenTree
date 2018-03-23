
d3.tsv("demo.tsv",function(error,tsvdata){  
    console.log(tsvdata);  
    var str = d3.tsv.format( tsvdata );           
    console.log(str.length);  
    console.log(str);     
});  