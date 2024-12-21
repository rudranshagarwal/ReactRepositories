import React, { useState } from "react";
import InputModal from "./InputModal";
var repositoriesData = [
    { name: "design-system", type: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
    { name: "codeant-ci-app", type: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
    { name: "analytics-dashboard", type: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
    { name: "mobile-app", type: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
    { name: "e-commerce-platform", type: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
    { name: "blog-website", type: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
    { name: "social-network", type: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
];

const Repositories = () => {
    const [repositories, setRepositories] = useState(repositoriesData);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [userInput, setUserInput] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredRepositories = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );



    const openModal = () => {
        console.log("opening")
        setShowModal(true);
    }
    const closeModal = () => setShowModal(false);

    const saveInput = (input) => {

        const newRepositoriesData = [
            ...repositoriesData,
            input
        ]
        console.log(newRepositoriesData)
        setRepositories(newRepositoriesData);
        // console.log("User input:", input);
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
            <h1>Repositories</h1>
            <p>{repositories.length} total repositories</p>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search Repositories"
                    value={search}
                    onChange={handleSearch}
                    style={{
                        padding: "10px",
                        marginRight: "10px",
                        width: "300px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <div>
                    <button
                        onClick={() => alert("Refresh functionality not implemented yet!")}
                        style={{
                            padding: "10px 20px",
                            marginRight: "10px",
                            borderRadius: "4px",
                            border: "none",
                            background: "#f0f0f0",
                            cursor: "pointer",
                        }}
                    >
                        Refresh All
                    </button>
                    <button
                        onClick={openModal}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "4px",
                            border: "none",
                            background: "#3b82f6",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        + Add Repository
                    </button>
                    <InputModal
                        show={showModal}
                        handleClose={closeModal}
                        handleSave={saveInput}
                    />
                </div>
            </div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredRepositories.map((repo, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 15px",
                            borderBottom: "1px solid #f0f0f0",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <strong>{repo.name}</strong>{" "}
                            <span
                                style={{
                                    color: repo.type === "Public" ? "green" : "gray",
                                    fontSize: "0.9em",
                                    marginLeft: "10px",
                                }}
                            >
                                {repo.type}
                            </span>
                            <p style={{ margin: "5px 0", color: "#666" }}>{repo.language}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p style={{ margin: "5px 0", fontSize: "0.9em" }}>{repo.size}</p>
                            <p style={{ margin: "5px 0", fontSize: "0.8em", color: "#888" }}>Updated {repo.updated}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repositories;
