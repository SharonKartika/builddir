let simulation;
let t = 0.0;
let continuing = true;
function setpausecontinue(){
    continuing = !continuing;   
}
function loadModule() {
    t = 0.0;
    if (simulation) {
        simulation.delete();
    }
    console.log('loaded');
    simulation = new Module.Simulation();

    // for (let i = 0; i < 100; i++) {
    //     let v = new Module.Vec2(random() * 400, random() * 400);
    //     let v0 = new Module.Vec2(0., 0.);

    //     simulation.addCell(
    //         v, v0, v0);
    //     v.delete();
    //     v0.delete();
    // }
    // simulation.setup();
}

function setup() {
    createCanvas(800, 800);
    background(255);
    fill(0);
    noStroke();

}

function draw() {
    if (simulation && continuing) {
        background(255);
        // simulation.addCellArc();
        let posvecs = simulation.pVecs;
        for (let i = 0; i < posvecs.size(); i++) {
            let pos = posvecs.get(i);
            ellipse(pos.x / 5 + width / 3, pos.y / 5 +300, 5, 5);
            pos.delete();
        }
        simulation.multiUpdate(5);
        text("n=" + posvecs.size(), 30, height - 30);
        posvecs.delete();
        t += 0.01;
        text(round(t, 3) + "h", width - 100, height - 30);

    }
    // for (let i = 0; i < simulation.pVecs.size(); i++){
    //     ellipse(simulation.pVecs.get(i).x,simulation.pVecs.get(i).y,
    //             5, 5);
    // }
    // background(0, 10);
}
