import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabCard from "../TabCard";
import { useJobContext } from "../../context/jobContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <span style={{ display:"block" }} >{children}</span>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function JobsTabs() {
  const [value, setValue] = React.useState(0);
  const { state } = useJobContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "820px" }}>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab label="Best Matches" {...a11yProps(0)} />
          <Tab label="Most Recent" {...a11yProps(1)} />
          <Tab
            label={"Saved Jobs (" + state.count + ")"}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      
      <TabPanel value={value} index={0}>
        <TabCard
          title="Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant."
          bestMatches={true}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabCard
          title="Browse the most recent jobs that match your skills and profile description to the skills clients are looking for."
          mostRecent={true}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabCard
          title="Keep track of jobs you're interested in. Select the heart icon on a job post to save it for later."
          savedJobs={true}
        />{" "}
      </TabPanel>
    </Box>
  );
}
