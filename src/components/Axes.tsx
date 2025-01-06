import {useThree} from "@react-three/fiber";
import {AxesHelper} from "three";
import {useEffect} from "react";

const Axes = () => {
	const { scene } = useThree();

	useEffect(() => {
		const axesHelper = new AxesHelper(5); // Размер осей
		scene.add(axesHelper);

		// Убираем оси при размонтировании компонента
		return () => {
			scene.remove(axesHelper);
		};
	}, [scene]);

	return null;
}

export default Axes;