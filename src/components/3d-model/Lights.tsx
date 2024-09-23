const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight color="white" position={[-6, 5, 2]} intensity={3} />
      <directionalLight color="white" position={[6, 5, 2]} intensity={3} />
    </>
  );
};

export default Lights;
