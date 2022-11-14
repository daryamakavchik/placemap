import "form-request-submit-polyfill/form-request-submit-polyfill";
import { VNode } from "../../stencil-public-runtime";
import { ButtonAlignment, ButtonAppearance, ButtonColor } from "./interfaces";
import { FlipContext, Scale, Width } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { InteractiveComponent } from "../../utils/interactive";
import { FormOwner } from "../../utils/form";
/** Passing a 'href' will render an anchor link, instead of a button. Role will be set to link, or button, depending on this. */
/** It is the consumers responsibility to add aria information, rel, target, for links, and any button attributes for form submission */
/** @slot - A slot for adding text. */
export declare class Button implements LabelableComponent, InteractiveComponent, FormOwner {
  el: HTMLCalciteButtonElement;
  /** Specifies the alignment of the component's elements. */
  alignment?: ButtonAlignment;
  /** Specifies the appearance style of the component. */
  appearance: ButtonAppearance;
  /** Accessible name for the component. */
  label?: string;
  /** Specifies the color of the component. */
  color: ButtonColor;
  /**  When `true`, interaction is prevented and the component is displayed with lower opacity. */
  disabled: boolean;
  /**
   * Specifies the URL of the linked resource, which can be set as an absolute or relative path.
   */
  href?: string;
  /** Specifies an icon to display at the end of the component. */
  iconEnd?: string;
  /** When `true`, the icon will be flipped when the element direction is right-to-left (`"rtl"`). */
  iconFlipRtl?: FlipContext;
  /** Specifies an icon to display at the start of the component. */
  iconStart?: string;
  /**
   * Accessible name when the component is loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * When `true`, a busy indicator is displayed and interaction is disabled.
   */
  loading: boolean;
  /** Specifies the name of the component on form submission. */
  name?: string;
  /**
   * Defines the relationship between the `href` value and the current document.
   *
   * @mdn [rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)
   */
  rel?: string;
  /**
   * The form ID to associate with the component.
   *
   * @deprecated – The property is no longer needed if the component is placed inside a form.
   */
  form?: string;
  /** When `true`, adds a round style to the component. */
  round: boolean;
  /** Specifies the size of the component. */
  scale: Scale;
  /** Specifies if the component is a child of a `calcite-split-button`. */
  splitChild?: "primary" | "secondary" | false;
  /**
   * Specifies where to open the linked document defined in the `href` property.
   *
   * @mdn [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
   */
  target?: string;
  /**
   * Specifies the default behavior of the button.
   *
   * @mdn [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
   */
  type: string;
  /** Specifies the width of the component. */
  width: Width;
  loadingChanged(newValue: boolean, oldValue: boolean): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  render(): VNode;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  formEl: HTMLFormElement;
  labelEl: HTMLCalciteLabelElement;
  /** watches for changing text content */
  private mutationObserver;
  /** the rendered child element */
  private childEl?;
  /** determine if there is slotted content for styling purposes */
  private hasContent;
  /** determine if loader present for styling purposes */
  private hasLoader;
  private updateHasContent;
  private setupTextContentObserver;
  onLabelClick(): void;
  private handleClick;
}
