import { storiesOf } from "@storybook/react";
import * as React from "react";

import CategoryBackgroundImage from "../../../categories/components/CategoryBackgroundImage";
import Decorator from "../../Decorator";


storiesOf("Views / Categories / Category background image", module)
  .addDecorator(Decorator)
  .add("with data", () => (
    <CategoryBackgroundImage
    />
  ))
  .add("without data", () => (
    <CategoryBackgroundImage
    />
  ));
