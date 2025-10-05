import React, { useContext } from "react";
import MainImage from "../../assets/AboutUs.jfif";
import MainSection from "../MainSection/MainSection";
import imageShip from "../../assets/ex112.png";
import { ContextData } from "../Context/ContextData";
import { useEffect } from "react";
import GoalsNumber from "../GoalsNumber/GoalsNumber";
import TrustedBy from "../TrustedBy/TrustedBy";
import SecSection from "../SecondSection/SecSection";
import Mission from "../MissionAndVission/Mission";
import Form from "../Form/Form";
export default function AboutUs() {
  return (
    <>
      <MainSection image={MainImage} text="About Us" />
      <Mission />
      <SecSection
        image={imageShip}
        who={"Who We Are"}
        p={
          <>
          <div className="flex flex-wrap gap-y-3">
Since 2015, Expand Trading has been bridging global supply networks with local execution
excellence.
<p>

We combine a strong sourcing base in China with operational teams in Saudi Arabia, UAE, and the UK. This allows us to deliver tailored solutions, competitive pricing, and rapid execution for projects of any scale.
</p>

<p>
We are more than a supplier — we are a strategic partner helping clients achieve efficiency, safety, and technological advancement.          
        </p>
        </div>
          </>
        }
      />

      <GoalsNumber />

      <TrustedBy />

      <Form />
    </>
  );
}
