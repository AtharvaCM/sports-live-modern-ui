import { React } from "react";

import { Card, CardContent, Typography, Box } from "@mui/material";
import SportsVolleyballSharpIcon from "@mui/icons-material/SportsVolleyballSharp";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { COLORS } from "../../../Constants/themeConstants";

export function Timeline({ events }) {
  console.log(events);
  const timelineCard = () => {
    return (
      <VerticalTimeline layout="1-column-left" lineColor={COLORS.colorLight}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={`${event.date} minutes`}
            icon={<SportsVolleyballSharpIcon />}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            key={index}
            contentStyle={{ background: COLORS.colorLight }}
            contentArrowStyle={{
              borderRight: `7px solid ${COLORS.colorLight}`,
            }}
          >
            <Typography
              variant="h5"
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
            <Typography
              variant="body2"
              className="vertical-timeline-element-subtitle"
              dangerouslySetInnerHTML={{ __html: `Team: ${event.team}` }}
              sx={{ mt: "0 !important" }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    );
  };

  return (
    <Box sx={{ mx: 4, mb: 4 }}>
      <Typography variant="h6">Goal Timeline</Typography>
      <Card>
        <CardContent
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            style={{ color: "whitesmoke" }}
          >
            Start - 00:00
          </Typography>
          {events === null ? null : timelineCard()}
          <Typography
            variant="h5"
            align="center"
            style={{ color: "whitesmoke" }}
          >
            End - 90:00
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
