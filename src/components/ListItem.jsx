import React, { useEffect } from "react";
import moment from "moment";
import { FaClock, FaMapMarker, FaAngleRight } from "react-icons/fa";
import { Modal } from "./Modal";
import { useState } from "react";
export const ListItem = ({
    created_at,
    title,
    company_logo,
    company,
    location,
    description,
    company_url,
    type,
    url,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copy, setCopy] = useState(false);
    const onModalClose = () => setIsOpen(false);
    const onCloseClick = () => {
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <div className="item" onClick={() => setIsOpen(true)}>
                <div className="content">
                    <div className="data">
                        {company_logo ? (
                            <div className="logo">
                                <a
                                    href={company_url}
                                    title={company}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src={company_logo}
                                        alt={company + "-logo"}
                                    />
                                </a>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="title">
                            <h3>{title}</h3>

                            <a
                                href={company_url}
                                title={company}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="company-link"
                            >
                                {company}
                            </a>
                            {type === "Full Time" ? (
                                <span className="type full-time">{type}</span>
                            ) : (
                                <span className="type">{type}</span>
                            )}
                        </div>
                    </div>
                    <div className="meta">
                        <div className="flex">
                            <span className="date">
                                <FaClock />
                                {moment(created_at).fromNow()}
                            </span>
                            <span className="location">
                                <FaMapMarker />
                                {location}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="see-data">
                    <div></div>
                    <FaAngleRight />
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onModalClose}>
                <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                <div className="actions">
                    <button className="btn btn-inverted" onClick={onCloseClick}>
                        close
                    </button>
                    <a
                        href={url}
                        title={title}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="company-link"
                    >
                        <button className="btn">More information</button>
                    </a>
                </div>
            </Modal>
        </React.Fragment>
    );
};
