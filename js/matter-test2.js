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
      400,
      [
        { x: 10, y: 0 },
        { x: 25, y: 0 },
        { x: 25, y: 150 },
        { x: 225, y: 160 },
        { x: 25, y: 160 },
        { x: 25, y: 300 },
        { x: 45, y: 500 },
        { x: -10, y: 500 },
        { x: -10, y: 300 },
        { x: -300, y: 250 },
        { x: 5, y: 280 },
      ],
      (options = {
        isStatic: true,
        fillStyle: "#060a19",
      })
    ),
  ]);

  var stack = Composites.stack(5, 5, 5, 2, 75, 75, function (x, y) {
    console.log(Common.random());
    if (Common.random() < 0.2) {
      return Bodies.circle(x, y, 51, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower100.png",
            xScale: 0.6,
            yScale: 0.6,
          },
        },
      });
    } else if (Common.random() < 0.3) {
      return Bodies.circle(x, y, 60, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower120.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random() < 0.6) {
      return Bodies.circle(x, y, 27, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower54.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random() < 0.8) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower75.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random() < 0.9) {
      return Bodies.circle(x, y, 36, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: "./img/experiments/flower-matter/flower82.png",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    } else if (Common.random() > 0.5) {
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
