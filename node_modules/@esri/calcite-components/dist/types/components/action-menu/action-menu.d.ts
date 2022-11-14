import { Event, EventEmitter } from "../../stencil-public-runtime";
import { VNode } from "../../stencil-public-runtime";
import { DeprecatedEventPayload, Scale } from "../interfaces";
import { LogicalPlacement, EffectivePlacement, OverlayPositioning } from "../../utils/floating-ui";
/**
 * @slot - A slot for adding `calcite-action`s.
 * @slot trigger - A slot for adding a `calcite-action` to trigger opening the menu.
 * @slot tooltip - A slot for adding an tooltip for the menu.
 */
export declare class ActionMenu {
  disconnectedCallback(): void;
  /**
   * When `true`, the component is expanded.
   */
  expanded: boolean;
  expandedHandler(): void;
  /**
   * Defines the available placements that can be used when a flip occurs.
   */
  flipPlacements?: EffectivePlacement[];
  /**
   *  Specifies the text string for the component.
   */
  label: string;
  /**
   * When `true`, the component is open.
   */
  open: boolean;
  openHandler(open: boolean): void;
  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   * `"fixed"` should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  overlayPositioning: OverlayPositioning;
  /**
   * Determines where the component will be positioned relative to the `referenceElement`.
   *
   * @see [LogicalPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/floating-ui.ts#L25)
   */
  placement: LogicalPlacement;
  /**
   * Specifies the size of the component's trigger `calcite-action`.
   */
  scale: Scale;
  /**
   * Emits when the `open` property has changed.
   *
   * **Note:**: The event payload is deprecated, please use the `open` property on the component instead
   */
  calciteActionMenuOpenChange: EventEmitter<DeprecatedEventPayload>;
  closeCalciteActionMenuOnClick(event: PointerEvent): void;
  el: HTMLCalciteActionMenuElement;
  menuButtonEl: HTMLCalciteActionElement;
  slottedMenuButtonEl: HTMLCalciteActionElement;
  defaultMenuButtonEl: HTMLCalciteActionElement;
  actionElements: HTMLCalciteActionElement[];
  guid: string;
  menuId: string;
  menuButtonId: string;
  tooltipEl: HTMLCalciteTooltipElement;
  activeMenuItemIndex: number;
  activeMenuItemIndexHandler(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  connectMenuButtonEl: () => void;
  disconnectMenuButtonEl: () => void;
  setMenuButtonEl: (event: Event) => void;
  setDefaultMenuButtonEl: (el: HTMLCalciteActionElement) => void;
  renderMenuButton(): VNode;
  renderMenuItems(): VNode;
  render(): VNode;
  handleCalciteActionClick: () => void;
  menuButtonClick: (event: PointerEvent) => void;
  updateTooltip: (event: Event) => void;
  setTooltipReferenceElement: () => void;
  updateAction: (action: HTMLCalciteActionElement, index: number) => void;
  updateActions: (actions: HTMLCalciteActionElement[]) => void;
  handleDefaultSlotChange: (event: Event) => void;
  isValidKey(key: string, supportedKeys: string[]): boolean;
  menuButtonKeyDown: (event: KeyboardEvent) => void;
  handleActionNavigation: (event: KeyboardEvent, key: string, actions: HTMLCalciteActionElement[]) => void;
  toggleOpenEnd: () => void;
  toggleOpen: (value?: boolean) => void;
}
