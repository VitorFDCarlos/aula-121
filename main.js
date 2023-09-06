x = 0;
y = 0;

drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "O sistema está ouvindo, Pode falar";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if(content == 'círculo')
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um círculo";
        drawCircle = "set";
    }
    if(content == 'retangulo')
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Desenhando um retangulo";
        drawRect = "set";
    }
}

function setup()
{
    canvas = createCanvas(900,600);
}

function draw()
{
    console.log("entrei na função drawn");
    console.log(drawCircle);
    console.log(drawRect);
    if(drawCircle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y, radius);
        document.getElementById("status").innerHTML = "Um círculo foi desenhado.";
        drawnCircle = "";
        console.log("circulo");
    }

    if(drawRect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Um retangulo foi desenhado.";
        drawRect = "";
        console.log("retangulo");
    }
}