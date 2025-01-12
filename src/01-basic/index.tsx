import React from "react";
import * as motion from "motion/react-client";

const BasicPage = () => {
  return (
    <div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "#4298b5",
          height: 200,
          width: 200,
          borderRadius: 5,
        }}
      />
    </div>
  );
};

export default BasicPage;
