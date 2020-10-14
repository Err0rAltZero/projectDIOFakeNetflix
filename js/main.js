var aux=0;
function cColor(){
    if(aux==0){
        document.documentElement.style.setProperty('--vermelho', '#00a8e1');
        document.documentElement.style.setProperty('--preta', '#000');
        document.getElementById('h2id').textContent="NEPRIME";
        aux=1;
        return
    }
    else{
        document.documentElement.style.setProperty('--vermelho', '#E50914');
        document.documentElement.style.setProperty('--preta', '#141414');
        document.getElementById('h2id').textContent="FAKFLIX";
        aux=0;
        return
    }
}