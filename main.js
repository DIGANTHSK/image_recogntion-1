webcam.attach('#camera');
camera = document.getElementById("camera");
webcam.set({
width:350,
height:300,
img_format : 'png',
png_quality :90
});
function take_snapshot()
{
webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="selfie_image" src= "'+ data_uri+ '"/>';
});
}
console.log('ml5 version:', ml5.version);

// Initialize the Image Classifier method with MobileNet
//classifier = 
ml5.imageclassfier(https://teachablemachine.withgoogle.com/models/86nl1bm6W/',modelloadead);
classfier =
ml5.imageclassfier(https://teachablemachine.withgoogle.com/models/86nl1bm6W/',modelloadead);

// When the model is loaded
function modelloaded() {
console.log('model loaded!');
}

function check()
{
img = docment.getElementById('selfie_image');
classfier.classify(img. goresult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
    // Display error in the console
    if (error) {
      console.error(error);
    } else {
      // The results are in an array ordered by confidence.
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }