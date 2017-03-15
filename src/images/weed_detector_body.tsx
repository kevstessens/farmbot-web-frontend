import * as React from "react";
import { BlurableInput } from "../ui/index";
import { ImageFlipper } from "./image_flipper";
import { HsvSlider } from "./hsv_slider";
import { FarmbotPicker } from "./farmbot_picker";

export function WeedDetectorBody() {
  return <div className="widget-content">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <h4>
          <i>Color Range</i>
        </h4>
        <label htmlFor="hue">HUE</label>
        <HsvSlider name={"H"}
          onChange={this.TODO}
          env={this.TODO} />
        <label htmlFor="saturation">SATURATION</label>
        <HsvSlider name={"S"}
          onChange={this.TODO}
          env={this.TODO} />
        <label htmlFor="value">VALUE</label>
        <HsvSlider name={"V"}
          onChange={this.TODO}
          env={this.TODO} />
      </div>
      <div className="col-md-6 col-sm-12">
        <FarmbotPicker h={this.TODO()} s={this.TODO()} v={this.TODO()}
          hsv={this.TODO()}
          hsl={this.TODO()} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <h4>
          <i>Processing Parameters</i>
        </h4>
      </div>

      <div className="col-md-4 col-sm-4">
        <label>BLUR</label>
        <BlurableInput type="number"
          min={0}
          max={100}
          onCommit={this.TODO()}
          value={this.TODO()} />
      </div>

      <div className="col-md-4 col-sm-4">
        <label>MORPH</label>
        <BlurableInput type="number"
          min={0}
          max={100}
          onCommit={this.TODO()}
          value={this.TODO()} />
      </div>

      <div className="col-md-4 col-sm-4">
        <label>ITERATION</label>
        <BlurableInput type="number"
          min={0}
          max={100}
          onCommit={this.TODO()}
          value={this.TODO()} />
      </div>
    </div>
    <ImageFlipper images={this.props.sync.images} />
  </div>;
}
