import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { ModalBackgroundColor } from "./interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { OpenCloseComponent } from "../../utils/openCloseComponent";
/**
 * @slot header - A slot for adding header text.
 * @slot content - A slot for adding the component's content.
 * @slot primary - A slot for adding a primary button.
 * @slot secondary - A slot for adding a secondary button.
 * @slot back - A slot for adding a back button.
 */
export declare class Modal implements ConditionalSlotComponent, OpenCloseComponent {
  el: HTMLCalciteModalElement;
  /**
   * When `true`, the component is active.
   *
   * @deprecated use `open` instead.
   */
  active: boolean;
  /** When `true`, displays and positions the component.  */
  open: boolean;
  /** Passes a function to run before the component closes. */
  beforeClose?: (el: HTMLElement) => Promise<void>;
  /** When `true`, disables the component's close button. */
  disableCloseButton: boolean;
  /** When `true`, disables the closing of the component when clicked outside. */
  disableOutsideClose: boolean;
  /** Accessible name for the component's close button. */
  intlClose: string;
  /** When `true`, prevents the component from expanding to the entire screen on mobile devices. */
  docked: boolean;
  /** When `true`, disables the default close on escape behavior. */
  disableEscape: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies the width of the component. Can use scale sizes or pass a number (displays in pixels). */
  width: Scale | number;
  /** Sets the component to always be fullscreen (overrides `width`). */
  fullscreen: boolean;
  /**
   * Adds a color bar to the top of component for visual impact.
   * Use color to add importance to destructive or workflow dialogs.
   */
  color?: "red" | "blue";
  /** Sets the background color of the component's content. */
  backgroundColor: ModalBackgroundColor;
  /**
   * When `true`, disables spacing to the content area slot.
   *
   * @deprecated  Use `--calcite-modal-padding` CSS variable instead.
   */
  noPadding: boolean;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
  renderFooter(): VNode;
  renderCloseButton(): VNode;
  renderStyle(): VNode;
  hasFooter: boolean;
  closeButtonEl: HTMLButtonElement;
  contentId: string;
  /**
   * We use internal variable to make sure initially open modal can transition from closed state when rendered
   *
   * @private
   */
  isOpen: boolean;
  modalContent: HTMLDivElement;
  private mutationObserver;
  previousActiveElement: HTMLElement;
  titleId: string;
  openTransitionProp: string;
  transitionEl: HTMLDivElement;
  handleEscape(event: KeyboardEvent): void;
  /** Fires when the component is requested to be closed and before the closing transition begins. */
  calciteModalBeforeClose: EventEmitter<void>;
  /** Fires when the component is closed and animation is complete. */
  calciteModalClose: EventEmitter<void>;
  /** Fires when the component is added to the DOM but not rendered, and before the opening transition begins. */
  calciteModalBeforeOpen: EventEmitter<void>;
  /** Fires when the component is open and animation is complete. */
  calciteModalOpen: EventEmitter<void>;
  /**
   * Focus the first interactive element.
   *
   * @param el
   * @deprecated use `setFocus` instead.
   */
  focusElement(el?: HTMLElement): Promise<void>;
  /**
   * Sets focus on the component.
   *
   * By default, tries to focus on focusable content. If there is none, it will focus on the close button.
   * To focus on the close button, use the `close-button` focus ID.
   *
   * @param focusId
   */
  setFocus(focusId?: "close-button"): Promise<void>;
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  scrollContent(top?: number, left?: number): Promise<void>;
  private setTransitionEl;
  onBeforeOpen(): void;
  onOpen(): void;
  onBeforeClose(): void;
  onClose(): void;
  activeHandler(value: boolean): void;
  toggleModal(value: boolean): Promise<void>;
  private openEnd;
  /** Open the modal */
  private openModal;
  handleOutsideClose: () => void;
  /** Close the modal, first running the `beforeClose` method */
  close: () => Promise<void>;
  focusFirstElement: () => void;
  focusLastElement: () => void;
  private removeOverflowHiddenClass;
  private updateFooterVisibility;
}
