// Registry of sections that have real content written for them.
// The section screen looks a component up here by gameId + sectionId;
// anything not listed shows a "Coming soon" placeholder.
//
// To add content: create a component in components/sections/<game>/,
// then register it below.

import { ComponentType } from 'react';
import { AzurLaneCampaign } from './azurlane/Campaign';
import { AzurLaneFactions } from './azurlane/Factions';
import { SectionContentProps } from './types';

const SECTION_CONTENT: Record<string, Record<string, ComponentType<SectionContentProps>>> = {
  azurlane: {
    campaign: AzurLaneCampaign,
    factions: AzurLaneFactions,
  },
};

export function getSectionContent(gameId: string, sectionId: string) {
  return SECTION_CONTENT[gameId]?.[sectionId];
}
