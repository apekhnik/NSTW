import React, {useMemo, useRef, useState} from 'react'
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {RigidBody} from "@react-three/rapier";
import vertex from '../shaders/water/vertex.glsl'
import fragment from '../shaders/water/fragment.glsl'

export const Ground = ({position = [ 0, 0, 0]}) => {
	const ref = useRef(null);
	const [timeOffset] = useState(() =>
		(Math.random() * Math.PI * 0.2)
	);
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


	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		uniform.uTime.value = time;

		const x = Math.sin(time + timeOffset) * 1.25;


		const rotation = new THREE.Quaternion();
		rotation.setFromEuler(new THREE.Euler(0, x, 0));
		// ref.current.setNextKinematicRotation(rotation);

	})

	return <RigidBody type='fixed'>
		<mesh
			scale={[40, 0.2, 40]}
			position={position}
			receiveShadow
		>

			<boxGeometry args={[1, 1, 1]}/>
			<meshStandardMaterial flatShading color="mediumpurple"/>
		</mesh>
	</RigidBody>
}

export default Ground;