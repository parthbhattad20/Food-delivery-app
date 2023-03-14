import React from "react";

const Card = () => {
    return (
        <div>
            <div
                className="card mt-3"
                style={{ width: "18rem", maxHeight: "360px" }}
            >
                <img
                    src="https://media.istockphoto.com/id/1217105017/photo/hand-pouring-masala-tea-from-a-teapot-into-a-glass.jpg?s=1024x1024&w=is&k=20&c=NhzQCzKKwA94PySAiml5IDXpLk2TVaij2In9Vocedcg="
                    className="card-img-top h-60px"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">this is parth bhattad</p>
                    <div className="container w-100">
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total price</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
