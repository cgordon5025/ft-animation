import logo from './logo.svg';
import './App.css';
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Canvas } from '@react-three/fiber';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const loader = new GLTFLoader()
loader.load('./3DImages/NEW_dog.psd', function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.log(error)
})
const render = () => {
  renderer.render(scene, camera)
}

document.body.appendChild(renderer.domElement)
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>

      </div>
      <p>Test area</p>
      <Canvas></Canvas>
      {render()}
    </>
  );
}

export default App;
