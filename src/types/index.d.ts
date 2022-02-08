export interface socialIcon {
  name: string;
  icon: Array<string>;
  url: string;
  hideIn?: string;
}

export interface Review {
  id?: string;
  classes?: string;
  title?: string;
  link: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailTitle: string;
  text: string;
  order: number;
  mobileOrder: number;
  isUpcoming?: boolean;
}

export interface DropdownOption {
  name: string;
  link: string;
}

export interface PartnerDataItem {
  id: string;
  img: string;
  alt: string;
  title: string;
  link?: string;
}
