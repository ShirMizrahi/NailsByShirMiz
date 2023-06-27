let backgroundColor;// צבע רק
let logoImage;// תמונה של הלוגו
let timer;// טיימר
let nextAppointment;//מתי התור הבא
let cursorImage;// תמונה של הסמן / עכבר
let isCursorOverLogo;//הוא הסמן מעל לוגו
let background_image;//תמונת רקע
let nailcolor;//צבע של לק ורוד
let logoImage2;//שינוי של פרטים שאנחנו מעל הלוגו

//

function preload() { // טעינה מוקדמת של התמונות
  logoImage = loadImage("nail_logo.png");
  cursorImage = loadImage("cursor.png");
  // background_image = loadImage("background_image.png");
  background_image = loadImage("background_image2.png");
  nailcolor = loadImage("nailcolor.png");
  logoImage2 = loadImage("logoImage2.png");
}

function setup() {
  createCanvas(400, 400);//גודל קנבס
  backgroundColor = color(255);
  nextAppointment = new Date("2023-08-04T14:00:00");//מתי התור הבא
  timer = nextAppointment.getTime() - Date.now();
  noCursor();
  isCursorOverLogo = false; //
}

function draw() {
  background(backgroundColor);
  image(background_image, width / 2, height / 2, width, height);

  fill(color("#F4C0DB00")); // צבע
  ellipse(47.4592, 125.466, 37.7379, 100.6398); // אליפסה

  // הוספת מלבן בצד ימין למעלה
  fill(color("#F0BED8")); // צבע
  noStroke();

 // rect(width - 60, 5, 60, 30);

  //אם העכבר לחוץ  ונמצא על הציפורן אז לק משתנה
  if (
    mouseIsPressed &&
    mouseX > 10 &&
    mouseX < 84 &&
    mouseY > 50 &&
    mouseY < 200
  ) {
    image(nailcolor, width / 2, height / 2, 400, 400); // תצוגת תמונה של הציפורן במקום העכבר
  } else {
    backgroundColor = color(255);
  }

  if (timer > 0) {
    let secondsRemaining = Math.ceil(timer / 1000);
    fill(color("#FFFFFF")); // צבע טיימר למעלה
    textAlign(RIGHT, TOP);
    textSize(8);
    text(":עד התור הבא", width - 10, 10);
    text(
      floor(secondsRemaining / 60) + "m " + (secondsRemaining % 60) + "s",
      width - 10,
      20
    );
    timer -= deltaTime;
  }

  fill(color("#EC008C"));
  textAlign(CENTER);
  textSize(14);
  let formattedNextAppointment = formatDate(nextAppointment);

  text(formattedNextAppointment + " :התור הבא", width / 2, height / 2 + 150); // טקסט התור הבא

  imageMode(CENTER);

  // בדיקה אם העכבר נמצא מעל הלוגו
  if (
    mouseX > width / 2 - 75 &&
    mouseX < width / 2 + 75 &&
    mouseY > height / 2 - 75 &&
    mouseY < height / 2 + 75
  ) {
    isCursorOverLogo = true;
    image(logoImage2, width / 2, height / 2, 400, 400); //אינסטגרם
    //tint(color("#FF00E16D")); // שינוי צבע  ל

    // rect(width - 60, 5, 60, 30);
  } else {
    isCursorOverLogo = false;
    tint(255); // שינוי צבע הלוגו למצב הרגיל
  }

  image(logoImage, width / 2, height / 2, 400, 400);

  image(cursorImage, mouseX, mouseY, 32, 32);

  // הוספת טקסט לציון על הצבע המובהק של הלוגו כאשר העכבר עובר מעליו
  if (isCursorOverLogo) { 
    fill(color("#F9F3F3"));
    textAlign(CENTER);
    textSize(16);
    text("!בואי לעצב את הציפורניים שלך", width / 2, 10);
  }

  //}

  //function mouseDragged() {
  // if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  //    image(nailcolor, width / 2, height / 2, 400, 400);
  // }
}

function formatDate(date) { //השורה הראשונה מגדירה פונקציה בשם formatDate שמקבלת פרמטר בשם date. הפונקציה זו משמשת להמרת תאריך למחרוזת מסוג תאריך מעוצב.
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
