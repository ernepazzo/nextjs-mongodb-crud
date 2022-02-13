import { Form, Grid, GridColumn } from "semantic-ui-react";

export default function TaskFormPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Grid centered verticalAlign="middle" columns="3" style={{height: "80vh"}}>
      <Grid.Row>
        <GridColumn textAlign="center">
          <Form onSubmit={}>
            <Form.Input label="Title" placeholder="Title" />
            <Form.TextArea label="Description" placeholder="Description" />
          </Form>
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
}
