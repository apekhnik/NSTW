import * as THREE from "three";
import fragment from "../../../shaders/water/fragment.glsl";
import vertex from "../../../shaders/water/vertex.glsl";
import React, {useMemo} from "react";
import {useFrame} from "@react-three/fiber";

const RagingSea = () => {

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		uniform.uTime.value = time;
	})

	const uniform = useMemo(() => {
		return  {
			uTime: { value: 0 },

			uBigWavesElevation: { value: 0.2 },
			uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
			uBigWavesSpeed: { value: 0.75 },

			uSmallWavesElevation: { value: 0.15 },
			uSmallWavesFrequency: { value: 3 },
			uSmallWavesSpeed: { value: 0.2 },
			uSmallIterations: { value: 4 },

			uDepthColor: { value: new THREE.Color('#186691') },
			uSurfaceColor: { value: new THREE.Color('#9bd8ff') },
			uColorOffset: { value: 0.08 },
			uColorMultiplier: { value: 5 }
		}
	}, [])

	return <mesh
		geometry={new THREE.PlaneGeometry(10, 10, 512, 512)}
		// scale={[4, 0.2, 4]}
		position={[15,0.5,0]}
		rotation={[-Math.PI / 2, 0, 0]}
		receiveShadow
	>
		<shaderMaterial
			fragmentShader={fragment}
			vertexShader={vertex}
			uniforms={uniform}
		/>
	</mesh>
}

export default RagingSea