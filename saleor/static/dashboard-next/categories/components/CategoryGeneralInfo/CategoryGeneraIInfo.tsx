import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

import Container from "../../../components/Container";
import Form from "../../../components/Form";
import FormSpacer from "../../../components/FormSpacer";
import CardTitle from "../../../components/CardTitle";
import i18n from "../../../i18n";


interface CategoryForm {
    description: string;
    name: string;
}

interface CategoryGeneralInfoProps {
    category?: CategoryForm;
    errors?: Array<{
        field: string;
        message: string;
    }>;
    disabled?: boolean;
    variant?: "add" | "edit";
    onBack?: () => void;
    onSubmit?: (data: CategoryForm) => void;

}

const CategoryGeneralInfo: React.StatelessComponent<CategoryGeneralInfoProps> = ({
    category,
    disabled,
    onSubmit,
    errors
}) => {
    const errorList: { [key: string]: string } = errors
    ? errors.reduce((acc, curr) => {
        acc[curr.field] = curr.message;
        return acc;
      }, {})
    : {};
    return (
        <Form
            initial={{
                description: category ? category.description : "",
                name: category ? category.name : ""
            }}
            onSubmit={onSubmit}
            key={category === undefined ? "loading" : "ready"}>
            {({ data, change }) => (
                <Container width="md">
                    <Card>
                        <CardTitle
                            title={i18n.t("General Information")}
                        />
                        <CardContent>
                            <TextField
                                style={{width: '50%'}}
                                autoFocus
                                disabled={disabled}
                                value={data && data.name}
                                error={!!errorList.name}
                                helperText={errorList.name}
                                label={i18n.t("Name", { context: "category" })}
                                name="name"
                                onChange={change} />
                            <FormSpacer />
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                disabled={disabled}
                                value={data && data.description}
                                error={!!errorList.description}
                                label={i18n.t("Description", { context: "category" })}
                                name="description"
                                helperText={
                                    errorList.description ||
                                    i18n.t("Select text to enable text-formating tools.", { context: "field" })
                                }
                                onChange={change}  />
                        </CardContent>
                    </Card>
                </Container>
            )}
        </Form>
    )

}

export default CategoryGeneralInfo;
