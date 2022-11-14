import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { HeadingLevel } from "../functional/Heading";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding custom content.
 * @slot header-actions-start - A slot for adding actions or content to the start side of the header.
 * @slot header-actions-end - A slot for adding actions or content to the end side of the header.
 * @slot header-content - A slot for adding custom content to the header.
 * @slot header-menu-actions - A slot for adding an overflow menu with actions inside a `calcite-dropdown`.
 * @slot fab - A slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer-actions - A slot for adding buttons to the footer.
 * @slot footer - A slot for adding custom content to the footer.
 */
export declare class Panel implements InteractiveComponent {
  /**
   * When `true`, hides the component.
   *
   * @deprecated use `closed` instead.
   */
  dismissed: boolean;
  /** When `true`, the component will be hidden. */
  closed: boolean;
  dismissedHandler(value: boolean): void;
  closedHandler(value: boolean): void;
  /**
   * When provided, this method will be called before it is removed from the parent flow.
   *
   * @deprecated use `calcite-flow-item` instead.
   */
  beforeBack?: () => Promise<void>;
  /**
   *  When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * When `true`, a close button is added to the component.
   *
   * @deprecated use `closable` instead
   */
  dismissible: boolean;
  dismissibleHandler(value: boolean): void;
  /** When `true`, displays a close button in the trailing side of the header. */
  closable: boolean;
  closableHandler(value: boolean): void;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  /**
   * When `true`, displays a back button in the header.
   *
   * @deprecated use `calcite-flow-item` instead.
   */
  showBackButton: boolean;
  /**
   * Accessible name for the component's back button. The back button will only be shown when `showBackButton` is `true`.
   *
   * @deprecated use `calcite-flow-item` instead.
   */
  intlBack?: string;
  /**
   * Specifies the maximum height of the component.
   */
  heightScale?: Scale;
  /**
   * Specifies the width of the component.
   */
  widthScale?: Scale;
  /**
   * When `true`, a busy indicator is displayed.
   */
  loading: boolean;
  /**
   * Accessible name for the component's close button. The close button will only be shown when `closeable` is `true`.
   */
  intlClose?: string;
  /**
   * Accessible name for the component's actions menu.
   */
  intlOptions?: string;
  /**
   * The component header text.
   */
  heading?: string;
  /**
   * Summary text. A description displayed underneath the heading.
   *
   * @deprecated use `description` instead.
   */
  summary?: string;
  /** A description for the component. */
  description: string;
  /**
   * When `true`, the action menu items in the `header-menu-actions` slot are open.
   */
  menuOpen: boolean;
  componentDidRender(): void;
  el: HTMLCalcitePanelElement;
  backButtonEl: HTMLCalciteActionElement;
  closeButtonEl: HTMLCalciteActionElement;
  containerEl: HTMLElement;
  panelScrollEl: HTMLElement;
  resizeObserver: ResizeObserver;
  hasStartActions: boolean;
  hasEndActions: boolean;
  hasMenuItems: boolean;
  hasHeaderContent: boolean;
  hasFooterContent: boolean;
  hasFooterActions: boolean;
  hasFab: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Fires when the close button is clicked.
   */
  calcitePanelClose: EventEmitter<void>;
  /**
   * Fires when the close button is clicked.
   *
   * @deprecated use `calcitePanelClose` instead.
   */
  calcitePanelDismiss: EventEmitter<void>;
  /**
   * Fires when there is a change to the `dismissed` property value .
   *
   * @deprecated use `calcitePanelClose` instead.
   */
  calcitePanelDismissedChange: EventEmitter<void>;
  /**
   * Fires when the content is scrolled.
   */
  calcitePanelScroll: EventEmitter<void>;
  /**
   * Fires when the back button is clicked.
   *
   * @deprecated use `calcite-flow-item` instead.
   */
  calcitePanelBackClick: EventEmitter<void>;
  resizeHandler: () => void;
  setContainerRef: (node: HTMLElement) => void;
  setCloseRef: (node: HTMLCalciteActionElement) => void;
  setBackRef: (node: HTMLCalciteActionElement) => void;
  panelKeyDownHandler: (event: KeyboardEvent) => void;
  close: () => void;
  panelScrollHandler: () => void;
  backButtonClick: () => void;
  handleHeaderActionsStartSlotChange: (event: Event) => void;
  handleHeaderActionsEndSlotChange: (event: Event) => void;
  handleHeaderMenuActionsSlotChange: (event: Event) => void;
  handleHeaderContentSlotChange: (event: Event) => void;
  handleFooterSlotChange: (event: Event) => void;
  handleFooterActionsSlotChange: (event: Event) => void;
  handleFabSlotChange: (event: Event) => void;
  /**
   * Sets focus on the component.
   *
   * @param focusId
   */
  setFocus(focusId?: "back-button" | "dismiss-button"): Promise<void>;
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options
   */
  scrollContentTo(options?: ScrollToOptions): Promise<void>;
  renderBackButton(): VNode;
  renderHeaderContent(): VNode;
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent(): VNode;
  renderHeaderStartActions(): VNode;
  renderHeaderActionsEnd(): VNode;
  renderMenu(): VNode;
  renderHeaderNode(): VNode;
  renderFooterNode(): VNode;
  setPanelScrollEl: (el: HTMLElement) => void;
  renderContent(): VNode;
  renderFab(): VNode;
  render(): VNode;
}
