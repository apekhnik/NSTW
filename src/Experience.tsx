import {Canvas} from "@react-three/fiber";
import {World} from "./components/World.tsx";
import Container from "./components/Container.tsx";
import Axes from "./components/Axes.tsx";
import {Perf} from "r3f-perf";
import {KeyboardControls} from "@react-three/drei";

export const Experience = () => {
	const keyBoardMap = [
		{ name: "forward", keys: ["ArrowUp", "KeyW"] },
		{ name: "backward", keys: ["ArrowDown", "KeyS"] },
		{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
		{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
		{ name: "run", keys: ["Shift"] },
		{ name: "jump", keys: ["Space"] },
	];


	return <KeyboardControls map={keyBoardMap}>;
		<Canvas
			shadows
			style={{ width: "100vw", height: "100vh" }}
			camera={{ position: [25, 25, 25], near: 0.1, fov: 45 }}
		>
			<Perf />

			<Container>
				<World/>
			</Container>
			<Axes/>
		</Canvas>
	</KeyboardControls>
}

export default Experience