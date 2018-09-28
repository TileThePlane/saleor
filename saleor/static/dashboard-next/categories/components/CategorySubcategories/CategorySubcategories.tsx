import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import * as React from "react";
import Button from "@material-ui/core/Button";

import Container from "../../../components/Container";
import Form from "../../../components/Form";
import CardTitle from "../../../components/CardTitle";
import i18n from "../../../i18n";
// import Skeleton from "../../../components/Skeleton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from '@material-ui/core/Divider';
import AddIcon from "@material-ui/icons/Add";


interface CategorySubcategoriesProps {
    description?: string;
    onEdit?();
}

const CategorySubcategories: React.StatelessComponent<CategorySubcategoriesProps> = ({
    // description,
    onEdit
}) => {
    return (
        <Form>
            <Container width="md">
                <Card>
                    <CardTitle
                        title={i18n.t("Subcategories")}
                        toolbar={
                            <Button variant="flat" color="secondary" onClick={onEdit}>
                                {i18n.t("Add subcategory")}
                            </Button>
                        }
                    />
                    <CardContent>
                        <Typography>Add subcategories to help you organize your products</Typography>
                    </CardContent>
                    <CardContent>
                        <TextField
                            margin="normal"
                            style={{ width: '30%', marginRight: '2rem' }}
                            label={i18n.t("Category Name", { context: "category" })}
                            name="categoryName"
                        />
                        <TextField
                            style={{ width: '60%' }}
                            label={i18n.t("Category Description", { context: "category" })}
                            name="categoryDescription"
                        />
                    </CardContent>
                    <Divider
                        style={{ margin: '0 1rem' }} />
                    <Button variant="flat" color="secondary" onClick={onEdit}>
                        {i18n.t("Add subcategory")}                    
                        <AddIcon />
                    </Button>

                </Card>
            </Container>
        </Form>
    )

}

export default CategorySubcategories;
