export interface ILanguageItem {
  languageId: string;
  type: string;
  name: string;
  onCall?: () => void;
  onCallVideo?: () => void;
  disable?: boolean;
}
