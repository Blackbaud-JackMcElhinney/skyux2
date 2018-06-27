import {
  SkyFlyoutPermalink
} from './flyout-permalink';
import {
  SkyFlyoutPrimaryAction
} from './flyout-primaryaction';

export interface SkyFlyoutConfig {
  ariaDescribedBy?: string;
  ariaLabelledBy?: string;
  ariaRole?: string;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  permalink?: SkyFlyoutPermalink;
  primaryAction?: SkyFlyoutPrimaryAction;
  providers?: any[];
}
