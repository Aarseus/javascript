let image_array=['a.jpeg','b.jpeg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg']
let array_length=image_array.length
let i=0
let set=setInterval(slider_func,4000)
//slider_function -> function call
//5000-> 5seconds
//callback fucntion doesnt need paranthesis

function slider_func(){
    i++
    i=i%array_length
    // remainder ko concept ma janxa ,
    // i=0   0%7=0
    // i=1   1%7=1
    // ...
    // i=7   7%7=0

    document.querySelector('img').src=`images/${image_array[i]}`
}
function prev(){
   if(i!=0)
    {
    i--
    document.querySelector('img').src=`images/${image_array[i]}`
    }
    else{
        i=array_length-1
        document.querySelector('img').src=`images/${image_array[i]}`
    }
    

}
function next(){
    i++
    i=i%array_length
    // remainder ko concept ma janxa ,
    // i=0   0%7=0
    // i=1   1%7=1
    // ...
    // i=7   7%7=0

    document.querySelector('img').src=`images/${image_array[i]}`
   
}


