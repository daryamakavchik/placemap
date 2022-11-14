import { VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding custom content, primarily loading information.
 */
export declare class Scrim {
  /**
   * Accessible name when the component is loading.
   *
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * When `true`, a busy indicator is displayed.
   */
  loading: boolean;
  el: HTMLCalciteScrimElement;
  render(): VNode;
}
