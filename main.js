function mom() 
{
    window.location = "indexs.html";
}
function dad() 
{
    window.location = "indexss.html";
}
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function dadd()
{
    speak();
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "I can proudly say that it is my father who has been my source of inspiration from day one. In other words, his perspective and personality together have shaped me as a person. Similarly, he has a great impact on the world as well in his own little ways.This consistency and affection encourage all of us to treat them the same way. All my knowledge of sports and cars, I have derived from my father. It is one of the sole reasons why I aspire to be a cricket player in the future.To sum it up, I believe that my father has it all what it takes to be called a real-life superhero. The way he manages things professionally and personally leaves me mesmerized every time. No matter how tough the times got, I watched my father become tougher. I certainly aspire to become like my father. If I could just inherit ten percent of what he is, I believe my life will be sorted.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function momm()
{
    speakk();
}
function speakk()
{
    var synth = window.speechSynthesis;
    speak_data = "I love her not because she is my mother and we should respect our elders. I respect her because she has taken care of me when I was not able to speak. At that time, she has taken care of all my needs when I wasn’t able to speak.Additionally, she taught me how to walk, speak, and take care of myself. Similarly, every bigger step that I have taken in my life is all because of my mother. Because, if she hasn’t taught me how to take small steps then I won’t be able to take these bigger step.She is an essence of truthfulness, love, and sincerity. Another reason is that she showers her family with her blessing and live. Furthermore, she gives us everything but never demand anything in return. The way she cares for everyone in the family inspires me to the same in my future.Also, her love is not just for the family she treats every stranger and animals the same way she did to me. Due to, this she is very kind and sensible towards the environment and animals.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}



