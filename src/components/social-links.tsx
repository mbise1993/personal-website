import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';

const LINK_CLASSES = 'no-underline';

export interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export const SocialLinks = ({
  className = '',
  iconSize = 20,
}: SocialLinksProps) => {
  return (
    <div className={className}>
      <a className={LINK_CLASSES} href="https://x.com/matthewbise">
        <TwitterLogoIcon height={iconSize} width={iconSize} />
      </a>
      <a className={LINK_CLASSES} href="https://instagram.com/matthew.bise">
        <InstagramLogoIcon height={iconSize} width={iconSize} />
      </a>
      <a className={LINK_CLASSES} href="https://github.com/mbise1993">
        <GitHubLogoIcon height={iconSize} width={iconSize} />
      </a>
    </div>
  );
};
