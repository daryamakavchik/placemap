import { ReferenceElement } from "../../utils/floating-ui";
export default class TooltipManager {
  private registeredElements;
  private hoverTimeouts;
  private clickedTooltip;
  private activeTooltipEl;
  private registeredElementCount;
  registerElement(referenceEl: ReferenceElement, tooltip: HTMLCalciteTooltipElement): void;
  unregisterElement(referenceEl: ReferenceElement): void;
  private queryTooltip;
  private keyDownHandler;
  private mouseEnterShow;
  private mouseLeaveHide;
  private clickHandler;
  private focusShow;
  private blurHide;
  private addListeners;
  private removeListeners;
  private clearHoverTimeout;
  private closeExistingTooltip;
  private focusTooltip;
  private toggleTooltip;
  private hoverToggle;
  private hoverTooltip;
  private activeTooltipHover;
  private hoverEvent;
  private focusEvent;
}
