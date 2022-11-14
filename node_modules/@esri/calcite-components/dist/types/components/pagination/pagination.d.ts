import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { LocalizedComponent, NumberingSystem } from "../../utils/locale";
export interface PaginationDetail {
  start: number;
  total: number;
  num: number;
}
export declare class Pagination implements LocalizedComponent {
  /**
   * When `true`, number values are displayed with a group separator corresponding to the language and country format.
   */
  groupSeparator: boolean;
  /** Specifies the number of items per page. */
  num: number;
  /**
   * Specifies the Unicode numeral system used by the component for localization.
   */
  numberingSystem?: NumberingSystem;
  /** Specifies the starting item number. */
  start: number;
  /** Specifies the total number of items. */
  total: number;
  /**
   * Accessible name for the component's next button.
   *
   * @default "Next"
   */
  textLabelNext: string;
  /**
   * Accessible name for the component's previous button.
   *
   * @default "Previous"
   */
  textLabelPrevious: string;
  /** Specifies the size of the component. */
  scale: Scale;
  el: HTMLCalcitePaginationElement;
  effectiveLocale: string;
  /**
   * Emits when the selected page changes.
   *
   * @deprecated use calcitePaginationChange instead
   */
  calcitePaginationUpdate: EventEmitter<PaginationDetail>;
  /**
   * Emits when the selected page changes.
   *
   * @see [PaginationDetail](https://github.com/Esri/calcite-components/blob/master/src/components/pagination/pagination.tsx#L23)
   */
  calcitePaginationChange: EventEmitter<PaginationDetail>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Go to the next page of results. */
  nextPage(): Promise<void>;
  /** Go to the previous page of results. */
  previousPage(): Promise<void>;
  private getLastStart;
  private previousClicked;
  private nextClicked;
  private showLeftEllipsis;
  private showRightEllipsis;
  private emitUpdate;
  /**
   * Returns a string representing the localized label value based on groupSeparator prop being on or off.
   *
   * @param value
   */
  private determineGroupSeparator;
  renderPages(): VNode[];
  renderPage(start: number): VNode;
  renderLeftEllipsis(): VNode;
  renderRightEllipsis(): VNode;
  render(): VNode;
}
