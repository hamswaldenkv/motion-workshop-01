import * as motion from "motion/react-client";

const styleCard = {
  backgroundColor: "#4298b5",
  height: 200,
  width: 200,
  borderRadius: 5,
};

const ScalePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <motion.div
        style={styleCard}
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.4 } }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.6 } }}
        style={{ ...styleCard, backgroundColor: "#1cc7d0" }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.8 } }}
        style={{ ...styleCard, backgroundColor: "#fb8a2e" }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ ...styleCard, backgroundColor: "#6a67ce" }}
      />
    </div>
  );
};

export default ScalePage;
