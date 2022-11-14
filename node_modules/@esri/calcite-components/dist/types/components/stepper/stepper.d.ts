import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Scale } from "../interfaces";
import { StepperItemChangeEventDetail, StepperItemKeyEventDetail } from "./interfaces";
import { NumberingSystem } from "../../utils/locale";
/**
 * @slot - A slot for adding `calcite-stepper-item`s.
 */
export declare class Stepper {
  el: HTMLCalciteStepperElement;
  /** When `true`, displays a status icon in the `calcite-stepper-item` heading. */
  icon: boolean;
  /** Defines the layout of the component. */
  layout: Extract<"horizontal" | "vertical", Layout>;
  /** When `true`, displays the step number in the `calcite-stepper-item` heading. */
  numbered: boolean;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   */
  numberingSystem?: NumberingSystem;
  /** Specifies the size of the component. */
  scale: Scale;
  /**
   * Fires when the active `calcite-stepper-item` changes.
   *
   */
  calciteStepperItemChange: EventEmitter<StepperItemChangeEventDetail>;
  /**
   * Fires when the active `calcite-stepper-item` changes.
   *
   * @internal
   */
  calciteInternalStepperItemChange: EventEmitter<StepperItemChangeEventDetail>;
  componentDidLoad(): void;
  render(): VNode;
  calciteInternalStepperItemKeyEvent(event: CustomEvent<StepperItemKeyEventDetail>): void;
  registerItem(event: CustomEvent): void;
  updateItem(event: CustomEvent): void;
  handleUserRequestedStepperItemSelect(event: CustomEvent<StepperItemChangeEventDetail>): void;
  /** Set the next `calcite-stepper-item` as active. */
  nextStep(): Promise<void>;
  /** Set the previous `calcite-stepper-item` as active. */
  prevStep(): Promise<void>;
  /**
   * Set a specified `calcite-stepper-item` as active.
   *
   * @param step
   */
  goToStep(step: number): Promise<void>;
  /** Set the first `calcite-stepper-item` as active. */
  startStep(): Promise<void>;
  /** Set the last `calcite-stepper-item` as active. */
  endStep(): Promise<void>;
  private itemMap;
  /** list of sorted Stepper items */
  private items;
  /** list of enabled Stepper items */
  private enabledItems;
  /** keep track of the currently active item position */
  private currentPosition;
  private getEnabledStepIndex;
  private updateStep;
  private focusFirstItem;
  private focusLastItem;
  private focusNextItem;
  private focusPrevItem;
  private itemIndex;
  private sortItems;
  private filterItems;
}
