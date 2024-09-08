export interface SideBarFiltersProps {
  setIsMember: (checked: boolean) => void;
  setIsIndependent: (checked: boolean) => void;
  activeButtons: string[];
  setActiveButtons: (activeButtons: string[]) => void;
  isMember: boolean;
  isIndependent: boolean;
}
