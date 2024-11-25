import { Button, Card, CardHeader, Checkbox, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode, useState } from "react";

import { DeviceShort } from "../../../../models/Device";

function not(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => !b.includes(value));
}

function intersection(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.includes(value));
}

function union(a: readonly number[], b: readonly number[]) {
    return [...a, ...not(b, a)];
}


interface TransferListProps {
    infos: DeviceShort[]
}

export default function TransferList(props: TransferListProps) {

    const [checked, setChecked] = useState<readonly number[]>([]);
    const [left, setLeft] = useState<readonly number[]>([0, 1, 2, 3]);
    const [right, setRight] = useState<readonly number[]>([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items: readonly number[]) =>
        intersection(checked, items).length;

    const handleToggleAll = (items: readonly number[]) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title: ReactNode, items: DeviceShort[] = props.infos) => (
        <Card>
            <CardHeader sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={
                            numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                        inputProps={{
                            'aria-label': 'all items selected',
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 200,
                    height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                
                {items.map((info: DeviceShort) => {
                    const labelId = `transfer-list-all-item-${info.id}-label`;
                    {console.log(info.brand)}
                    return (
                        <ListItemButton
                        
                            role="listitem"
                            onClick={handleToggle(1)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.includes(1)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId}>{info.serial}</ListItemText>
                        </ListItemButton>
                    );
                })}
            </List>
        </Card>
    );

    return (
        <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid item>{customList('Choices', left)}</Grid>
            <Grid item>
                <Grid container direction="column" sx={{ alignItems: 'center' }}>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>
            <Grid item>{customList('Chosen', right)}</Grid>
        </Grid>
    );

}
