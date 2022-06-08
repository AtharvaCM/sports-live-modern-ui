import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container } from "@mui/system";

import SeriesListAPI from "../../API/Cricket/SeriesListAPI";
import { StyledTableCell, StyledTableRow } from "../../Constants/Styles";
import Spinner from "../../Components/Spinner";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  console.log("row", row);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Start Date</StyledTableCell>
                    <StyledTableCell>End Date</StyledTableCell>
                    <StyledTableCell align="right">Test</StyledTableCell>
                    <StyledTableCell align="right">ODI</StyledTableCell>
                    <StyledTableCell align="right">T20</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {row.startDate}
                    </StyledTableCell>
                    <StyledTableCell>{row.startDate}</StyledTableCell>
                    <StyledTableCell align="right">{row.test}</StyledTableCell>
                    <StyledTableCell align="right">{row.odi}</StyledTableCell>
                    <StyledTableCell align="right">{row.t20}</StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    odi: PropTypes.number.isRequired,
    test: PropTypes.number.isRequired,
    t20: PropTypes.number.isRequired,
    totalMatches: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function Series() {
  const [series, setSeries] = useState(null);

  useEffect(() => {
    // Call the Series API
    SeriesListAPI()
      .then((response) => {
        setSeries(response.series);
      })
      .catch((err) => console.log(err));
  }, []);

  const seriesTable = () => (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell sx={{ fontSize: "1.5rem" }}>
              Series Name
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {series === null ? (
            <StyledTableRow>
              <StyledTableCell />
              <StyledTableCell align="right">
                <Spinner />
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            series.map((row, index) => <Row key={index} row={row} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <>
      <Container maxWidth sx={{ mr: 2, my: 3 }}>
        {seriesTable()}
      </Container>
    </>
  );
}

export default Series;
