import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  position: relative;
  max-width: 350px;
  width: 32%;
  margin-right: 1%;
  margin-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    img {
      transform: scale(1.05);
      transition: 0.3s ease;
    }
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  position: relative;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
`;
const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  transition: 0.3s ease;
`;

const SeasonCard = ({
  season: { image, number, episodeOrder, id, premiereDate },
}) => {
  return (
    <Card>
      {image != null && (
        <ImageWrapper>
          <Image src={image.medium} />
        </ImageWrapper>
      )}

      {/* <Link
        to={`seasons/${id}/episodes`}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      /> */}
      <CardContent>
        <CardTitle>{number}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default SeasonCard;
