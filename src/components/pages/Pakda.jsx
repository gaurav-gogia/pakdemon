import React from "react";
import axios from "axios";
import "../../App.css";

class Pakda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl:
                "https://i.redditmedia.com/e5zoQw-hgw-LCjdhC_4G8IAcHxex5pzda_BD_FPTcBY.png?fit=crop&crop=faces%2Centropy&arh=2&w=960&s=3d7dcda282bfc1f3ff3dc0d971f13113",
            loadingImage: "not started"
        };
    }

    loadImage = () => {
        this.setState({ loadingImage: "loading" });
        axios.get(this.props.pakad.url).then(res => {
            this.setState({
                imgUrl:
                    res.data.sprites.front_default ||
                    res.data.sprites.front_shiny,
                loadingImage: "finished"
            });
        });
    };

    render() {
        return (
            <div className="card pakde-card">
                <div>
                    <img
                        src={
                            this.state.loadingImage === "loading"
                                ? "https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
                                : this.state.imgUrl
                        }
                        alt="cat"
                        style={{ width: "100px" }}
                    />
                    <div>
                        <button onClick={this.loadImage}>Load image</button>
                    </div>
                </div>
                <b className="cont-pad">{this.props.pakad.name}</b>
            </div>
        );
    }
}

export default Pakda;
