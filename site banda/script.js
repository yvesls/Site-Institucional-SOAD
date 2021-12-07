// navegação para md
function verificaTam(){
    if(window.innerWidth >= 768){
        document.getElementById('navegacao-md').style.display = 'none';
        document.getElementById('navegacao-normal').style.display = 'block';
        
    }
    else{
        document.getElementById('navegacao-md').style.display = 'block';
        document.getElementById('navegacao-normal').style.display = 'none';
    }
}


const button = document.querySelectorAll('button');

for(var i = 0; i < button.length; i++){
    button[0].addEventListener('click', navegacaoMd);
}

// criando elementos da nav-md
function criaElementos(){
    let ul = document.createElement('ul');
    let idUl = document.createAttribute("id");
    ul.setAttributeNode(idUl);
    idUl.value = "nav-formatacao";

    // criando li não dinamicamente hehe
    let li1 = document.createElement('li'); let li2 = document.createElement('li'); let li3 = document.createElement('li');
    let li4 = document.createElement('li'); let li5 = document.createElement('li'); let li6 = document.createElement('li'); let li7 = document.createElement('li');
    
    ul.appendChild(li1); ul.appendChild(li2); ul.appendChild(li3); ul.appendChild(li4);
    ul.appendChild(li5); ul.appendChild(li6); ul.appendChild(li7);
    

    // criando nav não dinamicamente 
    let a1 = document.createElement('a'); let atr1 = document.createAttribute("class"); let href1 = document.createAttribute("href"); 
    atr1.value = "links text-oliver"; a1.setAttributeNode(atr1); a1.setAttributeNode(href1); href1.value = '#home';
    let a2 = document.createElement('a'); let atr2 = document.createAttribute("class"); let href2 = document.createAttribute("href"); 
    atr2.value = "links text-oliver"; a2.setAttributeNode(atr2); a2.setAttributeNode(href2); href2.value = '#sobre';
    let a3 = document.createElement('a'); let atr3 = document.createAttribute("class"); let href3 = document.createAttribute("href");
    atr3.value = "links text-oliver"; a3.setAttributeNode(atr3); a3.setAttributeNode(href3); href3.value = '#agenda';
    let a4 = document.createElement('a'); let atr4 = document.createAttribute("class"); let href4 = document.createAttribute("href");
    atr4.value = "links text-oliver"; a4.setAttributeNode(atr4); a4.setAttributeNode(href4); href4.value = '#height';
    let a5 = document.createElement('a'); let atr5 = document.createAttribute("class"); let href5 = document.createAttribute("href");
    atr5.value = "links text-oliver"; a5.setAttributeNode(atr5); a5.setAttributeNode(href5); href5.value = '#musica';
    let a6 = document.createElement('a'); let atr6 = document.createAttribute("class"); let href6 = document.createAttribute("href");
    atr6.value = "links text-oliver"; a6.setAttributeNode(atr6); a6.setAttributeNode(href6); href6.value = '#produtos';
    let a7 = document.createElement('a'); let atr7 = document.createAttribute("class"); let href7 = document.createAttribute("href");
    atr7.value = "links text-oliver"; a7.setAttributeNode(atr7); a7.setAttributeNode(href7); href7.value = '#contatos';

    li1.appendChild(a1); li2.appendChild(a2); li3.appendChild(a3); li4.appendChild(a4); li5.appendChild(a5);
    li6.appendChild(a6); li7.appendChild(a7);

    a1.innerHTML = 'HOME';
    a2.innerHTML = 'SOBRE A BANDA';
    a3.innerHTML = 'AGENDA';
    a4.innerHTML = 'FOTOS';
    a5.innerHTML = 'MÚSICA';
    a6.innerHTML = 'PRODUTOS';
    a7.innerHTML = 'CONTATOS';
    
    console.log(ul);
    return ul;
}

let x = 0;
function navegacaoMd(){
    if(x == 0){
        let nav = document.getElementById('nav');
        let button = document.getElementById('button');
        let janela = document.createElement('DIV');
        let idJanela = document.createAttribute("id");
        janela.setAttributeNode(idJanela);
        idJanela.value = "fecha";
        // janela
        console.log(janela);
        janela.style.width = '80%';
        janela.style.height = 'auto';
        janela.style.margin = '0';
        janela.style.paddingTop = '1.5%';
        // janela.style.padding = '2%';
        //janela.style.border = '1px solid black';
        janela.style.position = 'absolute';
        janela.style.border = '1px solid #111806';
        janela.style.top = '8%';
        janela.style.left = '7%';
        janela.style.borderRadius = '0.5%';
        janela.style.backgroundImage = 'linear-gradient(to top, #172008, #19220a, #1b240b, #1d270d, #1f290e)';
        document.getElementById('navegacao').appendChild(janela);
        document.getElementById('navegacao').style.display = 'block';
        // janela - fim
        
        janela.appendChild(criaElementos());
        
        x = 1;
    }else if(x == 1){
        document.getElementById('navegacao').style.display = 'none';
        x = 0;
    }
}

