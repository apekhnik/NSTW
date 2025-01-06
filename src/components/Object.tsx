import {RigidBody} from "@react-three/rapier";
import React, {useRef} from "react";

export const Object =  () => {
	const body = useRef();

	return <RigidBody
		ref={ body }
		canSleep={ false }
		type='dynamic'
		restitution={ 0.7 }
		friction={ 1 }
		linearDamping={ 0.5 }
		angularDamping={ 0.5 }
		position={ [ 7, 5, 1 ] }
	>
		<mesh castShadow>
			{/*<icosahedronGeometry args={ [ 0.3, 1 ] } />*/}
			<boxGeometry args={[1,1,1]}/>
			<meshStandardMaterial flatShading color="mediumpurple" />
		</mesh>
	</RigidBody>
}

export default Object;