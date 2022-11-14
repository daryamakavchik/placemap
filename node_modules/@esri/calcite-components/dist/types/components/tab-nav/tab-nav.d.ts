import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "../tab/interfaces";
import { TabID, TabLayout } from "../tabs/interfaces";
import { TabPosition } from "../tabs/interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-tab-title`s.
 */
export declare class TabNav {
  el: HTMLCalciteTabNavElement;
  /**
   * Specifies the name when saving selected `calcite-tab` data to `localStorage`.
   */
  storageId: string;
  /**
   * Specifies text to update multiple components to keep in sync if one changes.
   */
  syncId: string;
  /**
   * @internal
   */
  scale: Scale;
  /**
   * @internal
   */
  layout: TabLayout;
  /**
   * @internal
   */
  position: TabPosition;
  /**
   * @internal
   */
  bordered: boolean;
  /**
   * @internal
   */
  indicatorOffset: number;
  /**
   * @internal
   */
  indicatorWidth: number;
  selectedTabChanged(): Promise<void>;
  selectedTabElChanged(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  render(): VNode;
  focusPreviousTabHandler(event: CustomEvent): void;
  focusNextTabHandler(event: CustomEvent): void;
  internalActivateTabHandler(event: CustomEvent<TabChangeEventDetail>): void;
  activateTabHandler(event: CustomEvent<TabChangeEventDetail>): void;
  /**
   * Check for active tabs on register and update selected
   *
   * @param event
   */
  updateTabTitles(event: CustomEvent<TabID>): void;
  globalInternalTabChangeHandler(event: CustomEvent<TabChangeEventDetail>): void;
  iconStartChangeHandler(): void;
  /**
   * Emits when the selected `calcite-tab` changes.
   *
   * @see [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)
   */
  calciteTabChange: EventEmitter<TabChangeEventDetail>;
  /**
   * @internal
   */
  calciteInternalTabChange: EventEmitter<TabChangeEventDetail>;
  selectedTab: TabID;
  selectedTabEl: HTMLCalciteTabTitleElement;
  parentTabsEl: HTMLCalciteTabsElement;
  tabNavEl: HTMLDivElement;
  activeIndicatorEl: HTMLElement;
  activeIndicatorContainerEl: HTMLDivElement;
  animationActiveDuration: number;
  resizeObserver: ResizeObserver;
  handleContainerScroll: () => void;
  updateOffsetPosition(): void;
  updateActiveWidth(): void;
  getIndexOfTabTitle(el: HTMLCalciteTabTitleElement, tabTitles?: HTMLCalciteTabTitleElement[]): number;
  getTabTitleById(id: TabID): Promise<HTMLCalciteTabTitleElement | null>;
  get tabTitles(): HTMLCalciteTabTitleElement[];
  get enabledTabTitles(): HTMLCalciteTabTitleElement[];
}
