import { storiesOf } from "@storybook/react";
import * as React from "react";

import CategoryGeneralInfo from "../../../categories/components/CategoryGeneralInfo";
import {
  category as categoryFixture,
  errors
} from "../../../categories/fixtures";
import Decorator from "../../Decorator";

const category = categoryFixture("");

storiesOf("Views / Categories / Category general info", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <CategoryGeneralInfo
      category={category}
      onBack={() => undefined}
      onSubmit={() => undefined}
    />
  ))
  .add("when loading", () => (
    <CategoryGeneralInfo
      category={category}
      disabled={true}
      onBack={() => undefined}
      onSubmit={() => undefined}
    />
  ))
  .add("with errors", () => (
    <CategoryGeneralInfo
      category={category}
      errors={errors}
      onBack={() => undefined}
      onSubmit={() => undefined}
    />
  ));
