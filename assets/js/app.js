//COLORS
let Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    pink:0xF5986E,
    brownDark:0x23190f,
    blue:0x68c3c0,
  };
  
  // THREEJS RELATED VARIABLES
  
  let scene,
    camera, fieldOfView, stars, starGeo, aspectRatio, nearPlane, farPlane,
    renderer, container;
    
  
  //INIT THREE JS, SCREEN AND MOUSE EVENTS
  
  function createScene() {
  
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  
  scene = new THREE.Scene();
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 100;
  nearPlane = 1;
  farPlane = 10000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
    );  
  
  // scene.fog = new THREE.Fog(0xf7d9aa, 100,950);
  camera.position.x = 1200;
  camera.position.z = 100;
  camera.position.y = 600;
  camera.rotation.x = 0;
  camera.rotation.y = 0 ;
  
  
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', handleWindowResize, false);
  
  }
  
  // HANDLE SCREEN EVENTS
  
  function handleWindowResize() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();
  }
  
  
  
  
  // LIGHTS
  
  let ambientLight, pointLight, directionalLight, shadowLight;
  
  function createLights() {
  
 
    ambientLight = new THREE.AmbientLight( 0x073763, 1.7 );
    pointLight = new THREE.PointLight(0xFD5E9D, 1.2, 1600);
    shadowLight = new THREE.DirectionalLight(0xFD5E9D, .8);
    shadowLight.castShadow = true;
    shadowLight.position.set(-1200, 200, -400);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.left = -400;
    shadowLight.shadow.camera.right = 400;
    shadowLight.shadow.camera.top = 400;
    shadowLight.shadow.camera.bottom = -400;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadow.mapSize.width = 2048;
    shadowLight.shadow.mapSize.height = 2048;

    scene.add( pointLight );
    scene.add( ambientLight );
    scene.add( shadowLight );
  
  }

    function createStars1() {
      starGeo1 = new THREE.Geometry();
       for(let i=0;i<5000;i++) {
       let star1 = new THREE.Vector3(
          Math.random() * 8000 - 4000,
          Math.random() * 600 - 300,
          Math.random() * 10000 - 5000
       );
       star1.velocity = 0;
       star1.acceleration = 0;
       starGeo1.vertices.push(star1);
      }
    
      let sprite = new THREE.TextureLoader().load( 'assets/textures/star1.png' );
         let starMaterial1 = new THREE.PointsMaterial({
           size: 5,
           map: sprite
         });
    
         stars1 = new THREE.Points(starGeo1,starMaterial1);
         scene.add(stars1);
        }

        function createStars() {
          starGeo = new THREE.Geometry();
           for(let i=0;i<5000;i++) {
           let star = new THREE.Vector3(
              Math.random() * 8000 - 4000,
              Math.random() * 600 - 300,
              Math.random() * 10000 - 5000
           );
           star.velocity = 0;
           star.acceleration = 0;
           starGeo.vertices.push(star);
          }
        
          let sprite = new THREE.TextureLoader().load( 'assets/textures/star.png' );
             let starMaterial = new THREE.PointsMaterial({
               size: 5,
               map: sprite
             });
        
             stars = new THREE.Points(starGeo,starMaterial);
             scene.add(stars);
            }

  let Bedroom = function(){
    controls = new THREE.OrbitControls (camera, renderer.domElement);
    this.mesh = new THREE.Object3D();
    this.mesh.name = "Bedroom";

    let geomFloorBase= new THREE.BoxGeometry(4000,100,4300,1,1,1);
    let textureFloor = new THREE.TextureLoader().load('assets/textures/concrete.jpg' );
    let matFloor = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureFloor});
    let floorBase = new THREE.Mesh(geomFloorBase, matFloor);
    floorBase.position.x=20000;
    floorBase.position.y=-400;
    floorBase.position.z=0;
    floorBase.castShadow = true;
    floorBase.receiveShadow = true;
    this.mesh.add(floorBase);

    let geomWallMain= new THREE.BoxGeometry(4000,16000,150,1,1,1);
    let textureWallMain = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain});
    let wallMain = new THREE.Mesh(geomWallMain, matWallMain);
    wallMain.position.x=20050;
    wallMain.position.y=7600;
    wallMain.position.z=2200;
    wallMain.castShadow = true;
    wallMain.receiveShadow = true;
    this.mesh.add(wallMain);

    let geomWallMain1= new THREE.BoxGeometry(4000,16000,150,1,1,1);
    let textureWallMain1 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain1});
    let wallMain1 = new THREE.Mesh(geomWallMain1, matWallMain1);
    wallMain1.position.x=20050;
    wallMain1.position.y=7600;
    wallMain1.position.z=-2200;
    wallMain1.castShadow = true;
    wallMain1.receiveShadow = true;
    this.mesh.add(wallMain1);

    let geomWallMain2= new THREE.BoxGeometry(150,12000,4550,1,1,1);
    let textureWallMain2 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2});
    let wallMain2 = new THREE.Mesh(geomWallMain2, matWallMain2);
    wallMain2.position.x=18050;
    wallMain2.position.y=5600;
    wallMain2.position.z=0;
    wallMain2.castShadow = true;
    wallMain2.receiveShadow = true;
    this.mesh.add(wallMain2);

    let geomWallMain2ext= new THREE.BoxGeometry(150,1000,4550,1,1,1);
    let textureWallMain2ext = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain2ext = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2ext});
    let wallMain2ext = new THREE.Mesh(geomWallMain2ext, matWallMain2ext);
    wallMain2ext.position.x=18050;
    wallMain2ext.position.y=12100;
    wallMain2ext.position.z=0;
    wallMain2ext.castShadow = true;
    wallMain2ext.receiveShadow = true;
    this.mesh.add(wallMain2ext);

    let geomWallMain2ext1= new THREE.BoxGeometry(150,1550,1000,1,1,1);
    let textureWallMain2ext1 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain2ext1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2ext1});
    let wallMain2ext1 = new THREE.Mesh(geomWallMain2ext1, matWallMain2ext1);
    wallMain2ext1.position.x=18050;
    wallMain2ext1.position.y=13350;
    wallMain2ext1.position.z=-1780;
    wallMain2ext1.castShadow = true;
    wallMain2ext1.receiveShadow = true;
    this.mesh.add(wallMain2ext1);
    
    let geomWallMain2ext2= new THREE.BoxGeometry(150,1550,1000,1,1,1);
    let textureWallMain2ext2 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain2ext2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2ext2});
    let wallMain2ext2 = new THREE.Mesh(geomWallMain2ext2, matWallMain2ext2);
    wallMain2ext2.position.x=18050;
    wallMain2ext2.position.y=13350;
    wallMain2ext2.position.z=1780;
    wallMain2ext2.castShadow = true;
    wallMain2ext2.receiveShadow = true;
    this.mesh.add(wallMain2ext2);

    let geomWallMainBench= new THREE.BoxGeometry(400,700,2550,1,1,1);
    let textureWallMainBench = new THREE.TextureLoader().load('assets/textures/bluebench1.jpg' );
    let matWallMainBench = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMainBench});
    let wallMainBench = new THREE.Mesh(geomWallMainBench, matWallMainBench);
    wallMainBench.position.x=18300;
    wallMainBench.position.y=12100;
    wallMainBench.position.z=0;
    wallMainBench.castShadow = true;
    wallMainBench.receiveShadow = true;
    this.mesh.add(wallMainBench);

    let geomWallMain2Window= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window});
    let wallMain2Window = new THREE.Mesh(geomWallMain2Window, matWallMain2Window);
    wallMain2Window.position.x=18350;
    wallMain2Window.position.y=12600;
    wallMain2Window.position.z=1400;
    wallMain2Window.rotation.y=-10;
    wallMain2Window.castShadow = true;
    wallMain2Window.receiveShadow = true;
    this.mesh.add(wallMain2Window);

    let geomWallMain2Window1= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window1 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window1});
    let wallMain2Window1 = new THREE.Mesh(geomWallMain2Window1, matWallMain2Window1);
    wallMain2Window1.position.x=18350;
    wallMain2Window1.position.y=13200;
    wallMain2Window1.position.z=1400;
    wallMain2Window1.rotation.y=-10;
    wallMain2Window1.castShadow = true;
    wallMain2Window1.receiveShadow = true;
    this.mesh.add(wallMain2Window1);

    let geomWallMain2Window2= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window2});
    let wallMain2Window2 = new THREE.Mesh(geomWallMain2Window2, matWallMain2Window2);
    wallMain2Window2.position.x=18350;
    wallMain2Window2.position.y=13700;
    wallMain2Window2.position.z=1400;
    wallMain2Window2.rotation.y=-10;
    wallMain2Window2.castShadow = true;
    wallMain2Window2.receiveShadow = true;
    this.mesh.add(wallMain2Window2);

    let geomWallMain2Window3= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window3 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window3 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3});
    let wallMain2Window3 = new THREE.Mesh(geomWallMain2Window3, matWallMain2Window3);
    wallMain2Window3.position.x=18350;
    wallMain2Window3.position.y=14100;
    wallMain2Window3.position.z=1400;
    wallMain2Window3.rotation.y=-10;
    wallMain2Window3.castShadow = true;
    wallMain2Window3.receiveShadow = true;
    this.mesh.add(wallMain2Window3);

    let geomWallMain2Window4= new THREE.BoxGeometry(50,1550,50,1,1,1);
    let textureWallMain2Window4 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window4 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window4});
    let wallMain2Window4 = new THREE.Mesh(geomWallMain2Window4, matWallMain2Window4);
    wallMain2Window4.position.x=18100;
    wallMain2Window4.position.y=13350;
    wallMain2Window4.position.z=1270;
    wallMain2Window4.castShadow = true;
    wallMain2Window4.receiveShadow = true;
    this.mesh.add(wallMain2Window4);

    let geomWallMain2Window5= new THREE.BoxGeometry(20,1550,20,1,1,1);
    let textureWallMain2Window5 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window5 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window5});
    let wallMain2Window5 = new THREE.Mesh(geomWallMain2Window5, matWallMain2Window5);
    wallMain2Window5.position.x=18570;
    wallMain2Window5.position.y=13350;
    wallMain2Window5.position.z=1540;
    wallMain2Window5.rotation.y=-2;
    wallMain2Window5.castShadow = true;
    wallMain2Window5.receiveShadow = true;
    this.mesh.add(wallMain2Window5);

    let geomWallMain2Window3Glass= new THREE.BoxGeometry(500,400,5,1,1,1);
    let textureWallMain2Window3Glass = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glass = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glass,shininess: 100, transparent: true});
    matWallMain2Window3Glass.opacity = 0.4;
    let wallMain2Window3Glass = new THREE.Mesh(geomWallMain2Window3Glass, matWallMain2Window3Glass);
    wallMain2Window3Glass.position.x=18350;
    wallMain2Window3Glass.position.y=13900;
    wallMain2Window3Glass.position.z=1400;
    wallMain2Window3Glass.rotation.y=-10;
    wallMain2Window3Glass.castShadow = true;
    wallMain2Window3Glass.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glass);

    let geomWallMain2Window3Glass1= new THREE.BoxGeometry(500,450,5,1,1,1);
    let textureWallMain2Window3Glass1 = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glass1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glass1, shininess: 100, transparent: true});
    matWallMain2Window3Glass1.opacity = 0.4;
    let wallMain2Window3Glass1 = new THREE.Mesh(geomWallMain2Window3Glass1, matWallMain2Window3Glass1);
    wallMain2Window3Glass1.position.x=18350;
    wallMain2Window3Glass1.position.y=13450;
    wallMain2Window3Glass1.position.z=1400;
    wallMain2Window3Glass1.rotation.y=-10;
    wallMain2Window3Glass1.castShadow = true;
    wallMain2Window3Glass1.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glass1);

    let geomWallMain2Window3Glass2= new THREE.BoxGeometry(500,550,5,1,1,1);
    let textureWallMain2Window3Glass2 = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glass2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glass2, shininess: 100, transparent: true});
    matWallMain2Window3Glass2.opacity = 0.4;
    let wallMain2Window3Glass2 = new THREE.Mesh(geomWallMain2Window3Glass2, matWallMain2Window3Glass2);
    wallMain2Window3Glass2.position.x=18350;
    wallMain2Window3Glass2.position.y=12900;
    wallMain2Window3Glass2.position.z=1400;
    wallMain2Window3Glass2.rotation.y=-10;
    wallMain2Window3Glass2.castShadow = true;
    wallMain2Window3Glass2.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glass2);

    ///
    let geomWallMain2Windowno2= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Windowno2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Windowno2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Windowno2});
    let wallMain2Windowno2 = new THREE.Mesh(geomWallMain2Windowno2, matWallMain2Windowno2);
    wallMain2Windowno2.position.x=18350;
    wallMain2Windowno2.position.y=12600;
    wallMain2Windowno2.position.z=-1300;
    wallMain2Windowno2.rotation.y=0;
    wallMain2Windowno2.castShadow = true;
    wallMain2Windowno2.receiveShadow = true;
    this.mesh.add(wallMain2Windowno2);

    let geomWallMain2Window1no2= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window1no2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window1no2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window1no2});
    let wallMain2Window1no2 = new THREE.Mesh(geomWallMain2Window1no2, matWallMain2Window1no2);
    wallMain2Window1no2.position.x=18350;
    wallMain2Window1no2.position.y=13200;
    wallMain2Window1no2.position.z=-1300;
    wallMain2Window1no2.rotation.y=0;
    wallMain2Window1no2.castShadow = true;
    wallMain2Window1no2.receiveShadow = true;
    this.mesh.add(wallMain2Window1no2);

    let geomWallMain2Window2no2= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window2no2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window2no2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window2no2});
    let wallMain2Window2no2 = new THREE.Mesh(geomWallMain2Window2no2, matWallMain2Window2no2);
    wallMain2Window2no2.position.x=18350;
    wallMain2Window2no2.position.y=13700;
    wallMain2Window2no2.position.z=-1300;
    wallMain2Window2no2.rotation.y=0;
    wallMain2Window2no2.castShadow = true;
    wallMain2Window2no2.receiveShadow = true;
    this.mesh.add(wallMain2Window2no2);

    let geomWallMain2Window3no2= new THREE.BoxGeometry(500,50,20,1,1,1);
    let textureWallMain2Window3no2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window3no2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3no2});
    let wallMain2Window3no2 = new THREE.Mesh(geomWallMain2Window3no2, matWallMain2Window3no2);
    wallMain2Window3no2.position.x=18350;
    wallMain2Window3no2.position.y=14100;
    wallMain2Window3no2.position.z=-1300;
    wallMain2Window3no2.rotation.y=0;
    wallMain2Window3no2.castShadow = true;
    wallMain2Window3no2.receiveShadow = true;
    this.mesh.add(wallMain2Window3no2);

    let geomWallMain2Window4no2 = new THREE.BoxGeometry(50,1550,50,1,1,1);
    let textureWallMain2Window4no2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window4no2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window4no2});
    let wallMain2Window4no2 = new THREE.Mesh(geomWallMain2Window4no2, matWallMain2Window4no2);
    wallMain2Window4no2.position.x=18100;
    wallMain2Window4no2.position.y=13350;
    wallMain2Window4no2.position.z=-1250;
    wallMain2Window4no2.castShadow = true;
    wallMain2Window4no2.receiveShadow = true;
    this.mesh.add(wallMain2Window4no2);

    let geomWallMain2Window5no2= new THREE.BoxGeometry(20,1550,20,1,1,1);
    let textureWallMain2Window5no2 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMain2Window5no2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Window5no2});
    let wallMain2Window5no2 = new THREE.Mesh(geomWallMain2Window5no2, matWallMain2Window5no2);
    wallMain2Window5no2.position.x=18600;
    wallMain2Window5no2.position.y=13350;
    wallMain2Window5no2.position.z=-1300;
    wallMain2Window5no2.rotation.y=0;
    wallMain2Window5no2.castShadow = true;
    wallMain2Window5no2.receiveShadow = true;
    this.mesh.add(wallMain2Window5no2);

    let geomWallMain2Window3Glassno2= new THREE.BoxGeometry(500,400,5,1,1,1);
    let textureWallMain2Window3Glassno2 = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glassno2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glassno2,shininess: 100, transparent: true});
    matWallMain2Window3Glassno2.opacity = 0.4;
    let wallMain2Window3Glassno2 = new THREE.Mesh(geomWallMain2Window3Glassno2, matWallMain2Window3Glassno2);
    wallMain2Window3Glassno2.position.x=18350;
    wallMain2Window3Glassno2.position.y=13900;
    wallMain2Window3Glassno2.position.z=-1300;
    wallMain2Window3Glassno2.rotation.y=0;
    wallMain2Window3Glassno2.castShadow = true;
    wallMain2Window3Glassno2.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glassno2);

    let geomWallMain2Window3Glass1no2= new THREE.BoxGeometry(500,450,5,1,1,1);
    let textureWallMain2Window3Glass1no2 = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glass1no2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glass1no2, shininess: 100, transparent: true});
    matWallMain2Window3Glass1no2.opacity = 0.4;
    let wallMain2Window3Glass1no2 = new THREE.Mesh(geomWallMain2Window3Glass1no2, matWallMain2Window3Glass1no2);
    wallMain2Window3Glass1no2.position.x=18350;
    wallMain2Window3Glass1no2.position.y=13450;
    wallMain2Window3Glass1no2.position.z=-1300;
    wallMain2Window3Glass1no2.rotation.y=0;
    wallMain2Window3Glass1no2.castShadow = true;
    wallMain2Window3Glass1no2.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glass1no2);

    let geomWallMain2Window3Glass2no2= new THREE.BoxGeometry(500,550,5,1,1,1);
    let textureWallMain2Window3Glass2no2 = new THREE.TextureLoader().load('assets/textures/glass.jpg' );
    let matWallMain2Window3Glass2no2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMain2Window3Glass2no2, shininess: 100, transparent: true});
    matWallMain2Window3Glass2no2.opacity = 0.4;
    let wallMain2Window3Glass2no2 = new THREE.Mesh(geomWallMain2Window3Glass2no2, matWallMain2Window3Glass2no2);
    wallMain2Window3Glass2no2.position.x=18350;
    wallMain2Window3Glass2no2.position.y=12900;
    wallMain2Window3Glass2no2.position.z=-1300;
    wallMain2Window3Glass2no2.rotation.y=0;
    wallMain2Window3Glass2no2.castShadow = true;
    wallMain2Window3Glass2no2.receiveShadow = true;
    this.mesh.add(wallMain2Window3Glass2no2);

    let geomWallMainWindow= new THREE.BoxGeometry(150,1550,50,1,1,1);
    let textureWallMainWindow = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMainWindow = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMainWindow});
    let wallMainWindow = new THREE.Mesh(geomWallMainWindow, matWallMainWindow);
    wallMainWindow.position.x=18050;
    wallMainWindow.position.y=13350;
    wallMainWindow.position.z=300;
    wallMainWindow.castShadow = true;
    wallMainWindow.receiveShadow = true;
    this.mesh.add(wallMainWindow);

    let geomWallMainWindowGlass= new THREE.BoxGeometry(5,1550,1600,1,1,1);
    let textureWallMainWindowGlass = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMainWindowGlass = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMainWindowGlass, shininess: 120, transparent: true});
    matWallMainWindowGlass.opacity = 0.4;
    let wallMainWindowGlass = new THREE.Mesh(geomWallMainWindowGlass, matWallMainWindowGlass);
    wallMainWindowGlass.position.x=18050;
    wallMainWindowGlass.position.y=13350;
    wallMainWindowGlass.position.z=-500;
    wallMainWindowGlass.castShadow = true;
    wallMainWindowGlass.receiveShadow = true;
    this.mesh.add(wallMainWindowGlass);

    let geomWallMainWindowGlass1= new THREE.BoxGeometry(5,1550,1000,1,1,1);
    let textureWallMainWindowGlass1 = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallMainWindowGlass1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallMainWindowGlass1, shininess: 120, transparent: true});
    matWallMainWindowGlass1.opacity = 0.4;
    let wallMainWindowGlass1 = new THREE.Mesh(geomWallMainWindowGlass1, matWallMainWindowGlass1);
    wallMainWindowGlass1.position.x=18050;
    wallMainWindowGlass1.position.y=13350;
    wallMainWindowGlass1.position.z=800;
    wallMainWindowGlass1.castShadow = true;
    wallMainWindowGlass1.receiveShadow = true;
    this.mesh.add(wallMainWindowGlass1);

    let geomWallCurtain= new THREE.BoxGeometry(20,50,3500,1,1,1);
    let textureWallCurtain = new THREE.TextureLoader().load('assets/textures/windowframe.jpg' );
    let matWallCurtain = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallCurtain});
    let wallMainCurtain = new THREE.Mesh(geomWallCurtain, matWallCurtain);
    wallMainCurtain.position.x=18150;
    wallMainCurtain.position.y=14150;
    wallMainCurtain.position.z=0;
    wallMainCurtain.castShadow = true;
    wallMainCurtain.receiveShadow = true;
    this.mesh.add(wallMainCurtain);

    let geomWallCurtain1= new THREE.BoxGeometry(5,2200,500,1,1,1);
    let textureWallCurtain1 = new THREE.TextureLoader().load('assets/textures/curtains.jpg' );
    let matWallCurtain1 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallCurtain1, shininess: 100, transparent: true});
    matWallCurtain1.opacity = 4;
    let wallCurtain1 = new THREE.Mesh(geomWallCurtain1, matWallCurtain1);
    wallCurtain1.position.x=18150;
    wallCurtain1.position.y=13000;
    wallCurtain1.position.z=1550;
    wallCurtain1.castShadow = true;
    wallCurtain1.receiveShadow = true;
    this.mesh.add(wallCurtain1);

    let geomWallCurtain2= new THREE.BoxGeometry(5,2200,500,1,1,1);
    let textureWallCurtain2 = new THREE.TextureLoader().load('assets/textures/curtains.jpg' );
    let matWallCurtain2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWallCurtain2, shininess: 100, transparent: true});
    matWallCurtain2.opacity = 4;
    let wallCurtain2 = new THREE.Mesh(geomWallCurtain2, matWallCurtain2);
    wallCurtain2.position.x=18150;
    wallCurtain2.position.y=13000;
    wallCurtain2.position.z=-1550;
    wallCurtain2.castShadow = true;
    wallCurtain2.receiveShadow = true;
    this.mesh.add(wallCurtain2);

    let geomWallBook= new THREE.BoxGeometry(150,180,50,1,1,1);
    let textureWallBook = new THREE.TextureLoader().load('assets/textures/book.jpg' );
    let matWallBook = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallBook});
    let wallBook = new THREE.Mesh(geomWallBook, matWallBook);
    wallBook.position.x=18300;
    wallBook.position.y=12550;
    wallBook.position.z=1200;
    wallBook.rotation.x = -0.2;
    wallBook.castShadow = true;
    wallBook.receiveShadow = true;
    this.mesh.add(wallBook);

    let geomWallBook1= new THREE.BoxGeometry(150,280,50,1,1,1);
    let textureWallBook1 = new THREE.TextureLoader().load('assets/textures/book1.jpg' );
    let matWallBook1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallBook1});
    let wallBook1 = new THREE.Mesh(geomWallBook1, matWallBook1);
    wallBook1.position.x=18300;
    wallBook1.position.y=12550;
    wallBook1.position.z=1130;
    wallBook1.castShadow = true;
    wallBook1.receiveShadow = true;
    this.mesh.add(wallBook1);

    let geomWallBook2= new THREE.BoxGeometry(150,260,50,1,1,1);
    let textureWallBook2 = new THREE.TextureLoader().load('assets/textures/book1.jpg' );
    let matWallBook2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallBook2});
    let wallBook2 = new THREE.Mesh(geomWallBook2, matWallBook2);
    wallBook2.position.x=18300;
    wallBook2.position.y=12550;
    wallBook2.position.z=1060;
    wallBook2.castShadow = true;
    wallBook2.receiveShadow = true;
    this.mesh.add(wallBook2);

    let geomWallBook3= new THREE.BoxGeometry(150,230,50,1,1,1);
    let textureWallBook3 = new THREE.TextureLoader().load('assets/textures/book.jpg' );
    let matWallBook3 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallBook3});
    let wallBook3 = new THREE.Mesh(geomWallBook3, matWallBook3);
    wallBook3.position.x=18300;
    wallBook3.position.y=12550;
    wallBook3.position.z=1000;
    wallBook3.castShadow = true;
    wallBook3.receiveShadow = true;
    this.mesh.add(wallBook3);

    let geomWallBook4= new THREE.BoxGeometry(150,190,50,1,1,1);
    let textureWallBook4 = new THREE.TextureLoader().load('assets/textures/book1.jpg' );
    let matWallBook4 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallBook4});
    let wallBook4 = new THREE.Mesh(geomWallBook4, matWallBook4);
    wallBook4.position.x=18300;
    wallBook4.position.y=12550;
    wallBook4.position.z=910;
    wallBook4.rotation.x = 0.5;
    wallBook4.castShadow = true;
    wallBook4.receiveShadow = true;
    this.mesh.add(wallBook4);

    let geomWallDesk= new THREE.BoxGeometry(1750,300,400,1,1,1);
    let textureWallDesk = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDesk = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDesk});
    let wallMainDesk = new THREE.Mesh(geomWallDesk, matWallDesk);
    wallMainDesk.position.x=18900;
    wallMainDesk.position.y=12800;
    wallMainDesk.position.z=1900;
    wallMainDesk.castShadow = true;
    wallMainDesk.receiveShadow = true;
    this.mesh.add(wallMainDesk);

    let geomWallDesk1= new THREE.BoxGeometry(70,1000,350,1,1,1);
    let textureWallDesk1 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDesk1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDesk1});
    let wallMainDesk1 = new THREE.Mesh(geomWallDesk1, matWallDesk1);
    wallMainDesk1.position.x=18300;
    wallMainDesk1.position.y=12150;
    wallMainDesk1.position.z=1900;
    wallMainDesk1.castShadow = true;
    wallMainDesk1.receiveShadow = true;
    this.mesh.add(wallMainDesk1);

    let geomWallDesk2= new THREE.BoxGeometry(70,1000,350,1,1,1);
    let textureWallDesk2 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDesk2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDesk2});
    let wallMainDesk2 = new THREE.Mesh(geomWallDesk2, matWallDesk2);
    wallMainDesk2.position.x=19600;
    wallMainDesk2.position.y=12150;
    wallMainDesk2.position.z=1900;
    wallMainDesk2.castShadow = true;
    wallMainDesk2.receiveShadow = true;
    this.mesh.add(wallMainDesk2);

    let geomWallDeskTop= new THREE.BoxGeometry(400,50,50,1,1,1);
    let textureWallDeskTop = new THREE.TextureLoader().load('assets/textures/bluebench1.jpg' );
    let matWallDeskTop = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop});
    let wallMainDeskTop = new THREE.Mesh(geomWallDeskTop, matWallDeskTop);
    wallMainDeskTop.position.x=18300;
    wallMainDeskTop.position.y=13000;
    wallMainDeskTop.position.z=1700;
    wallMainDeskTop.castShadow = true;
    wallMainDeskTop.receiveShadow = true;
    this.mesh.add(wallMainDeskTop);
    
    let geomWallDeskTop1= new THREE.BoxGeometry(50,1000,50,1,1,1);
    let textureWallDeskTop1 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop1});
    let wallMainDeskTop1 = new THREE.Mesh(geomWallDeskTop1, matWallDeskTop1);
    wallMainDeskTop1.position.x=18480;
    wallMainDeskTop1.position.y=13400;
    wallMainDeskTop1.position.z=1700;
    wallMainDeskTop1.castShadow = true;
    wallMainDeskTop1.receiveShadow = true;
    this.mesh.add(wallMainDeskTop1);

    let geomWallDeskTop2= new THREE.BoxGeometry(50,1000,50,1,1,1);
    let textureWallDeskTop2 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop2});
    let wallMainDeskTop2 = new THREE.Mesh(geomWallDeskTop2, matWallDeskTop2);
    wallMainDeskTop2.position.x=18180;
    wallMainDeskTop2.position.y=13400;
    wallMainDeskTop2.position.z=1700;
    wallMainDeskTop2.castShadow = true;
    wallMainDeskTop2.receiveShadow = true;
    this.mesh.add(wallMainDeskTop2);

    let geomWallDeskTop3= new THREE.BoxGeometry(50,500,50,1,1,1);
    let textureWallDeskTop3 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop3 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop3});
    let wallMainDeskTop3 = new THREE.Mesh(geomWallDeskTop3, matWallDeskTop3);
    wallMainDeskTop3.position.x=18180;
    wallMainDeskTop3.position.y=13250;
    wallMainDeskTop3.position.z=1700;
    wallMainDeskTop3.castShadow = true;
    wallMainDeskTop3.receiveShadow = true;
    this.mesh.add(wallMainDeskTop3);

    let geomWallDeskTop4= new THREE.BoxGeometry(500,20,500,1,1,1);
    let textureWallDeskTop4 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop4 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop4});
    let wallMainDeskTop4 = new THREE.Mesh(geomWallDeskTop4, matWallDeskTop4);
    wallMainDeskTop4.position.x=18300;
    wallMainDeskTop4.position.y=13500;
    wallMainDeskTop4.position.z=1900;
    wallMainDeskTop4.castShadow = true;
    wallMainDeskTop4.receiveShadow = true;
    this.mesh.add(wallMainDeskTop4);

    let geomWallDeskTop5= new THREE.BoxGeometry(400,50,50,1,1,1);
    let textureWallDeskTop5 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop5 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop5});
    let wallMainDeskTop5 = new THREE.Mesh(geomWallDeskTop5, matWallDeskTop5);
    wallMainDeskTop5.position.x=18300;
    wallMainDeskTop5.position.y=13400;
    wallMainDeskTop5.position.z=1700;
    wallMainDeskTop5.castShadow = true;
    wallMainDeskTop5.receiveShadow = true;
    this.mesh.add(wallMainDeskTop5);

    let geomWallDeskTop6= new THREE.BoxGeometry(400,50,50,1,1,1);
    let textureWallDeskTop6 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop6 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop6});
    let wallMainDeskTop6 = new THREE.Mesh(geomWallDeskTop6, matWallDeskTop6);
    wallMainDeskTop6.position.x=18300;
    wallMainDeskTop6.position.y=13550;
    wallMainDeskTop6.position.z=1700;
    wallMainDeskTop6.castShadow = true;
    wallMainDeskTop6.receiveShadow = true;
    this.mesh.add(wallMainDeskTop6);

    let geomWallDeskTop7= new THREE.BoxGeometry(500,20,500,1,1,1);
    let textureWallDeskTop7 = new THREE.TextureLoader().load('assets/textures/bluebench.jpg' );
    let matWallDeskTop7 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallDeskTop7});
    let wallMainDeskTop7 = new THREE.Mesh(geomWallDeskTop7, matWallDeskTop7);
    wallMainDeskTop7.position.x=18300;
    wallMainDeskTop7.position.y=13900;
    wallMainDeskTop7.position.z=1900;
    wallMainDeskTop7.castShadow = true;
    wallMainDeskTop7.receiveShadow = true;
    this.mesh.add(wallMainDeskTop7);

    let geomWallMain2Cover= new THREE.BoxGeometry(150,1500,4550,1,1,1);
    let textureWallMain2Cover = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain2Cover = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain2Cover});
    let wallMain2Cover = new THREE.Mesh(geomWallMain2Cover, matWallMain2Cover);
    wallMain2Cover.position.x=18050;
    wallMain2Cover.position.y=14850;
    wallMain2Cover.position.z=0;
    wallMain2Cover.castShadow = true;
    wallMain2Cover.receiveShadow = true;
    this.mesh.add(wallMain2Cover);

    let geomWallMain3= new THREE.BoxGeometry(150,16000,4550,1,1,1);
    let textureWallMain3 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matWallMain3 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureWallMain3});
    let wallMain3 = new THREE.Mesh(geomWallMain3, matWallMain3);
    wallMain3.position.x=22050;
    wallMain3.position.y=7600;
    wallMain3.position.z=0;
    wallMain3.castShadow = true;
    wallMain3.receiveShadow = true;
    this.mesh.add(wallMain3);

    let geomFloorBase1= new THREE.BoxGeometry(4000,8000,4300,1,1,1);
    let textureFloor1 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matFloor1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureFloor1});
    let floorBase1 = new THREE.Mesh(geomFloorBase1, matFloor1);
    floorBase1.position.x=20000;
    floorBase1.position.y=7600;
    floorBase1.position.z=0;
    floorBase1.castShadow = true;
    floorBase1.receiveShadow = true;
    this.mesh.add(floorBase1);

    let geomFloorBase2= new THREE.BoxGeometry(4000,100,4300,1,1,1);
    let textureFloor2 = new THREE.TextureLoader().load('assets/textures/wall.jpg' );
    let matFloor2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureFloor2});
    let floorBase2 = new THREE.Mesh(geomFloorBase2, matFloor2);
    floorBase2.position.x=20000;
    floorBase2.position.y=15000;
    floorBase2.position.z=0;
    floorBase2.castShadow = true;
    floorBase2.receiveShadow = true;
    this.mesh.add(floorBase2);

    //buildings
    let geomBuilding= new THREE.BoxGeometry(150,10000,2000,1,1,1);
    let textureBuilding = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureBuilding});
    let wallBuilding = new THREE.Mesh(geomBuilding, matBuilding);
    wallBuilding.position.x=-17550;
    wallBuilding.position.y=4000;
    wallBuilding.position.z=18000;
    wallBuilding.castShadow = true;
    wallBuilding.receiveShadow = true;
    this.mesh.add(wallBuilding);

    let geomBuilding1= new THREE.BoxGeometry(150,5000,6500,1,1,1);
    let textureBuilding1 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureBuilding1});
    let wallBuilding1 = new THREE.Mesh(geomBuilding1, matBuilding1);
    wallBuilding1.position.x=-17550;
    wallBuilding1.position.y=2000;
    wallBuilding1.position.z=17000;
    wallBuilding1.castShadow = true;
    wallBuilding1.receiveShadow = true;
    this.mesh.add(wallBuilding1);

    let geomBuilding2= new THREE.BoxGeometry(150,17000,2000,1,1,1);
    let textureBuilding2 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding2 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, map:textureBuilding2});
    let wallBuilding2 = new THREE.Mesh(geomBuilding2, matBuilding2);
    wallBuilding2.position.x=-17550;
    wallBuilding2.position.y=4000;
    wallBuilding2.position.z=12000;
    wallBuilding2.castShadow = true;
    wallBuilding2.receiveShadow = true;
    this.mesh.add(wallBuilding2);

    let geomBuilding3= new THREE.BoxGeometry(150,13000,2000,1,1,1);
    let textureBuilding3 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding3 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding3});
    let wallBuilding3 = new THREE.Mesh(geomBuilding3, matBuilding3);
    wallBuilding3.position.x=-17550;
    wallBuilding3.position.y=4000;
    wallBuilding3.position.z=14000;
    wallBuilding3.castShadow = true;
    wallBuilding3.receiveShadow = true;
    this.mesh.add(wallBuilding3);

    let geomBuilding4= new THREE.BoxGeometry(150,7000,5000,1,1,1);
    let textureBuilding4 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding4 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding4});
    let wallBuilding4 = new THREE.Mesh(geomBuilding4, matBuilding4);
    wallBuilding4.position.x=-17550;
    wallBuilding4.position.y=3000;
    wallBuilding4.position.z=10000;
    wallBuilding4.castShadow = true;
    wallBuilding4.receiveShadow = true;
    this.mesh.add(wallBuilding4);

    let geomBuilding5= new THREE.BoxGeometry(150,4000,4000,1,1,1);
    let textureBuilding5 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding5 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding5});
    let wallBuilding5 = new THREE.Mesh(geomBuilding5, matBuilding5);
    wallBuilding5.position.x=-17550;
    wallBuilding5.position.y=1600;
    wallBuilding5.position.z=7000;
    wallBuilding5.castShadow = true;
    wallBuilding5.receiveShadow = true;
    this.mesh.add(wallBuilding5);

    let geomBuilding6= new THREE.BoxGeometry(150,7000,5000,1,1,1);
    let textureBuilding6 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding6 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding6});
    let wallBuilding6 = new THREE.Mesh(geomBuilding6, matBuilding6);
    wallBuilding6.position.x=-17550;
    wallBuilding6.position.y=3200;
    wallBuilding6.position.z=3000;
    wallBuilding6.castShadow = true;
    wallBuilding6.receiveShadow = true;
    this.mesh.add(wallBuilding6);

    let geomBuilding7= new THREE.BoxGeometry(150,17000,4000,1,1,1);
    let textureBuilding7 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding7 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding7});
    let wallBuilding7 = new THREE.Mesh(geomBuilding7, matBuilding7);
    wallBuilding7.position.x=-17550;
    wallBuilding7.position.y=6000;
    wallBuilding7.position.z=3000;
    wallBuilding7.castShadow = true;
    wallBuilding7.receiveShadow = true;
    this.mesh.add(wallBuilding7);

    let geomBuilding8= new THREE.BoxGeometry(150,19000,1300,1,1,1);
    let textureBuilding8 = new THREE.TextureLoader().load('assets/textures/buildings.jpg' );
    let matBuilding8 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding8});
    let wallBuilding8 = new THREE.Mesh(geomBuilding8, matBuilding8);
    wallBuilding8.position.x=-18050;
    wallBuilding8.position.y=6000;
    wallBuilding8.position.z=2000;
    wallBuilding8.castShadow = true;
    wallBuilding8.receiveShadow = true;
    this.mesh.add(wallBuilding8);
    
    let geomBuilding9= new THREE.BoxGeometry(150,5000,5000,1,1,1);
    let textureBuilding9 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding9 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding9});
    let wallBuilding9 = new THREE.Mesh(geomBuilding9, matBuilding9);
    wallBuilding9.position.x=-17550;
    wallBuilding9.position.y=10000;
    wallBuilding9.position.z=2000;
    wallBuilding9.castShadow = true;
    wallBuilding9.receiveShadow = true;
    this.mesh.add(wallBuilding9);

    let geomBuilding9con= new THREE.BoxGeometry(150,5000,500,1,1,1);
    let textureBuilding9con = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding9con = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding9con});
    let wallBuilding9con = new THREE.Mesh(geomBuilding9con, matBuilding9con);
    wallBuilding9con.position.x=-17550;
    wallBuilding9con.position.y=10500;
    wallBuilding9con.position.z=0;
    wallBuilding9con.castShadow = true;
    wallBuilding9con.receiveShadow = true;
    this.mesh.add(wallBuilding9con);

    let geomBuilding10= new THREE.BoxGeometry(150,7000,5000,1,1,1);
    let textureBuilding10 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding10 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding10});
    let wallBuilding10 = new THREE.Mesh(geomBuilding10, matBuilding10);
    wallBuilding10.position.x=-17550;
    wallBuilding10.position.y=3000;
    wallBuilding10.position.z=0;
    wallBuilding10.castShadow = true;
    wallBuilding10.receiveShadow = true;
    this.mesh.add(wallBuilding10);

    let geomBuilding10con= new THREE.BoxGeometry(150,5000,500,1,1,1);
    let textureBuilding10con = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding10con = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding10con});
    let wallBuilding10con = new THREE.Mesh(geomBuilding10con, matBuilding10con);
    wallBuilding10con.position.x=-17550;
    wallBuilding10con.position.y=4500;
    wallBuilding10con.position.z=-2000;
    wallBuilding10con.castShadow = true;
    wallBuilding10con.receiveShadow = true;
    this.mesh.add(wallBuilding10con);

    let geomBuilding11= new THREE.BoxGeometry(150,3000,4000,1,1,1);
    let textureBuilding11 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding11 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding11});
    let wallBuilding11 = new THREE.Mesh(geomBuilding11, matBuilding11);
    wallBuilding11.position.x=-17550;
    wallBuilding11.position.y=1000;
    wallBuilding11.position.z=-3000;
    wallBuilding11.castShadow = true;
    wallBuilding11.receiveShadow = true;
    this.mesh.add(wallBuilding11);

    let geomBuilding12= new THREE.BoxGeometry(150,2500,4000,1,1,1);
    let textureBuilding12 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding12 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding12});
    let wallBuilding12 = new THREE.Mesh(geomBuilding12, matBuilding12);
    wallBuilding12.position.x=-17550;
    wallBuilding12.position.y=1000;
    wallBuilding12.position.z=-4000;
    wallBuilding12.castShadow = true;
    wallBuilding12.receiveShadow = true;
    this.mesh.add(wallBuilding12);

    let geomBuilding13= new THREE.BoxGeometry(150,5000,4000,1,1,1);
    let textureBuilding13 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding13 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding13});
    let wallBuilding13 = new THREE.Mesh(geomBuilding13, matBuilding13);
    wallBuilding13.position.x=-17550;
    wallBuilding13.position.y=1000;
    wallBuilding13.position.z=-6000;
    wallBuilding13.castShadow = true;
    wallBuilding13.receiveShadow = true;
    this.mesh.add(wallBuilding13);

    let geomBuilding14= new THREE.BoxGeometry(150,4000,4000,1,1,1);
    let textureBuilding14 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding14 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding14});
    let wallBuilding14 = new THREE.Mesh(geomBuilding14, matBuilding14);
    wallBuilding14.position.x=-17550;
    wallBuilding14.position.y=500;
    wallBuilding14.position.z=-8000;
    wallBuilding14.castShadow = true;
    wallBuilding14.receiveShadow = true;
    this.mesh.add(wallBuilding14);

    let geomBuilding15= new THREE.BoxGeometry(150,9000,2000,1,1,1);
    let textureBuilding15 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding15 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding15});
    let wallBuilding15 = new THREE.Mesh(geomBuilding15, matBuilding15);
    wallBuilding15.position.x=-17550;
    wallBuilding15.position.y=3000;
    wallBuilding15.position.z=-7000;
    wallBuilding15.castShadow = true;
    wallBuilding15.receiveShadow = true;
    this.mesh.add(wallBuilding15);

    let geomBuilding16= new THREE.BoxGeometry(150,11000,7000,1,1,1);
    let textureBuilding16 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding16 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding16});
    let wallBuilding16 = new THREE.Mesh(geomBuilding16, matBuilding16);
    wallBuilding16.position.x=-17550;
    wallBuilding16.position.y=5000;
    wallBuilding16.position.z=-13000;
    wallBuilding16.castShadow = true;
    wallBuilding16.receiveShadow = true;
    this.mesh.add(wallBuilding16);

    let geomBuilding16con= new THREE.BoxGeometry(150,2000,3000,1,1,1);
    let textureBuilding16con = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding16con = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding16con});
    let wallBuilding16con = new THREE.Mesh(geomBuilding16con, matBuilding16con);
    wallBuilding16con.position.x=-17550;
    wallBuilding16con.position.y=10500;
    wallBuilding16con.position.z=-12000;
    wallBuilding16con.castShadow = true;
    wallBuilding16con.receiveShadow = true;
    this.mesh.add(wallBuilding16con);

    let geomBuilding16con1= new THREE.BoxGeometry(150,9000,1000,1,1,1);
    let textureBuilding16con1 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding16con1 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding16con1});
    let wallBuilding16con1 = new THREE.Mesh(geomBuilding16con1, matBuilding16con1);
    wallBuilding16con1.position.x=-17550;
    wallBuilding16con1.position.y=9000;
    wallBuilding16con1.position.z=-11000;
    wallBuilding16con1.castShadow = true;
    wallBuilding16con1.receiveShadow = true;
    this.mesh.add(wallBuilding16con1);

    let geomBuilding17= new THREE.BoxGeometry(150,12000,7000,1,1,1);
    let textureBuilding17 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding17 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding17});
    let wallBuilding17 = new THREE.Mesh(geomBuilding17, matBuilding17);
    wallBuilding17.position.x=-17550;
    wallBuilding17.position.y=2000;
    wallBuilding17.position.z=-17000;
    wallBuilding17.castShadow = true;
    wallBuilding17.receiveShadow = true;
    this.mesh.add(wallBuilding17);

    let geomBuilding18= new THREE.BoxGeometry(150,15000,4000,1,1,1);
    let textureBuilding18 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding18 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding18});
    let wallBuilding18 = new THREE.Mesh(geomBuilding18, matBuilding18);
    wallBuilding18.position.x=-17550;
    wallBuilding18.position.y=2000;
    wallBuilding18.position.z=-22000;
    wallBuilding18.castShadow = true;
    wallBuilding18.receiveShadow = true;
    this.mesh.add(wallBuilding18);

    let geomBuilding19= new THREE.BoxGeometry(150,15000,4000,1,1,1);
    let textureBuilding19 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding19 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding19});
    let wallBuilding19 = new THREE.Mesh(geomBuilding19, matBuilding19);
    wallBuilding19.position.x=-17550;
    wallBuilding19.position.y=-2000;
    wallBuilding19.position.z=-26000;
    wallBuilding19.castShadow = true;
    wallBuilding19.receiveShadow = true;
    this.mesh.add(wallBuilding19);

    let geomBuilding20= new THREE.BoxGeometry(150,25000,4000,1,1,1);
    let textureBuilding20 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding20 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding20});
    let wallBuilding20 = new THREE.Mesh(geomBuilding20, matBuilding20);
    wallBuilding20.position.x=-17550;
    wallBuilding20.position.y=-5000;
    wallBuilding20.position.z=-30000;
    wallBuilding20.castShadow = true;
    wallBuilding20.receiveShadow = true;
    this.mesh.add(wallBuilding20);

    let geomBuilding21= new THREE.BoxGeometry(150,25000,4000,1,1,1);
    let textureBuilding21 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding21 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding21});
    let wallBuilding21 = new THREE.Mesh(geomBuilding21, matBuilding21);
    wallBuilding21.position.x=-17550;
    wallBuilding21.position.y=-8000;
    wallBuilding21.position.z=20000;
    wallBuilding21.castShadow = true;
    wallBuilding21.receiveShadow = true;
    this.mesh.add(wallBuilding21);

    let geomBuilding22= new THREE.BoxGeometry(150,25000,4000,1,1,1);
    let textureBuilding22 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding22 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding22});
    let wallBuilding22 = new THREE.Mesh(geomBuilding22, matBuilding22);
    wallBuilding22.position.x=-17550;
    wallBuilding22.position.y=-5000;
    wallBuilding22.position.z=22000;
    wallBuilding22.castShadow = true;
    wallBuilding22.receiveShadow = true;
    this.mesh.add(wallBuilding22);

    let geomBuilding23= new THREE.BoxGeometry(150,25000,4000,1,1,1);
    let textureBuilding23 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding23 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding23});
    let wallBuilding23 = new THREE.Mesh(geomBuilding23, matBuilding23);
    wallBuilding23.position.x=-17550;
    wallBuilding23.position.y=-2000;
    wallBuilding23.position.z=24000;
    wallBuilding23.castShadow = true;
    wallBuilding23.receiveShadow = true;
    this.mesh.add(wallBuilding23);

    let geomBuilding24= new THREE.BoxGeometry(150,25000,4000,1,1,1);
    let textureBuilding24 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding24 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding24});
    let wallBuilding24 = new THREE.Mesh(geomBuilding24, matBuilding24);
    wallBuilding24.position.x=-17550;
    wallBuilding24.position.y=-9000;
    wallBuilding24.position.z=28000;
    wallBuilding24.castShadow = true;
    wallBuilding24.receiveShadow = true;
    this.mesh.add(wallBuilding24);

    let geomBuilding25= new THREE.BoxGeometry(150,25000,2000,1,1,1);
    let textureBuilding25 = new THREE.TextureLoader().load('assets/textures/ground.jpg' );
    let matBuilding25 = new THREE.MeshStandardMaterial({shading:THREE.FlatShading3, map:textureBuilding25});
    let wallBuilding25 = new THREE.Mesh(geomBuilding25, matBuilding25);
    wallBuilding25.position.x=-17550;
    wallBuilding25.position.y=-2000;
    wallBuilding25.position.z=30000;
    wallBuilding25.castShadow = true;
    wallBuilding25.receiveShadow = true;
    this.mesh.add(wallBuilding25);





    var loader = new THREE.GLTFLoader();
    loader.load( 'assets/models/cat/scene.gltf', function ( gltf ) {
    gltf.scene.scale.set(1,1,1);
    gltf.scene.position.set(4550,3215,180);
    gltf.scene.rotation.set(0, 4.7, 0);
    gltf.scene.castShadow = true;
    gltf.scene.receiveShadow = true;
	  scene.add( gltf.scene );
    }, undefined, function ( error ) {
	  console.error( error );

} );

  var loader = new THREE.GLTFLoader();
  loader.load( 'assets/models/girl/scene.glb', function ( gltf ) {
  gltf.scene.scale.set( 30, 30, 30);
  gltf.scene.position.set(4530,3040,-50);
  gltf.scene.rotation.set(0, 1.9, -0.8);
  gltf.scene.castShadow = true;
  gltf.scene.receiveShadow = true;
  scene.add( gltf.scene );
  }, undefined, function ( error ) {
  console.error( error );

} );
    

