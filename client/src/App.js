import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./components/navbar";
import OriginalReview from "./components/originalReview";
import MetaReview from "./components/metaReview";
import "./App.css";

class App extends Component {
  state = {
    review: {},
    metaReview: {},
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.getRandomOriginalReview("getrandom");
  }

  getRandomOriginalReview = async (url) => {
    const response = await fetch(`/${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    this.setState((prevState) => {
      let review = { ...prevState.review };
      let metaReview = { ...prevState.metaReview };
      review = body[0];
      return { review, metaReview };
    });
  };

  postMetaReview = async (formState) => {
    const saveData = { ...formState, product_id: this.state.review.product_id };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ saveData }),
    };
    const response = await fetch("/savemetareview", requestOptions);
    const data = await response.json();
  };

  handleMetaInputChange = (event) => {
    const {
      target: { name, value },
    } = event;

    this.setState((prevState) => {
      let metaReview = { ...prevState.metaReview, [name]: value };
      return { metaReview };
    });
  };

  handleSubmitReview = (event) => {
    // event.preventDefault();
    // console.log("before setstate ", this.state);
    // this.setState(
    //   (prevState) => {
    //     let metaReview = {
    //       ...prevState.metaReview,
    //       product_id: this.state.review.product_id,
    //     };
    //     return { metaReview };
    //   },
    //   () => console.log(this.state)
    //   // () => this.postMetaReview(this.state.metaReview)
    // );

    this.postMetaReview(this.state.metaReview);
    this.handleProgressCircle();

    this.setState((prevState) => {
      let metaReview = { ...prevState.metaReview };

      metaReview.metaReviewAuthor = "";
      metaReview.metaRating = 0;
      metaReview.metaReviewText = "";

      return { metaReview };
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
              backgroundColor: "#23272a",
              minHeight: "100vh",
              margin: 0,
              width: "100%",
            }}
          >
            <Grid item>
              <OriginalReview review={this.state.review} />
            </Grid>
            <Grid item>
              <MetaReview
                metaReview={this.state.metaReview}
                onMetaInputChange={this.handleMetaInputChange}
                onSubmitPressed={this.handleSubmitReview}
              />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
