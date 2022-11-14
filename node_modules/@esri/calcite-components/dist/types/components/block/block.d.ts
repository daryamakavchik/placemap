import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { Status } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding content to the component.
 * @slot icon - A slot for adding a leading header icon with `calcite-icon`.
 * @slot control - A slot for adding a single HTML input element in a header.
 * @slot header-menu-actions - A slot for adding an overflow menu with `calcite-action`s inside a dropdown.
 */
export declare class Block implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * When `true`, the component is collapsible.
   */
  collapsible: boolean;
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * When `true`, displays a drag handle in the header.
   */
  dragHandle: boolean;
  /**
   * The component header text.
   */
  heading: string;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  /**
   * Accessible name for the component's collapse button.
   *
   * @default "Collapse"
   */
  intlCollapse?: string;
  /**
   * Accessible name for the component's expand button.
   *
   * @default "Expand"
   */
  intlExpand?: string;
  /**
   * Accessible name when the component is loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * Accessible name for the component's options button.
   *
   * @default "Options"
   */
  intlOptions?: string;
  /**
   * When `true`, a busy indicator is displayed.
   */
  loading: boolean;
  /**
   * When `true`, expands the component and its contents.
   */
  open: boolean;
  /**
   * Displays a status-related indicator icon.
   */
  status?: Status;
  /**
   * A description for the component, which displays below the heading.
   *
   * @deprecated use `description` instead
   */
  summary: string;
  /**
   * A description for the component, which displays below the heading.
   */
  description: string;
  /**
   * When `true`, removes padding for the slotted content.
   *
   * @deprecated Use `--calcite-block-padding` CSS variable instead.
   */
  disablePadding: boolean;
  componentDidRender(): void;
  el: HTMLCalciteBlockElement;
  private guid;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Emits when the component's header is clicked.
   */
  calciteBlockToggle: EventEmitter<void>;
  onHeaderClick: () => void;
  renderScrim(): VNode[];
  renderIcon(): VNode[];
  renderTitle(): VNode;
  render(): VNode;
}
