import {
    date
} from "check-types";
import React from "react";
import Eventitem from "./EventItem";

export default function Eventlist() {
    const events = [{
        id: 1,
        artist: "Formally Known As...",
        name: "Unpronouncable",
        date: new date(" 2021-09-ZD:00:30"),
        price: 0.99,
        imgUrl: "logos/container-whatever"
    },];

    /// todo
    events();

}