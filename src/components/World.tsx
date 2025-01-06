import {Physics, RigidBody} from "@react-three/rapier";
import {useFrame} from "@react-three/fiber";
import Ground from "./Ground.tsx";
import Object from "./Object.tsx";
import RagingSea from "./scene/raging-sea/RagingSea.tsx";

export const World  = () => {
	useFrame((state) => {

	})

	return <>
		<Physics debug>
			<Ground/>
			{/*<Ground position={[ -25,0,0]}/>*/}
			<Object/>
			<RagingSea/>
		</Physics>

	</>
}