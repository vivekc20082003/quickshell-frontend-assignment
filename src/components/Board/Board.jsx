/* eslint-disable react/prop-types */
import Card from "../TicketCard/TicketCard";
import "./Board.css";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { SiInstatus } from "react-icons/si";
function Board({ tickets, header }) {
    return (
        <div className="board-container">
            <div className="board-header">
                <div>
                    <div className="flex-gap">
                        <SiInstatus className="bg-color-status-icon" />
                        <p>{header}</p>
                        <span>{tickets.length}</span>
                    </div>
                </div>

                <div className="flex-gap">
                    <AiOutlinePlus className="bg-color-icon" />
                    <BiDotsHorizontalRounded className="bg-color-icon" />
                </div>
            </div>

            <div className="board-hero">
                {tickets.map((ticket) => {
                    return (
                        <Card
                            key={ticket.id}
                            id={ticket.id}
                            profileURL="https://media.licdn.com/dms/image/D5603AQGPifxl2cNLKw/profile-displayphoto-shrink_400_400/0/1681204529238?e=1705536000&v=beta&t=DJcxCEiawpnhiOFgkJ2MkBJaikszZllm54EI0g4M4m8"
                            status={ticket.status}
                            title={ticket.title}
                            tag={ticket.tag[0]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Board;
