import React, { useEffect, useState } from "react";
import "./SelectAnyDate.css";
import Form from "react-bootstrap/Form";

export default function SelectAnyDate({ parentCallback }) {
  const theDate = (e) => {
    let today = new Date();
    let lastWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    return lastWeek;
  };

  const getLastWeek = (e) => {
    let lastWeek = theDate();
    let currentMonth = lastWeek.getMonth() + 1;
    let lastWeekDay = lastWeek.getDate();
    let currentYear = lastWeek.getFullYear();
    let lastWeekDisplay = lastWeekDay + "/" + currentMonth + "/" + currentYear;
    let lastWeekDisplayPadded =
      ("0000" + currentYear.toString()).slice(-4) +
      "-" +
      ("00" + currentMonth.toString()).slice(-2) +
      "-" +
      ("00" + lastWeekDay.toString()).slice(-2);

    let returnDate = "";
    if (e.target.value === "2") {
      returnDate =
        e.target.value.length === 1 ? "0" + currentMonth : currentMonth;
    } else if (e.target.value === "3") {
      returnDate = lastWeekDisplayPadded;
    } else if (e.target.value === "4") {
      returnDate =
        e.target.value.length === 1
          ? "0" + (currentMonth + 1)
          : currentMonth + 1;
    }
    parentCallback(returnDate);
  };

  return (
    <Form.Select
      size="lg"
      className="select-form-date"
      onChange={(e) => {
        getLastWeek(e);
      }}
    >
      <option value="">Any Date</option>
      <option value="2">Last month</option>
      <option value="3">Last week</option>
      <option value="4">Next month</option>
    </Form.Select>
  );
}
