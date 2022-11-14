import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { Alignment, Appearance, Scale } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding a `calcite-icon`.
 */
export declare class Action implements InteractiveComponent {
  /**
   * When `true`, the component is highlighted.
   */
  active: boolean;
  /**
   * Specifies the horizontal alignment of button elements with text content.
   */
  alignment?: Alignment;
  /** Specifies the appearance of the component. */
  appearance: Extract<"solid" | "clear", Appearance>;
  /**
   * When `true`, the side padding of the component is reduced. Compact mode is used internally by components, e.g. `calcite-block-section`.
   */
  compact: boolean;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /** Specifies an icon to display. */
  icon?: string;
  /**
   * When `true`, indicates unread changes.
   */
  indicator: boolean;
  /**
   * Specifies the text label to display while loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * Specifies the label of the component. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  label?: string;
  /**
   * When `true`, a busy indicator is displayed.
   */
  loading: boolean;
  /**
   * Specifies the size of the component.
   */
  scale: Scale;
  /**
   * Specifies text that accompanies the icon.
   */
  text: string;
  /**
   * Indicates whether the text is displayed.
   */
  textEnabled: boolean;
  /**
   * Emits when the component has been clicked.
   *
   * @deprecated use `onClick` instead.
   */
  calciteActionClick: EventEmitter<void>;
  el: HTMLCalciteActionElement;
  buttonEl: HTMLButtonElement;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  renderTextContainer(): VNode;
  renderIconContainer(): VNode;
  render(): VNode;
  handleTooltipSlotChange: (event: Event) => void;
  calciteActionClickHandler: () => void;
}
