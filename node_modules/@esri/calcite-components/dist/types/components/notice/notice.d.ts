import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Width } from "../interfaces";
import { StatusColor } from "../alert/interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * Notices are intended to be used to present users with important-but-not-crucial contextual tips or copy. Because
 * notices are displayed inline, a common use case is displaying them on page-load to present users with short hints or contextual copy.
 * They are optionally dismissible - useful for keeping track of whether or not a user has dismissed the notice. You can also choose not
 * to display a notice on page load and set the "active" attribute as needed to contextually provide inline messaging to users.
 */
/**
 * @slot title - A slot for adding the title.
 * @slot message - A slot for adding the message.
 * @slot link - A slot for adding actions to take, such as: undo, try again, link to page, etc.
 * @slot actions-end - A slot for adding actions to the end of the component. It is recommended to use two or less actions.
 */
export declare class Notice implements ConditionalSlotComponent {
  el: HTMLCalciteNoticeElement;
  /**
   * When `true`, the component is active.
   *
   * @deprecated Use `open` instead.
   */
  active: boolean;
  activeHandler(value: boolean): void;
  /** When `true`, the component is visible. */
  open: boolean;
  openHandler(value: boolean): void;
  /** The color for the component's top border and icon. */
  color: StatusColor;
  /**
   * When `true`, a close button is added to the component.
   *
   * @deprecated use `closable` instead.
   */
  dismissible?: boolean;
  handleDismissible(value: boolean): void;
  /** When `true`, a close button is added to the component. */
  closable?: boolean;
  handleClosable(value: boolean): void;
  /**
   * When `true`, shows a default recommended icon. Alternatively, pass a Calcite UI Icon name to display a specific icon.
   */
  icon: string | boolean;
  /**
   * Accessible name for the close button.
   *
   * @default "Close"
   */
  intlClose: string;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the width of the component. */
  width: Width;
  updateRequestedIcon(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  render(): VNode;
  /** Fired when the component is closed. */
  calciteNoticeClose: EventEmitter<void>;
  /** Fired when the component is opened. */
  calciteNoticeOpen: EventEmitter<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  private close;
  /** The close button element. */
  private closeButton?;
  /** The computed icon to render. */
  private requestedIcon?;
}
