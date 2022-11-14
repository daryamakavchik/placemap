import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { AlertDuration, AlertPlacement, StatusColor, Sync } from "./interfaces";
import { OpenCloseComponent } from "../../utils/openCloseComponent";
import { LocalizedComponent, NumberingSystem } from "../../utils/locale";
/**
 * Alerts are meant to provide a way to communicate urgent or important information to users, frequently as a result of an action they took in your app. Alerts are positioned
 * at the bottom of the page. Multiple opened alerts will be added to a queue, allowing users to dismiss them in the order they are provided.
 */
/**
 * @slot title - A slot for optionally adding a title to the component.
 * @slot message - A slot for adding main text to the component.
 * @slot link - A slot for optionally adding an action to take from the alert (undo, try again, link to page, etc.)
 */
export declare class Alert implements OpenCloseComponent, LocalizedComponent {
  el: HTMLCalciteAlertElement;
  /**
   * When `true`, displays and positions the component.
   *
   * @deprecated use `open` instead.
   */
  active: boolean;
  /** When `true`, displays and positions the component. */
  open: boolean;
  activeHandler(value: boolean): void;
  openHandler(value: boolean): void;
  /** When `true`, the component closes automatically (recommended for passive, non-blocking alerts). */
  autoDismiss: boolean;
  /** Specifies the duration before the component automatically closes (only use with `autoDismiss`). */
  autoDismissDuration: AlertDuration;
  /** Specifies the color for the component (will apply to top border and icon). */
  color: StatusColor;
  /**
   * When `true`, shows a default recommended icon. Alternatively,
   * pass a Calcite UI Icon name to display a specific icon.
   */
  icon: string | boolean;
  /**
   * Specifies the text label for the close button.
   *
   * @default "Close"
   */
  intlClose: string;
  /** Specifies an accessible name for the component. */
  label: string;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   */
  numberingSystem?: NumberingSystem;
  /** Specifies the placement of the component */
  placement: AlertPlacement;
  /** Specifies the size of the component. */
  scale: Scale;
  updateRequestedIcon(): void;
  updateDuration(): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): VNode;
  /** Fires when the component is requested to be closed and before the closing transition begins. */
  calciteAlertBeforeClose: EventEmitter<void>;
  /** Fires when the component is closed and animation is complete. */
  calciteAlertClose: EventEmitter<void>;
  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  calciteAlertBeforeOpen: EventEmitter<void>;
  /** Fires when the component is open and animation is complete. */
  calciteAlertOpen: EventEmitter<void>;
  /**
   * Fires to sync queue when opened or closed.
   *
   * @internal
   */
  calciteInternalAlertSync: EventEmitter<Sync>;
  /**
   * Fires when the component is added to DOM - used to receive initial queue.
   *
   * @internal
   */
  calciteInternalAlertRegister: EventEmitter<void>;
  alertSync(event: CustomEvent): void;
  alertRegister(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  effectiveLocale: string;
  /** the list of queued alerts */
  queue: HTMLCalciteAlertElement[];
  /** the count of queued alerts */
  queueLength: number;
  /** is the alert queued */
  queued: boolean;
  /** the close button element */
  private closeButton?;
  private autoDismissTimeoutId;
  private queueTimeout;
  private trackTimer;
  /** the computed icon to render */
  requestedIcon?: string;
  openTransitionProp: string;
  transitionEl: HTMLDivElement;
  private setTransitionEl;
  /** determine which alert is active */
  private determineActiveAlert;
  /** close and emit calciteInternalAlertSync event with the updated queue payload */
  private closeAlert;
  onBeforeOpen(): void;
  onOpen(): void;
  onBeforeClose(): void;
  onClose(): void;
  /** remove queued class after animation completes */
  private openAlert;
}
