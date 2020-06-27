import React from "react";
import { FormControl } from "./FormControl";
import { useState } from "react";
import { useAppContext } from "../helpers/context.provider";

export const Form = () => {
    const { setJobs } = useAppContext();
    const [state, setState] = useState({
        description: "python",
        location: "new york",
    });
    const changeHandler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const submitHandler = async (event) => {
        event.preventDefault();
        const url = encodeURI(
            `https://jobs.github.com/positions.json?description=${state.description}&location=${state.location}`
        );
        try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/${url}`
            );
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error(error);
        }
        //setJobs()
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <FormControl
                    required="true"
                    name="description"
                    label="Description"
                    onChange={changeHandler}
                    value={state.description}
                />
                <FormControl
                    name="location"
                    label="Location"
                    onChange={changeHandler}
                    value={state.location}
                />
                <button className="btn btn-form__submit" type="submit">
                    Search
                </button>
            </div>
        </form>
    );
};