const divs = document.querySelectorAll('div');

divs[0].addEventListener('click', fechaJanela);
        
function fechaJanela(){
    document.getElementById('navegacao').style.display = 'none';
    x = 0;
}

function click1(){
    let restauraTamanho = document.getElementById("height");
    restauraTamanho.style.height = "auto";
    restauraTamanho.style.transition = "height 1s";
    restauraTamanho.style.marginBottom = "50px";
    let shad1 = document.getElementById("f1");
    let shad2 = document.getElementById("f2");
    let shad3 = document.getElementById("f3");
    let shad4 = document.getElementById("f4");
    shad1.style.boxShadow = "none";
    shad2.style.boxShadow = "none";
    shad3.style.boxShadow = "none";
    shad4.style.boxShadow = "none";

    let button1 = document.getElementById("mais");
    let button2 = document.getElementById("menos");
    button1.style.top = "90%";
    button2.style.top = "90%";
    
    if (window.innerWidth < 1200 && window.innerWidth > 992){
        button1.style.top = "375px";
        button2.style.top = "375px";
    }else if (window.innerWidth < 992 && window.innerWidth > 576){
        button1.style.top = "95%";
        button2.style.top = "95%";
    }
}

function click2(){
    let restauraTamanho = document.getElementById("height");
    restauraTamanho.style.height = "400px";
    restauraTamanho.style.transition = "height 1s";
    restauraTamanho.style.marginBottom = "0px";
    let shad1 = document.getElementById("f1");
    let shad2 = document.getElementById("f2");
    let shad3 = document.getElementById("f3");
    let shad4 = document.getElementById("f4");
    shad1.style.boxShadow = "0px 80px 150px black";
    shad2.style.boxShadow = "0px 80px 150px black";
    shad3.style.boxShadow = "0px 80px 150px black";
    shad4.style.boxShadow = "0px 80px 150px black";
    let button1 = document.getElementById("mais");
    let button2 = document.getElementById("menos");
    button1.style.top = "360px";
    button2.style.top = "360px";
    
    if (window.innerWidth < 1200){
        button1.style.top = "360px";
        button2.style.top = "360px";
    }else if (window.innerWidth < 992){
        button1.style.top = "360px";
        button2.style.top = "360px";
    }
}

function audio(value){
    if(value == 1){
        document.getElementById("alb1-m1").play();
        document.getElementById("buttom-play1").style.display = 'none';
        document.getElementById("buttom-load1").style.display = 'inline-block';
        document.getElementById("text-oliver1").style.textDecoration = 'underline';
    }
    else if(value == 2){
        document.getElementById("alb1-m2").play();
        document.getElementById("buttom-play2").style.display = 'none';
        document.getElementById("buttom-load2").style.display = 'inline-block';
        document.getElementById("text-oliver2").style.textDecoration = 'underline';
    }
    else if(value == 3){
        document.getElementById("alb1-m3").play();
        document.getElementById("buttom-play3").style.display = 'none';
        document.getElementById("buttom-load3").style.display = 'inline-block';
        document.getElementById("text-oliver3").style.textDecoration = 'underline';
    }
    else if(value == 4){
        document.getElementById("alb1-m4").play();
        document.getElementById("buttom-play4").style.display = 'none';
        document.getElementById("buttom-load4").style.display = 'inline-block';
        document.getElementById("text-oliver4").style.textDecoration = 'underline';
    }
    else if(value == 5){
        document.getElementById("alb2-m1").play();
        document.getElementById("buttom-play5").style.display = 'none';
        document.getElementById("buttom-load5").style.display = 'inline-block';
        document.getElementById("text-oliver5").style.textDecoration = 'underline';
    }
    else if(value == 6){
        document.getElementById("alb2-m2").play();
        document.getElementById("buttom-play6").style.display = 'none';
        document.getElementById("buttom-load6").style.display = 'inline-block';
        document.getElementById("text-oliver6").style.textDecoration = 'underline';
    }
    else if(value == 7){
        document.getElementById("alb2-m3").play();
        document.getElementById("buttom-play7").style.display = 'none';
        document.getElementById("buttom-load7").style.display = 'inline-block';
        document.getElementById("text-oliver7").style.textDecoration = 'underline';
    }
    else if(value == 8){
        document.getElementById("alb2-m4").play();
        document.getElementById("buttom-play8").style.display = 'none';
        document.getElementById("buttom-load8").style.display = 'inline-block';
        document.getElementById("text-oliver8").style.textDecoration = 'underline';
    }
}

