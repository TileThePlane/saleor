import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import Button from "@material-ui/core/Button";

import Container from "../../../components/Container";
import Form from "../../../components/Form";
import CardTitle from "../../../components/CardTitle";
import i18n from "../../../i18n";


interface CategoryBackgroundImageProps {
}

const CategoryBackgroundImage: React.StatelessComponent<CategoryBackgroundImageProps> = () => {
    return (
        <Form>
            <Container width="md">
                <Card>
                    <CardTitle
                        title={i18n.t("Background image (optional)")}
                        toolbar={
                            <Button variant="flat" color="secondary" >
                                {i18n.t("Upload image")}
                            </Button>
                        }
                    />
                    <CardContent>
                    </CardContent>
                </Card>
            </Container>
        </Form>
    )

}

export default CategoryBackgroundImage;
