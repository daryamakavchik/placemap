import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding content to the component.
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the component.
 */
export declare class ShellPanel implements ConditionalSlotComponent {
  /**
   * When `true`, hides the component's content area.
   */
  collapsed: boolean;
  watchHandler(): void;
  /**
   * When `true`, the content area displays like a floating panel.
   */
  detached: boolean;
  /**
   * When `detached`, specifies the maximum height of the component.
   */
  detachedHeightScale: Scale;
  /**
   * Specifies the width of the component's content area.
   */
  widthScale: Scale;
  /**
   * Specifies the component's position. Will be flipped when the element direction is right-to-left (`"rtl"`).
   */
  position: Position;
  /**
   * Accessible name for the resize separator.
   *
   * @default "Resize"
   */
  intlResize: string;
  /**
   * When `true` and not `detached`, the component's content area is resizable.
   */
  resizable: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  el: HTMLCalciteShellPanelElement;
  contentWidth: number;
  initialContentWidth: number;
  initialClientX: number;
  contentEl: HTMLDivElement;
  separatorEl: HTMLDivElement;
  contentWidthMax: number;
  contentWidthMin: number;
  step: number;
  stepMultiplier: number;
  /**
   * Emitted when collapse has been toggled.
   *
   * @deprecated use a `ResizeObserver` on the component to listen for changes to its size.
   */
  calciteShellPanelToggle: EventEmitter<void>;
  renderHeader(): VNode;
  render(): VNode;
  setContentWidth(width: number): void;
  updateAriaValues(): void;
  storeContentEl: (contentEl: HTMLDivElement) => void;
  getKeyAdjustedWidth: (event: KeyboardEvent) => number | null;
  separatorKeyDown: (event: KeyboardEvent) => void;
  separatorPointerMove: (event: PointerEvent) => void;
  separatorPointerUp: (event: PointerEvent) => void;
  setInitialContentWidth: () => void;
  separatorPointerDown: (event: PointerEvent) => void;
  connectSeparator: (separatorEl: HTMLDivElement) => void;
  disconnectSeparator: () => void;
}
