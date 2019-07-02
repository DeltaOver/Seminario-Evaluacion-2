
function preload(){
  data = loadJSON("https://api.myjson.com/bins/h8mub");
}

function setup() {
  createCanvas(1300, 988);
}

function draw() {
  background(220);
  stroke(100, 150, 200);
  strokeWeight(4);
  fill(100, 150, 200);
  line(50,500,1250,500);
  quad(120,500,200,500,200,500-((data[0].horasdrive[0]+data[0].horasdrive[1]+data[0].horasdrive[2])+data[0].horasdrive[3]+data[0].horasdrive[4]/5)*40,120,500-((data[0].horasdrive[0]+data[0].horasdrive[1]+data[0].horasdrive[2])+data[0].horasdrive[3]+data[0].horasdrive[4]/5)*40);
  quad(260,500,340,500,340,500-((data[1].horasdrive[0]+data[1].horasdrive[1]+data[1].horasdrive[2])+data[1].horasdrive[3]+data[1].horasdrive[4]/5)*40,260,500-((data[1].horasdrive[0]+data[1].horasdrive[1]+data[1].horasdrive[2])+data[1].horasdrive[3]+data[1].horasdrive[4]/5)*40);
  quad(400,500,480,500,480,500-((data[2].horasdrive[0]+data[2].horasdrive[1]+data[2].horasdrive[2])+data[2].horasdrive[3]+data[2].horasdrive[4]/5)*40,400,500-((data[2].horasdrive[0]+data[2].horasdrive[1]+data[2].horasdrive[2])+data[2].horasdrive[3]+data[2].horasdrive[4]/5)*40);
  quad(540,500,620,500,620,500-((data[3].horasdrive[0]+data[3].horasdrive[1]+data[3].horasdrive[2])+data[3].horasdrive[3]+data[3].horasdrive[4]/5)*40,540,500-((data[3].horasdrive[0]+data[3].horasdrive[1]+data[3].horasdrive[2])+data[3].horasdrive[3]+data[3].horasdrive[4]/5)*40);
  quad(680,500,760,500,760,500-((data[4].horasdrive[0]+data[4].horasdrive[1]+data[4].horasdrive[2])+data[4].horasdrive[3]+data[4].horasdrive[4]/5)*40,680,500-((data[4].horasdrive[0]+data[4].horasdrive[1]+data[4].horasdrive[2])+data[4].horasdrive[3]+data[4].horasdrive[4]/5)*40);
  quad(820,500,900,500,900,500-((data[5].horasdrive[0]+data[5].horasdrive[1]+data[5].horasdrive[2])+data[5].horasdrive[3]+data[5].horasdrive[4]/5)*40,820,500-((data[5].horasdrive[0]+data[5].horasdrive[1]+data[5].horasdrive[2])+data[5].horasdrive[3]+data[5].horasdrive[4]/5)*40);
  quad(960,500,1040,500,1040,500-((data[6].horasdrive[0]+data[6].horasdrive[1]+data[6].horasdrive[2])+data[6].horasdrive[3]+data[6].horasdrive[4]/5)*40,960,500-((data[6].horasdrive[0]+data[6].horasdrive[1]+data[6].horasdrive[2])+data[6].horasdrive[3]+data[6].horasdrive[4]/5)*40);
  quad(1100,500,1180,500,1180,500-((data[7].horasdrive[0]+data[7].horasdrive[1]+data[7].horasdrive[2])+data[7].horasdrive[3]+data[7].horasdrive[4]/5)*40,1100,500-((data[7].horasdrive[0]+data[7].horasdrive[1]+data[7].horasdrive[2])+data[7].horasdrive[3]+data[7].horasdrive[4]/5)*40);
  
  for (i = 0; i < 8; i++){
      strokeWeight(0);
      fill(0);
      textSize(12);
      textAlign(CENTER);
      text(data[i].nombre, 130 + 140.5*i,530,60,70);
      textSize(18);
      text(((data[i].horasdrive[0]+data[i].horasdrive[1]+data[i].horasdrive[2])+data[i].horasdrive[3]+data[i].horasdrive[4]/5), 137 + 140*i, 450 - ((data[i].horasdrive[0]+data[i].horasdrive[1]+data[i].horasdrive[2])+data[i].horasdrive[3]+data[i].horasdrive[4]/5)*40,50,60)
  }

}