import dynamic from "next/dynamic";
import Container from "../Container";

const Client = dynamic(() => import("./Client"));

export default function HomeAnimation() {
  return (
    <Container>
      <div className="relative  min-h-screen-100">
        <Client />
      </div>
    </Container>
  );
}
