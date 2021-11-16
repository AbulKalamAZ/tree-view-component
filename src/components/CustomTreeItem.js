import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useTreeItemStyles = makeStyles((theme) => ({
  "@global": {
    ".MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label":
      {
        backgroundColor: "rgba(0,0,0,0)",
      },
  },
  root: {
    color: "#ffffff",

    "&:hover > $content": {
      border: "1px solid #337526",
    },

    "&:focus > $content, &$selected > $content": {
      backgroundColor: "#53a043c2",
      border: "1px solid #337526",
    },
    "&:focus > $content $label": {
      backgroundColor: "rgba(0,0,0,0)",
    },

    "&:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
  content: {
    color: "#ffffff",
    border: "1px solid transparent",
    borderRadius: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(2),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function CustomTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant='body2' className={classes.labelText}>
            {labelText}
          </Typography>
          {LabelIcon ? (
            <LabelIcon
              color='inherit'
              fontSize='small'
              className={classes.labelIcon}
            />
          ) : null}
        </div>
      }
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

export default CustomTreeItem;
