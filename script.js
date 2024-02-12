var xo=[];

for(var i=0; i<=16; i++){
    xo.push(document.getElementById('x-or-o'+i));
}

function setText(i){
    if((document.getElementById('x').checked))
    xo[i].append("X");
else if((document.getElementById('o').checked))
    xo[i].append("O");
}