import React, { Component } from "react";
import MetaReviewForm from "./metaReviewForm";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import DelayingAppearance from "./submitReviewProgress";

class MetaReview extends Component {
  render() {
    const { metaReview, onMetaInputChange, onSubmitPressed } = this.props;

    return (
      <React.Fragment>
        <Card style={{ position: "relative" }}>
          <CardHeader title="Review this review!"></CardHeader>
          <CardContent>
            <MetaReviewForm
              metaReview={metaReview}
              onMetaInputChange={onMetaInputChange}
              onSubmitPressed={onSubmitPressed}
            ></MetaReviewForm>
            <DelayingAppearance />
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default MetaReview;
