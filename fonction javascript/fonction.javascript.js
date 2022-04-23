function factoriel(){
    var n = parseInt(document.form.input.value);
    for(var i = n-1; i >= 1; i=i-1){
        n= n*i;
        document.form.answer.value=n;
    }
}