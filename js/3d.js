var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 2, 2000 );
var canvas = document.getElementById('3d');
var renderer = new THREE.WebGLRenderer();
renderer.setSize(canvas.clientWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry( 5, 5, 20, 30 );
var material = new THREE.MeshBasicMaterial( {color: 0x0000ff, wireframe: true});
var cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder);

camera.position.z = 550;
// camera.position.x = -10;
// camera.position.set(400, 0, 0);
// camera.pozition.x = 1;
camera.lookAt(scene.position);

// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.5;
// controls.screenSpacePanning = false;
// controls.minDistance = 100;
// controls.maxDistance = 500;
// controls.maxPolarAngle = Math.PI / 2;

controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 15.0;
controls.zoomSpeed = 5;
controls.panSpeed = 5;
controls.noZoom = true;
controls.noPan = true;
controls.staticMoving = false;
controls.dynamicDampingFactor = 0.35;
controls.update();

var ambient = new THREE.AmbientLight( 0xffffff );

var directLight = new THREE.DirectionalLight( 0xffffff, 1 );
directLight.position.set(0, 10, 1);

var sphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);

// scene.add(areaLight);
// scene.add(ambient);
scene.add(directLight);
// scene.add(sphereLight);

// var dae,
//     loader = new THREE.ColladaLoader();
// function loadCollada( collada ) {
//   dae = collada.scene;
//   dae.position.set(0.4, 0, 0.8);
//   scene.add(dae);
// }
// loader.options.convertUpAxis = true;
// loader.load( 'models/Untitled_2.dae', loadCollada);

// Load background and generate envMap
var loadEnvTexture = new THREE.RGBELoader().setPath( 'models/' );
loadEnvTexture.load( 'lakes_1k.hdr', function ( texture ) {
	texture.encoding = THREE.RGBEEncoding;
	texture.minFilter = THREE.NearestFilter;
	texture.magFilter = THREE.NearestFilter;
	texture.flipY = true;
	var cubeGenerator = new THREE.EquirectangularToCubeGenerator( texture, { resolution: 1024 } );
	cubeGenerator.update( renderer );
	background = cubeGenerator.renderTarget;
	var pmremGenerator = new THREE.PMREMGenerator( cubeGenerator.renderTarget.texture );
	pmremGenerator.update( renderer );
	var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker( pmremGenerator.cubeLods );
	pmremCubeUVPacker.update( renderer );
	envTexture = pmremCubeUVPacker.CubeUVRenderTarget.texture;
	pmremGenerator.dispose();
	pmremCubeUVPacker.dispose();
	//
	buildGUI();
	initScene( scenes[ state.scene ] );
	animate();
} );

// var textureLoader = new THREE.TextureLoader();
// var envTexture = textureLoader.load ('models/hdri.jpg');

var content;
var loader = new THREE.GLTFLoader();
loader.load ('models/Untitled 2.gltf',
	function (gltf) {
		content = gltf.scene;
		
		content.traverse( function ( node ) {
			if ( node.material && ( node.material.isMeshStandardMaterial ||
			( node.material.isShaderMaterial && node.material.envMap !== undefined ) ) ) {
			node.material.envMap = envTexture;
			node.material.envMapIntensity = 1;
			}
		} );

		scene.add(content);
		// content.rotation.set (-0.3, 0.1, -0.45);
		content.rotation.set (-0.4, -0.1, -0.4);
	}
);

// var loader = new THREE.OBJLoader2();
// var callbackOnLoad = function ( event ) {
// 	scene.add( event.detail.loaderRootNode );
// };
// loader.load('models/Untitled_2.obj', callbackOnLoad, null, null, null, false);

renderer.gammaFactor = 2.2;
renderer.gammaOutput = true;
renderer.physicallyCorrectLights = true;

function render() {
	requestAnimationFrame(render);
	cylinder.rotation.z += 0.01;
	cylinder.rotation.y += 0.1;
	content.rotation.y += 0.01;
	controls.update();
	renderer.render(scene, camera);
}

render();