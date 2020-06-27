import React from "react";
import { useAppContext } from "../helpers/context.provider";
import { ListItem } from "./ListItem";

export const List = () => {
    const { jobs } = useAppContext();
    return (
        <div className="jobs-list">
            {jobs.map((job) => (
                <ListItem key={job.id} {...job} />
            ))}
        </div>
    );
};
