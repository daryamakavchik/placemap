import { VNode } from "../../stencil-public-runtime";
import { OverlayPositioning, FloatingUIComponent, LogicalPlacement, ReferenceElement } from "../../utils/floating-ui";
/**
 * @slot - A slot for adding text.
 */
export declare class Tooltip implements FloatingUIComponent {
  /** Closes the component when the `referenceElement` is clicked. */
  closeOnClick: boolean;
  /** Accessible name for the component. */
  label: string;
  /**
   * Offset the position of the component away from the `referenceElement`.
   *
   * @default 6
   */
  offsetDistance: number;
  offsetDistanceOffsetHandler(): void;
  /**
   * Offset the position of the component along the `referenceElement`.
   */
  offsetSkidding: number;
  offsetSkiddingHandler(): void;
  /**
   * When `true`, the component is open.
   */
  open: boolean;
  openHandler(value: boolean): void;
  /**
   * Determines the type of positioning to use for the overlaid content.
   *
   * Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout.
   *
   * The `"fixed"` value should be used to escape an overflowing parent container, or when the reference element's `position` CSS property is `"fixed"`.
   *
   */
  overlayPositioning: OverlayPositioning;
  overlayPositioningHandler(): void;
  /**
   * Determines where the component will be positioned relative to the `referenceElement`.
   *
   * @see [LogicalPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/floating-ui.ts#L25)
   */
  placement: LogicalPlacement;
  placementHandler(): void;
  /**
   * The `referenceElement` to position the component according to its `"placement"` value.
   *
   * Setting to the `HTMLElement` is preferred so the component does not need to query the DOM for the `referenceElement`.
   *
   * However, a string ID of the reference element can be used.
   */
  referenceElement: ReferenceElement | string;
  referenceElementHandler(): void;
  el: HTMLCalciteTooltipElement;
  effectiveReferenceElement: ReferenceElement;
  arrowEl: HTMLDivElement;
  guid: string;
  hasLoaded: boolean;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  reposition(delayed?: boolean): Promise<void>;
  setUpReferenceElement: (warn?: boolean) => void;
  getId: () => string;
  addReferences: () => void;
  removeReferences: () => void;
  getReferenceElement(): ReferenceElement;
  render(): VNode;
}
