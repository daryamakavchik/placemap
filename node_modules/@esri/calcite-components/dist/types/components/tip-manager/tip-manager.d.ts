import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
/**
 * @slot - A slot for adding `calcite-tip`s.
 */
export declare class TipManager {
  /**
   * When `true`, does not display or position the component.
   */
  closed: boolean;
  closedChangeHandler(): void;
  /**
   * Specifies the number at which section headings should start.
   */
  headingLevel: HeadingLevel;
  /**
   * Accessible name for the component's close button.
   */
  intlClose?: string;
  /**
   * Accessible name for the `calcite-tip-group` title.
   */
  intlDefaultTitle?: string;
  /**
   * Accessible name for navigating to the next tip.
   */
  intlNext?: string;
  /**
   * Text that accompanies the component's pagination.
   */
  intlPaginationLabel?: string;
  /**
   * Accessible name for navigating to the previous tip.
   */
  intlPrevious?: string;
  el: HTMLCalciteTipManagerElement;
  selectedIndex: number;
  selectedChangeHandler(): void;
  tips: HTMLCalciteTipElement[];
  total: number;
  direction: "advancing" | "retreating";
  groupTitle: string;
  mutationObserver: import("../../utils/observers").ExtendedMutationObserver;
  container: HTMLDivElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Selects the next `calcite-tip` to display. */
  nextTip(): Promise<void>;
  /** Selects the previous `calcite-tip` to display. */
  previousTip(): Promise<void>;
  /**
   * Emits when the component has been open or closed.
   *
   * @deprecated use `calciteTipManagerClose` instead.
   */
  calciteTipManagerToggle: EventEmitter<void>;
  /**
   * Emits when the component has been closed.
   */
  calciteTipManagerClose: EventEmitter<void>;
  setUpTips(): void;
  hideTipManager: () => void;
  showSelectedTip(): void;
  updateGroupTitle(): void;
  previousClicked: () => void;
  nextClicked: () => void;
  tipManagerKeyDownHandler: (event: KeyboardEvent) => void;
  storeContainerRef: (el: HTMLDivElement) => void;
  renderPagination(): VNode;
  render(): VNode;
}
