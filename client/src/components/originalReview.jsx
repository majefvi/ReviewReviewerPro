import React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

const OriginalReview = ({ review }) => {
  // console.log("review in: ", review);
  const product_name = String(review.product_title).substring(0, 5);
  // console.log("product name: ", product_name);
  return (
    <Card
      style={{
        height: "auto",
        width: "auto",
        maxWidth: "600px",
        position: "relative",
      }}
    >
      <CardHeader
        title={review.product_title}
        subheader={review.review_headline}
      ></CardHeader>
      <CardMedia
        image={`https://loremflickr.com/320/240/${product_name}`}
        style={{
          height: "35vh",
          width: "auto",
        }}
      />
      <CardContent>{review.review_body}</CardContent>
      <CardContent>{review.review_date}</CardContent>
    </Card>
  );
};

export default OriginalReview;
