import "reflect-metadata";
import { Container } from "../../src/index";
import { Driver } from "./Driver";
import { FakeBus } from "./FakeBus";
import { FakeCar } from "./FakeCar";
import { Bus } from "./Bus";
import { Car } from "./Car";

// provide fake implementations
Container.set([{ id: Bus, value: new FakeBus() }, { id: Car, value: new FakeCar() }]);

// drive!
const driver = Container.get(Driver);
driver.driveBus();
driver.driveCar();
