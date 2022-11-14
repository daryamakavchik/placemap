import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { LogicalFlowPosition } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
 */
/**
 * @slot - A slot for adding subheader/description content.
 * @slot thumbnail - A slot for adding a thumbnail to the component.
 * @slot title - A slot for adding a title.
 * @slot subtitle - A slot for adding a subtitle or short summary.
 * @slot footer-leading - A slot for adding a leading footer.
 * @slot footer-trailing - A slot for adding a trailing footer.
 */
export declare class Card implements ConditionalSlotComponent {
  el: HTMLCalciteCardElement;
  /**  When `true`, a busy indicator is displayed. */
  loading: boolean;
  /** When `true`, the component is selected. */
  selected: boolean;
  /** When `true`, the component is selectable. */
  selectable: boolean;
  /**
   * Accessible name when the component is loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * When `selectable` is `true`, the accessible name for the component's checkbox for selection.
   *
   * @default "Select"
   */
  intlSelect: string;
  /**
   * When `selectable` is `true`, the accessible name for the component's checkbox for deselection.
   *
   * @default "Deselect"
   */
  intlDeselect: string;
  /** Sets the placement of the thumbnail defined in the `thumbnail` slot. */
  thumbnailPosition: LogicalFlowPosition;
  /** Fires when `selectable` is `true` and the component is selected. */
  calciteCardSelect: EventEmitter<void>;
  connectedCallback(): void;
  disonnectedCallback(): void;
  render(): VNode;
  private cardSelectClick;
  private cardSelectKeyDown;
  private selectCard;
  private renderThumbnail;
  private renderCheckbox;
  private renderHeader;
  private renderFooter;
}
