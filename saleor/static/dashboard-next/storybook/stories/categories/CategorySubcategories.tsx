import { storiesOf } from "@storybook/react";
import * as React from "react";

import CategorySubcategories from "../../../categories/components/CategorySubcategories";
import Decorator from "../../Decorator";


storiesOf("Views / Categories / Category subcategories", module)
  .addDecorator(Decorator)
  .add("without data", () => (
    <CategorySubcategories
    />
  ))
  .add("adding data", () => (
    <CategorySubcategories
    />
  ));
