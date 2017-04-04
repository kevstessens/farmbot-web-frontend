import * as React from "react";
import { CalibrationRow } from "./calibration_button";
import { t } from "i18next";
import { McuInputBox } from "./mcu_input_box";
import { ConfigInputBox } from "./config_input_box";
import { settingToggle, commitSettingsChanges } from "../actions";
import { ToggleButton } from "../../controls/toggle_button";
import { Widget, WidgetHeader, WidgetBody } from "../../ui/index";
import { HardwareSettingsProps } from "../interfaces";
import { HomingRow } from "./homing_row";

export class HardwareSettings extends React.Component<HardwareSettingsProps, {}> {
  render() {
    return <Widget className="hardware-widget">
      <WidgetHeader title="Hardware"
        helpText={`Change settings
                  of your LaurBot hardware with the fields below.
                  Caution: Changing these settings to extreme
                  values can cause hardware malfunction. Make
                  sure to test any new settings before letting
                  your LaurBot use them unsupervised. Tip: Recalibrate
                  LaurBot after changing settings and test a few sequences
                  to verify that everything works as expected. Note:
                  Currently not all settings can be changed.`}>
        <button className="green button-like"
          onClick={() => this.props.dispatch(commitSettingsChanges())} >
          {t("SAVE")}
          {Object.keys(this.props.bot.settingsBuffer).length ? "*" : ""}
        </button>
      </WidgetHeader>
      <WidgetBody>
        <table className="plain">
          <thead>
            <tr>
              <th width="32%" />
              <th width="22%">
                <label>{t("X AXIS")}</label>
              </th>
              <th width="22%">
                <label>{t("Y AXIS")}</label>
              </th>
              <th width="22%">
                <label>{t("Z AXIS")}</label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>{t("Steps per MM")}</label>
              </td>
              <ConfigInputBox setting="steps_per_mm_x"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <ConfigInputBox setting="steps_per_mm_y"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <ConfigInputBox setting="steps_per_mm_z"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
            </tr>
            <tr>
              <td>
                <label>{t("MAX SPEED (mm/s)")}</label>
              </td>
              <McuInputBox setting="movement_max_spd_x"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_max_spd_y"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_max_spd_z"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
            </tr>
            <tr>
              <td>
                <label>{t("ACCELERATE FOR (steps)")}</label>
              </td>
              <McuInputBox setting="movement_steps_acc_dec_x"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_steps_acc_dec_y"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_steps_acc_dec_z"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
            </tr>
            <tr>
              <td>
                <label>{t("TIMEOUT AFTER (seconds)")}</label>
              </td>
              <McuInputBox setting="movement_timeout_x"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_timeout_y"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_timeout_z"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
            </tr>
            <tr>
              <td>
                <label>{t("LENGTH (m)")}</label>
              </td>
              <McuInputBox setting="movement_axis_nr_steps_x"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_axis_nr_steps_y"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
              <McuInputBox setting="movement_axis_nr_steps_z"
                bot={this.props.bot}
                dispatch={this.props.dispatch} />
            </tr>
            <CalibrationRow />
            <HomingRow />
            <tr>
              <td>
                <label>{t("INVERT ENDPOINTS")}</label>
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_endpoints_x}
                  toggleAction={() =>
                    settingToggle("movement_invert_endpoints_x",
                      this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_endpoints_y}
                  toggleAction={() =>
                    settingToggle("movement_invert_endpoints_y",
                      this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_endpoints_z}
                  toggleAction={() =>
                    settingToggle("movement_invert_endpoints_z",
                      this.props.bot)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>{t("INVERT MOTORS")}</label>
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_motor_x}
                  toggleAction={() => settingToggle("movement_invert_motor_x", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_motor_y}
                  toggleAction={() => settingToggle("movement_invert_motor_y", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_invert_motor_z}
                  toggleAction={() => settingToggle("movement_invert_motor_z", this.props.bot)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>{t("ALLOW NEGATIVES")}</label>
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_home_up_x}
                  toggleAction={() => settingToggle("movement_home_up_x", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_home_up_y}
                  toggleAction={() => settingToggle("movement_home_up_y", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_home_up_z}
                  toggleAction={() => settingToggle("movement_home_up_z", this.props.bot)} />
              </td>
            </tr>

            <tr>
              <td>
                <label>{t("ENABLE ENDSTOPS")}</label>
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_enable_endpoints_x}
                  toggleAction={() => settingToggle("movement_enable_endpoints_x", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_enable_endpoints_y}
                  toggleAction={() => settingToggle("movement_enable_endpoints_y", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.movement_enable_endpoints_z}
                  toggleAction={() => settingToggle("movement_enable_endpoints_z", this.props.bot)} />
              </td>
            </tr>

            <tr>
              <td>
                <label>{t("ENABLE ENCODERS")}</label>
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.encoder_enabled_x}
                  toggleAction={() => settingToggle("encoder_enabled_x", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.encoder_enabled_y}
                  toggleAction={() => settingToggle("encoder_enabled_y", this.props.bot)} />
              </td>
              <td>
                <ToggleButton
                  toggleval={this.props.bot.hardware.mcu_params.encoder_enabled_z}
                  toggleAction={() => settingToggle("encoder_enabled_z", this.props.bot)} />
              </td>
            </tr>
          </tbody>
        </table>
      </WidgetBody>
    </Widget>;
  }
}