let mainBackground = new THREE.TextureLoader().load('assets/textures/background1.jpg' );
scene.background=(mainBackground)
};

Grass = function(){
let geom = new THREE.PlaneGeometry(10000, 10000, 100);
geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
let textureGrass = new THREE.TextureLoader().load( 'assets/textures/buildings.jpg' );
let mat = new THREE.MeshBasicMaterial({
  color:Colors.blue,
  transparent:false,
  opacity:1,
  shading:THREE.FlatShading,
  map: textureGrass
});


this.mesh = new THREE.Mesh(geom, mat);
this.mesh.receiveShadow = true;
}



// 3D Models
let grass;
let bedroom;

function createBedroom(){
bedroom = new Bedroom();
bedroom.mesh.scale.set(.25,.25,.25);
bedroom.mesh.position.y = 100;
scene.add(bedroom.mesh);
}

function createGrass(){
grass = new Grass();
scene.add(grass.mesh);
}



function animate(){
controls.update();
starGeo.vertices.forEach(p => {
  p.velocity += p.acceleration
  p.x -= p.velocity;
 
  if (p.x < -200) {
    p.x = 200;
    p.velocity = 0;
  }
});
starGeo.verticesNeedUpdate = true;

renderer.render(scene, camera);
requestAnimationFrame( animate );
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 32) {
        camera.position.x = 5050;
        camera.position.y = 3350;
        camera.position.z = 0;
        camera.rotation.x = 0;
        camera.rotation.y = -20;
        camera.rotation.z = 0;
    }
}
}


function init(event){
createScene();
createLights();
createBedroom();
createGrass();
createStars();
createStars1();
animate();
}

window.addEventListener('load', init, false);