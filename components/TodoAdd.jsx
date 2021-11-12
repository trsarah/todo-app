import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export default function TodoAdd (props) {


    const { onCreate } = props;

    const [inputValue, setInputValue] = React.useState("");
    return (
        <Grid container>
                <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add Todo here"
                        value={inputValue}
                        onChange={v => setInputValue(v.target.value)}
                        fullWidth                 
                    />
                </Grid>
                <Grid xs={2} md={1} item>
                    <Button
                        color="info"
                        variant="outlined"
                        onClick={() => onCreate(inputValue)}
                        sx={{
                            margin: 3,
                            height: 55,
                        }}
                    >
                        Add
                    </Button>
                </Grid>
        </Grid>
    )

}