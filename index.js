const robot = require('robotjs');
let x = 1157;
let y = 398;
let k = 0;
let z = 0;
let stime = randomNumber(900000,1188000);
function main()
{
    sleep(5000);
    console.log(robot.getMousePos());
    while(k < 5)
    {
        for (let i = 0; i < 4; i++) 
        {
        robot.moveMouseSmooth(x,y);
        robot.mouseClick();
        robot.mouseClick();
        let stime = randomNumber(540000,780000);
        movingMouse(k,z);
        sleep(stime);
        }

        k++;

    }
    z++;
    k = 1;
    main();
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

function randomNumber(min, max){
 return Math.floor(Math.random() * (max - min) + min);
     };

function movingMouse(keyX, keyY){
    switch (keyX) {
        case 1:
            x = randomNumber(1135,1182);
            break;
         case 2:
            x = randomNumber(1218,1276);
         break;
         case 3:
            x = randomNumber(1303,1354);
            break;
        case 4:
         x = randomNumber(1389,1441);
           break;
        case 5:
            x = randomNumber(1135,1182);
            k = 1;
        default: k = 1;
            break;
        }
        switch (keyY) {
            case 1:
                y = randomNumber(366,410);
                break;
             case 2:
                y = randomNumber(420,469);
             break;
             case 3:
                y = randomNumber(482,525);
                break;
            case 4:
             y = randomNumber(537,582);
               break;
               case 5:
                y = randomNumber(596,641);
                break;
             case 6:
                y = randomNumber(657,696);
             break;
             case 7:
                y = randomNumber(711,753);
                break;
            default: z = 1;
                break;
}
}
main();