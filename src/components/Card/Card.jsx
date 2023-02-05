import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import SimpleAccordion from "../Accordion/Accordion";
import "./Card.css";
import Loader from "./Loader";

function SimpleCard(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className="Card-Component">
      <Card className="Card-Content">
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ objectFit: "cover" }}
            title={props.img}
            onLoad={handleImageLoaded}
            onClick={() => window.open(props.img, "_blank")}
            image={props.img}
          />

          {!imageLoaded ? <Loader /> : <Card />}

          <CardContent>
            <SimpleAccordion
              title={props.title}
              details={props.explanation}
              date={props.date}
            ></SimpleAccordion>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default SimpleCard;
