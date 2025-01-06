import {Environment, OrbitControls, OrthographicCamera} from "@react-three/drei";
import {useRef} from "react";

export const Container = ({children}) => {
	const shadowCameraRef = useRef();
	const light = useRef();

	return <>
		<OrbitControls />
		<Environment preset='city' />
		<directionalLight
			ref={light}
			intensity={0.65}
			castShadow
			position={[-15, 10, 15]}
			shadow-mapSize-width={2048}
			shadow-mapSize-height={2048}
			shadow-bias={-0.00005}
		>
			<OrthographicCamera
				ref={shadowCameraRef}
				attach={"shadow-camera"}
			/>
		</directionalLight>
		{children}
	</>
}

export default Container;