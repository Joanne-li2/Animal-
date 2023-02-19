function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.sounfClassifier('https://teachablemachine.withgoogle.com/models/DYFvfNg0T/model.json', modelReady);
}

function modeReady(){
    classifier.classify(gotResults);
}