import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r125/examples/jsm/loaders/GLTFLoader.js';


function main() {

  let mouseX = 0;
  let mouseY = 0;

  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas,antialias:true});
  var model;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#000000');
  // scene.fog = new THREE.Fog('black', 5, 20);
  const axesHelper = new THREE.AxesHelper( 5 );
  // scene.add( axesHelper );

  const fov = 75;
  const aspect = window.innerWidth/window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(5, 6, 5);
  camera.lookAt(scene.position);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.maxDistance = 15;
  controls.minDistance = 6;
  controls.enablePan = false;
  controls.update();

  const color = 0xFFFFFF;
  const intensity = 0.6;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(10, 10, 10);
  scene.add(light);
  // scene.add(light.target);

  const light2 = new THREE.HemisphereLight( 0xf4f4f6, 0x00000, 0.1 );
  scene.add( light2 );


  document.addEventListener( 'mousemove', onDocumentMouseMove );
  function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX );
    mouseY = ( event.clientY - windowHalfY );

  }


  //vel rotazione default
  let speed=0.0005;

  var posX;
  var posY;
  var posZ;


  document.getElementById("logo").addEventListener("click", home);

  function home(){

    logo.removeEventListener("click", home);

    id = "none";

    var menu = document.getElementById("menu");
    menu.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");

    var content = document.getElementById("content");
    content.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");


    var about = document.getElementById("about");
    about.setAttribute("style", "visibility:hidden; opacity:0; height: 90vh;");


    var svg = document.getElementById("starMenu");
    svg.setAttribute("style", "transform:rotate(0deg);");


    /*-------------------reset camera-------------------*/
    controls.enabled = true;
    speed=0.0005;

    posX = 5;
    posY = 6;
    posZ = 5;

    var from = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    };

    var to = {
      x: posX,
      y: posY,
      z: posZ
    };
    var tween = new TWEEN.Tween(from)
    .to(to, 600)
    .easing(TWEEN.Easing.Cubic.InOut)
    .onUpdate(function () {

      camera.position.set(this.x, this.y, this.z);
      camera.lookAt(scene.position);
    })
    .onComplete(function () {
      camera.lookAt(scene.position);
      logo.addEventListener("click", home);
      var footer = document.getElementById("footer");
      footer.setAttribute("style", "visibility:visible; opacity:1;");
    })
    .start();


    /*-------------------reset branch-------------------*/
    var position0 = { x : model.position.x,
      y : model.position.y,
      z : model.position.z
    };
    var endPosition = { x: 0,
      y: 0,
      z: 0
    };
    var tween3 = new TWEEN.Tween(position0)
    .to(endPosition , 600)
    .easing(TWEEN.Easing.Cubic.InOut)
    .onUpdate(function () {
      model.position.set(this.x, this.y, this.z);
    })
    .start()
  }


  /*---------------------go to clicked content---------------------*/

  //sinistra
  var an = document.getElementById("an");
  var ju = document.getElementById("ju");
  var lu = document.getElementById("lu");
  var pe = document.getElementById("pe");
  var se = document.getElementById("se");

  an.addEventListener("click", content);
  ju.addEventListener("click", content);
  lu.addEventListener("click", content);
  pe.addEventListener("click", content);
  se.addEventListener("click", content);

  //destra
  var ke = document.getElementById("ke");
  var sk = document.getElementById("sk");
  var sn = document.getElementById("sn");
  var fr = document.getElementById("fr");
  var tor = document.getElementById("tor");

  ke.addEventListener("click", content);
  sk.addEventListener("click", content);
  sn.addEventListener("click", content);
  fr.addEventListener("click", content);
  tor.addEventListener("click", content);


  function content(){

    if (prevId == "an" || prevId == "ju" || prevId == "lu" || prevId == "pe" || prevId == "se" ){
      if (id == "an" || id == "ju" || id == "lu" || id == "pe" || id == "se"){
        var content = document.getElementById("content");
        content.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
      }

      else {
        movebranch();
      }
    }

    if (prevId == "ke" || prevId == "sk" || prevId == "sn" || prevId == "fr" || prevId == "tor"){
      if (id == "ke" || id == "sk" || id == "sn" || id == "fr" || id == "tor"){
        var content = document.getElementById("content");
        content.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
      }

      else {
        movebranch();
      }
    }

    else if ( prevId=="none" || id=="none" ) {
      movebranch();
    }


    function movebranch(){
      //sinistra
      an.removeEventListener("click", content);
      ju.removeEventListener("click", content);
      lu.removeEventListener("click", content);
      pe.removeEventListener("click", content);
      se.removeEventListener("click", content);

      //destra
      ke.removeEventListener("click", content);
      sk.removeEventListener("click", content);
      sn.removeEventListener("click", content);
      fr.removeEventListener("click", content);
      tor.removeEventListener("click", content);


      controls.enabled = false;

      speed = 0;

      posX = 5;
      posY = 0;
      posZ = 5;

      var from = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
      };

      var to = {
        x: posX,
        y: posY,
        z: posZ
      };


      //reset branch
      var position0 = { x : model.position.x,
        y : model.position.y,
        z : model.position.z
      };
      var endPosition = { x: 0,
        y: 0,
        z: 0
      };

      var tween3 = new TWEEN.Tween(position0)
      .to(endPosition , 600)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(function () {

        model.position.set(this.x, this.y, this.z);
      })
      .start()

      //reset camera
      var tween = new TWEEN.Tween(from)
      .to(to, 600)
      .easing(TWEEN.Easing.Cubic.InOut)
      .onUpdate(function () {
        camera.position.set(this.x, this.y, this.z);
        camera.lookAt(scene.position);
      })
      .start()
      .onComplete(function () {

        //second rotate the camera
        var angle = { a : 0 };
        var endAngle;
        var rotationDir;
        var endPosX;
        var endPosY;
        var endPosZ;

        if (id == "an" || id == "ju" || id == "lu" || id == "pe" || id == "se") {
          endAngle = { a : 0.03 };
          rotationDir = -1;
          endPosX = 8;
          endPosY = 0;
          endPosZ = 0;

        }

        if (id == "ke" || id == "sk" || id == "sn" || id == "fr" || id == "tor") {
          endAngle = { a : 0.03 };
          rotationDir = 1;
          endPosX = 0;
          endPosY = 0;
          endPosZ = 8;
        }

        var tween2 = new TWEEN.Tween(angle)
        .to(endAngle , 1000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(function () {
          var yax = new THREE.Vector3( 0, rotationDir, 0 );
          var quaternion = new THREE.Quaternion;
          camera.position.applyQuaternion(quaternion.setFromAxisAngle(yax, angle.a));
          camera.lookAt(scene.position);
        })
        .start()

        //and move the branch
        var position0 = { x : model.position.x,
          y : model.position.y,
          z : model.position.z
        };
        var endPosition = { x: endPosX,
          y: endPosY,
          z: endPosZ
        };

        var tween3 = new TWEEN.Tween(position0)
        .to(endPosition , 1000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(function () {
          model.position.set(this.x, this.y, this.z);
        })
        .start()
        .onComplete(function () {
          var content = document.getElementById("content");
          content.setAttribute("style", "visibility:visible; opacity:1; height: 100vh;");
        })

        an.addEventListener("click", content);
        ju.addEventListener("click", content);
        lu.addEventListener("click", content);
        pe.addEventListener("click", content);
        se.addEventListener("click", content);

        ke.addEventListener("click", content);
        sk.addEventListener("click", content);
        sn.addEventListener("click", content);
        fr.addEventListener("click", content);
        tor.addEventListener("click", content);
      });
    }


  }
//fine go to content


  //load model
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('branchyyy.glb', function (glb) {

    model = glb.scene;
    model.position.set(0,0,0);

    scene.add(model);

  });


  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);

      //ordine dei div content
      if(mql.matches === false){
        if (id == "an" || id == "ju" || id == "lu" || id == "pe" || id == "se"){
          document.getElementById("inContent").style.order="1";
          document.getElementById("empty").style.order="2";
        }
      }

      if(mql.matches === false){
        if (id == "ke" || id == "sn" || id == "sk" || id == "tor" || id == "fr"){
          document.getElementById("inContent").style.order="2";
          document.getElementById("empty").style.order="1";
        }
      }

      if(mql.matches === true){
        document.getElementById("inContent").style.order="1";
        document.getElementById("empty").style.order="2";
      }
    }
    return needResize;
  }

  function render() {

    targetX = mouseX * .0002;
    targetY = mouseY * .0002;

    if ( model ) {

      model.rotation.y += 0.05 * ( targetX - model.rotation.y );
      model.rotation.x += 0.05 * ( targetY - model.rotation.x );

    }

    //rotate camera
    var y_axis = new THREE.Vector3( 0, 1, 0 );
    var quaternion = new THREE.Quaternion;
    camera.position.applyQuaternion(quaternion.setFromAxisAngle(y_axis, speed));
    camera.lookAt(scene.position);


    var axis = new THREE.Vector3( 1, -1, 1 );
    var quaternion2 = new THREE.Quaternion;
    light.position.applyQuaternion(quaternion2.setFromAxisAngle(axis, 0.01));


    //render update
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    renderer.render(scene, camera);

    requestAnimationFrame(render);

    TWEEN.update();
  }

  requestAnimationFrame(render);
}


main();
