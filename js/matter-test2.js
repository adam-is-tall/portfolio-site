window.onload = (event) => {
  console.log("test");

  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Vertices = Matter.Vertices,
    Svg = Matter.Svg,
    Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create(),
    world = engine.world;

  // create renderer
  var render = Render.create({
    element: document.getElementById("flowers"),
    engine: engine,
    options: {
      background: "#237694",
      showAngleIndicator: false,
      wireframes: false,
      showInternalEdges: true,
    },
  });

  Render.run(render);

  // create runner (not sure what this does exactly)
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add bodies
  var offset = 20,
    options = {
      isStatic: true,
    };

  world.bodies = [];

  // these static walls will not be rendered in this sprites example, see options
  World.add(world, [
    Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.fromVertices(
      400,
      375,
      [
        { x: 0, y: 0 },
        { x: 10, y: -10 },
        { x: 25, y: 150 },
        { x: 200, y: 120 },
        { x: 200, y: 130 },
        { x: 25, y: 180 },
        { x: 25, y: 500 },
        { x: 0, y: 500 },
        { x: 0, y: 450 },
        { x: -150, y: 410 },
        { x: -150, y: 400 },
        { x: 0, y: 430 },
        { x: 0, y: 300 },
        { x: -200, y: 220 },
        { x: -200, y: 210 },
        { x: 0, y: 280 },
      ],
      (options = {
        isStatic: true,
        render: {
          fillStyle: "#060a19",
          wireframes: false,
        },
      })
    ),
  ]);

  var stack = Composites.stack(250, 0, 3, 3, 0, 0, function (x, y) {
    if (Common.random(0, 10) < 3) {
      return Bodies.circle(x, y, 51, {
        density: 0.0005,
        frictionAir: 0.001,
        restitution: 0.3,
        friction: 1,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower100.png",
            xScale: 0.6,
            yScale: 0.6,
          },
        },
      });
    } else if (Common.random(0, 10) < 5) {
      return Bodies.circle(x, y, 60, {
        density: 0.0005,
        frictionAir: 0.001,
        restitution: 0.9,
        friction: 1,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower120.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random(0, 10) < 7) {
      return Bodies.circle(x, y, 27, {
        density: 0.0005,
        frictionAir: 0.5,
        restitution: 0.9,
        friction: 1,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower54.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random(0, 10) < 9) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.5,
        restitution: 0.9,
        friction: 1,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower75.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random(0, 10) < 10) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.5,
        restitution: 0.9,
        friction: 1,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower82.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random(0, 10) > 0.5) {
      return;
    }
  });

  World.add(world, stack);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 },
  });

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
  };
};
