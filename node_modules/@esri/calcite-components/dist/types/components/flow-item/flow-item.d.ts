import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { Scale } from "../interfaces";
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
export declare class FlowItem implements InteractiveComponent {
  /** When true, displays a close button in the trailing side of the header */
  closable: boolean;
  /** When true, flow-item will be hidden */
  closed: boolean;
  /**
   * When provided, this method will be called before it is removed from the parent flow.
   */
  beforeBack?: () => Promise<void>;
  /** A description for the component. */
  description: string;
  /**
   *  When true, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * The component header text.
   */
  heading?: string;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  /**
   * Specifies the maximum height of the component.
   */
  heightScale?: Scale;
  /**
   * Accessible name for the component's back button. The back button will only be shown when 'showBackButton' is true.
   */
  intlBack?: string;
  /**
   * Accessible name for the component's close button. The close button will only be shown when 'dismissible' is true.
   */
  intlClose?: string;
  /**
   * Accessible name for the component's actions menu.
   */
  intlOptions?: string;
  /**
   * When true, a busy indicator is displayed.
   */
  loading: boolean;
  /**
   * When true, the action menu items in the `header-menu-actions` slot are open.
   */
  menuOpen: boolean;
  /**
   * When true, displays a back button in the header.
   */
  showBackButton: boolean;
  /**
   * Specifies the width of the component.
   */
  widthScale?: Scale;
  componentDidRender(): void;
  /**
   * Fires when the back button is clicked.
   */
  calciteFlowItemBack: EventEmitter<void>;
  /**
   * Fires when the back button is clicked.
   *
   * @deprecated use calciteFlowItemBack instead.
   */
  calciteFlowItemBackClick: EventEmitter<void>;
  /**
   * Fires when the content is scrolled.
   */
  calciteFlowItemScroll: EventEmitter<void>;
  /**
   * Fires when the close button is clicked.
   */
  calciteFlowItemClose: EventEmitter<void>;
  el: HTMLCalciteFlowItemElement;
  containerEl: HTMLCalcitePanelElement;
  backButtonEl: HTMLCalciteActionElement;
  /**
   * Sets focus on the component.
   */
  setFocus(): Promise<void>;
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
  handlePanelScroll: (event: CustomEvent<void>) => void;
  handlePanelClose: (event: CustomEvent<void>) => void;
  backButtonClick: () => void;
  setBackRef: (node: HTMLCalciteActionElement) => void;
  setContainerRef: (node: HTMLCalcitePanelElement) => void;
  getBackLabel: () => string;
  renderBackButton(): VNode;
  render(): VNode;
}
