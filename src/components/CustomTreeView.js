import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";

import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import CustomTreeItem from "./CustomTreeItem";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    flexGrow: 1,
    maxWidth: 300,
  },
});

export default function GmailTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<KeyboardArrowDown />}
      defaultExpandIcon={<KeyboardArrowRight />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <CustomTreeItem nodeId='1' labelText='One' />
      <CustomTreeItem nodeId='2' labelText='Two' />
      <CustomTreeItem nodeId='3' labelText='Three'>
        <CustomTreeItem
          nodeId='5'
          labelText='Three One'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='6'
          labelText='Three Two'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='7'
          labelText='Three Three'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='8'
          labelText='Three Four'
          labelIcon={DeleteIcon}
        />
      </CustomTreeItem>
      <CustomTreeItem nodeId='4' labelText='Four'>
        <CustomTreeItem
          nodeId='9'
          labelText='Four One'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='10'
          labelText='Four Two'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='11'
          labelText='Four Three'
          labelIcon={DeleteIcon}
        >
          <CustomTreeItem
            nodeId='17'
            labelText='Four Three One'
            labelIcon={DeleteIcon}
          />
          <CustomTreeItem
            nodeId='18'
            labelText='Four Three Two'
            labelIcon={DeleteIcon}
          />
          <CustomTreeItem
            nodeId='19'
            labelText='Four Three Three'
            labelIcon={DeleteIcon}
          />
          <CustomTreeItem
            nodeId='20'
            labelText='Four Three Four'
            labelIcon={DeleteIcon}
          />
        </CustomTreeItem>
        <CustomTreeItem
          nodeId='12'
          labelText='Four Four'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='13'
          labelText='Four Five'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='14'
          labelText='Four Six'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='15'
          labelText='Four Seven'
          labelIcon={DeleteIcon}
        />
        <CustomTreeItem
          nodeId='16'
          labelText='Four Eight'
          labelIcon={DeleteIcon}
        />
      </CustomTreeItem>
    </TreeView>
  );
}