function load(value){
    if(value == 1){
        document.getElementById("alb1-m1").load();
        document.getElementById("alb1-m1").pause();
        document.getElementById("buttom-play1").style.display = 'inline-block';
        document.getElementById("buttom-load1").style.display = 'none';
        document.getElementById("text-oliver1").style.textDecoration = 'none';
    }
    else if(value == 2){
        document.getElementById("alb1-m2").load();
        document.getElementById("alb1-m2").pause();
        document.getElementById("buttom-play2").style.display = 'inline-block';
        document.getElementById("buttom-load2").style.display = 'none';
        document.getElementById("text-oliver2").style.textDecoration = 'none';
    }
    else if(value == 3){
        document.getElementById("alb1-m3").load();
        document.getElementById("alb1-m3").pause();
        document.getElementById("buttom-play3").style.display = 'inline-block';
        document.getElementById("buttom-load3").style.display = 'none';
        document.getElementById("text-oliver3").style.textDecoration = 'none';
    }
    else if(value == 4){
        document.getElementById("alb1-m4").load();
        document.getElementById("alb1-m4").pause();
        document.getElementById("buttom-play4").style.display = 'inline-block';
        document.getElementById("buttom-load4").style.display = 'none';
        document.getElementById("text-oliver4").style.textDecoration = 'none';
    }
    else if(value == 5){
        document.getElementById("alb2-m1").load();
        document.getElementById("alb2-m1").pause();
        document.getElementById("buttom-play5").style.display = 'inline-block';
        document.getElementById("buttom-load5").style.display = 'none';
        document.getElementById("text-oliver5").style.textDecoration = 'none';
    }
    else if(value == 6){
        document.getElementById("alb2-m2").load();
        document.getElementById("alb2-m2").pause();
        document.getElementById("buttom-play6").style.display = 'inline-block';
        document.getElementById("buttom-load6").style.display = 'none';
        document.getElementById("text-oliver6").style.textDecoration = 'none';
    }
    else if(value == 7){
        document.getElementById("alb2-m3").load();
        document.getElementById("alb2-m3").pause();
        document.getElementById("buttom-play7").style.display = 'inline-block';
        document.getElementById("buttom-load7").style.display = 'none';
        document.getElementById("text-oliver7").style.textDecoration = 'none';
    }
    else if(value == 8){
        document.getElementById("alb2-m4").load();
        document.getElementById("alb2-m4").pause();
        document.getElementById("buttom-play8").style.display = 'inline-block';
        document.getElementById("buttom-load8").style.display = 'none';
        document.getElementById("text-oliver8").style.textDecoration = 'none';
    }
}

var cronometro;
var segundos = 30;

function tempo(){
    document.getElementsByClassName("insereTempo").innerHTML = '00 : 30';   
}

cronometro = 30;
let start;

var id;
function verificaId (n){
    if(n == 1){
        id = 0;
    }else if(n == 2){
        id = 1;
    }else if(n == 3){
        id = 2;
    }else if(n == 4){
        id = 3;
    }else if(n == 5){
        id = 4;
    }else if(n == 6){
        id = 5;
    }else if(n == 7){
        id = 6;
    }else if(n == 8){
        id = 7;
    }
    
}

function startC(clicks){ //função start cronometro

    if(clicks == 1){ //só executa uma vez
        start = setInterval( funcC, 1000 )
    }else if (clicks == 2){
        location.reload('insereTempo');
        document.getElementsByClassName('insereTempo').innerHTML = '';
    }
}

let cronometro2;

function funcC (){ // função geral de exibição e controle na saída do tempo
 

    if(cronometro < 60){
        cronometro2 = 0;
    }
    
    //decai o contador 
    cronometro -= 1;

    if(cronometro > 0){ // se, for maior que zero, continua a função
        segundos -= 1 //decai o contador de segundos
        
        console.log(id);
        
  
        if(cronometro < 60 && cronometro > 9){
            document.getElementsByClassName('insereTempo')[id].innerHTML = '0' + cronometro2 + ' : ' + segundos
            if(segundos < 10){
                document.getElementsByClassName('insereTempo')[id].innerHTML = '0' + cronometro2 + ' : '  + '0' + segundos
            }
        }else if(cronometro < 10 && cronometro > 0){
            document.getElementsByClassName('insereTempo')[id].innerHTML = '00 : ' + segundos
            if(segundos < 10){
                document.getElementsByClassName('insereTempo')[id].innerHTML = '00 : '  + '0' + segundos
            }
        }else{ // 
            document.getElementsByClassName('insereTempo')[id].innerHTML = '0' + cronometro2 + ' : ' + segundos
            if(segundos < 10){
                document.getElementsByClassName('insereTempo')[id].innerHTML = '0' + cronometro2 + ' : '  + '0' + segundos
            }
        }

    }else{// zera o cronometro
        location.reload('insereTempo' + id);
    }

}

function stopC(){ // para o cronometro por meio da variável passada
    clearInterval(start);
}

// manipulando tamanho 
