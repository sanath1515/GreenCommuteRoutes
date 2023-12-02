import React from "react";
import ProfileItem from '../../molecules/ProfileItem/ProfileItem';
import LocationListItem from '../../molecules/LocationListItem/LocationListItem';
import { Grid } from "@material-ui/core";
const TopNavigation = ({ locationName }) => {
  return (
    <div data-testid="topNavigation">
      <Grid>
        <LocationListItem locationName={locationName} />
        <ProfileItem ></ProfileItem>
      </Grid>
    </div>
  );
}

export default TopNavigation;